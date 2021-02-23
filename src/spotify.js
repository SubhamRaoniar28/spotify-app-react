// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

//endpoint for user authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

//after successful login it will redirect to our local URI
const redirectUri = "http://localhost:3000/";

const clientId = "596c417d32034747a8eee1f588e44205";

//spotify scopes of things, a user can do
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
