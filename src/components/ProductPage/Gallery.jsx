import { useState } from "react"
import '../../styles/Gallery.scss'
import vectorleft from "../../assets/Vectorleft.png"
import vectorright from "../../assets/Vectorright.png"
import PropTypes from 'prop-types'

function Gallery({pictures}){
    // on initialise picture à 0 //
    const [picture, setPicture] = useState(0);
    // fonction qui passe à l'image précédente avec la flèche gauche, si l'image est la première on affiche la dernière image de la liste //
    const leftPictures = () => {
        const firstPicture = picture === 0
        const newPicture = firstPicture ? pictures.length - 1 : picture - 1
        setPicture(newPicture)
    }
    // fonction qui passe à l'image suivante avec la flèche droite, si l'image est la dernière on affiche la première image de la liste //
    const rightPictures = () => {
        const lastPicture = picture === pictures.length - 1
        const newPicture = lastPicture ? 0 : picture + 1
        setPicture(newPicture)
    }

    // si il n'y a qu'une image les flèches disparaissent //
    return(
        <div className="kaza__slides">
            <div className =  'kaza__slides__pictures'><img src={pictures[picture]} alt="images de l'appartement" /></div>
            <div className= {pictures.length <= 1 ? 'kaza__slides__hiddenvector' : 'kaza__slides__vectorleft'}><img src={vectorleft} alt="flèche gauche" onClick={leftPictures}/></div>
            <div className= {pictures.length <= 1 ? 'kaza__slides__hiddenvector' : 'kaza__slides__vectorright'}><img src={vectorright} alt="flèche droite" onClick={rightPictures}/></div>
        </div>
        
    )
}

// vérifie le type des props //
Gallery.propTypes = {
    pictures: PropTypes.array
}

export default Gallery