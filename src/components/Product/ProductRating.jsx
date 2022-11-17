import RedStar from '../../assets/VectorRed.png'
import GreyStar from '../../assets/VectorGrey.png'
import '../../styles/rating.scss'

function Rating(props){
    const rates = [1, 2, 3, 4, 5]

    return (
        <div className='rating'>
        {rates.map((i) => 
            props.rating >= i ? <img src={RedStar} alt='étoile rouge' key={i}/> : <img src={GreyStar} alt="étoile grise" key={i}/>)}
        </div>
    )

}

export default Rating