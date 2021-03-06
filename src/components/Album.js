import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }
    return(
        <li onClick={handleSelectAlbum}>
            <div className='album-name'>
                {props.album.title}
            </div>
        </li>
    )

}
export default Album