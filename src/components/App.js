import Albums from "./Albums";
import Photos from "./Photos";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/actions";



function App() {
    const dispatch = useDispatch();

    const loadingAlbums = useSelector(state => state.loadingAlbums);
    const loadingPhotos = useSelector(state => state.loadingPhotos);

    useEffect(() => {
        dispatch(loadAlbums());
        dispatch(loadPhotos());
    }, []);

    if(loadingAlbums || loadingPhotos){
        return (
            <div>
                Подождите, идет загрузка...
            </div>
        )
    }

  return (
   <div className='container'>
       <Albums />
       <Photos />
   </div>
  );
}

export default App;
