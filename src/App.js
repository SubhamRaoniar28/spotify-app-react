import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  //after being redirected from login page to localhost:3000, app.js is reloading
  //and is firing of this code to get the access token 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
        console.log('😀', user);
      })
    }
  }, [])


  return (
    <div className="app">
      {
        token ? (
          //<Player />
          <h1>I am logged in!</h1>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
