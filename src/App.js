import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './context-api/DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  //after being redirected from login page to localhost:3000, app.js is reloading
  //and is firing of this code to get the access token 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
          dispatch({
            type: 'SET_USER',
            user: user
          });
      });

      spotify.getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcOHtW3hFU6g3')
      .then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMyDevices()
      .then(response => {
        console.log('🚀', response);
      })
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
