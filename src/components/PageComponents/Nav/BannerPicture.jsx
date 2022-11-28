
import '../../../styles/BannerPicture.scss'


// Bannière photo
function Picture({pic, text, loading}) {
    return (
        <div>
            <div className={loading === true ? "hidden" :"kaza__head"}>
                <img className='kaza__head__image' src={pic} alt={"forêt et vue mer"} />
                <div className='kaza__head__text'>{text}</div>
            </div>
        </div>
    )
}


export default Picture