import RedStar from '../../assets/VectorRed.png'
import GreyStar from '../../assets/VectorGrey.png'
import '../../styles/Rating.scss'
import PropTypes from 'prop-types'

function Rating({rating}){
    // initialise le nombre potentiel d'étoiles // 
    const rates = [1, 2, 3, 4, 5]

    // si i est inférieur ou égal à rating = étoile rouge quand i devient supérieur = étoile grise
    return (
        <div className='rating'>
        {rates.map((i) => 
            rating >= i ? <img src={RedStar} alt='étoile rouge' key={i}/> : <img src={GreyStar} alt="étoile grise" key={i}/>)}
        </div>
    )
}

// vérifie le type des props //
Rating.propTypes = {
    rating: PropTypes.string,
}


export default Rating