import image from '../../assets/IMG.png'
import '../../styles/picture.scss'


// Bandeau photo
function Picture() {
    
    return (
        <div>
            <div className="kaza__head">
                <img className='kaza__head__image' src={image} alt={"forêt et vue mer"} />
                <div className='kaza__head__text'>Chez vous, partout et ailleurs</div>
            </div>
        </div>
    )
}


export default Picture