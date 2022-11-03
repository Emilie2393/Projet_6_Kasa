
import '../../styles/picture.scss'


// Bandeau photo
function Picture(props) {
    return (
        <div>
            <div className="kaza__head">
                <img className='kaza__head__image' src={props.pic} alt={"forêt et vue mer"} />
                <div className='kaza__head__text'>{props.text}</div>
            </div>
        </div>
    )
}


export default Picture