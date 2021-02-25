export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //remove token value after developing
    //token: "BQCTVpriKog_MxHD32tuEHIjBTX_4sJKrxHschYFubWQBi1ZblcIHYIPlW48-c7lbl7xvBS4gfiiOnNpaGEVL4xDcaX2POzgLZTi9sgbHRjRzyPpvckpJFG_Imy1iNkVYxubc2TY4zr3OYAK7z1j4B-iMoT57ze8nRna72kKGnx1FU_QrAGI"
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload] payload can be called whatever we want

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;