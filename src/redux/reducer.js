const initialState = {
    filter: "",
    selectedAlbums: null,
    albums: [],
    photos: [],

    loadingAlbums: false,
    loadingPhotos: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loadingAlbums: true
            }

        case 'album/select':
            return {
                ...state,
                selectedAlbumId: action.payload
            }

        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }



        case 'photos/load/start':
            return {
                ...state,
                loadingPhotos: true
            }


        case 'photos/load/success':
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }

        case 'filter/set':
            return {
                ...state,
                filter:action.payload
            }

        default:
            return state;

    }
}