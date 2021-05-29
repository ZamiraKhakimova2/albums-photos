import {useDispatch, useSelector} from "react-redux";
import Photo from './Photo'
import {setFilterText} from "../redux/actions";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const selectedPhotoId = useSelector(state => state.selectedPhotoId);
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter)

    const filteredPhotos = photos.filter(photo => {
        if(photo.userId === selectedPhotoId) {
            return true;
        }
        return false
    })

    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }

    if (selectedPhotoId === null) {
        return (
            <div className='null-photo-selected'>
                Выбери альбом в списке слева
            </div>
        )
    }
    return(
        <div className='photos'>
            <div className='filter'>
                <input type='text'
                       placeholder='Фильтр по тексту'
                       value={filter}
                       onChange={handleChangeFilter}/>
            </div>

            <ul>
                {filteredPhotos.map(photo => {
                    return <Photo photo={photo} key={photo.id}/>
                })}
            </ul>

        </div>
    )
}

export default Photos