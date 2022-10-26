import {homes} from '../../datas/List';
import '../../styles/card.scss'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

// retourne les cartes de logement
function Card() {
    return (
        <ul>
            {homes.map(({ id, title, cover }) => (
                <li key={id} className='kaza__flat' onClick={() => handleClick(title)}>
                    <img className='kaza__flat__image' src={cover} alt={`${title} cover`} />
                    <div className='kaza__flat__title'>
                    {title}
                    </div>
                </li>
            ))
            }
        </ul>)
}

export default Card