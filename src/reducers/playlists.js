const initialState = [
    'Home Playlist',
    'Work Playlist'
];

export default function playlists(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}