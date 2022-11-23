import {homes} from '../../datas/List';
import '../../styles/Card.scss'
import { useNavigate } from 'react-router-dom';



// retourne les cartes de logement
function Card() {
    let navigate = useNavigate();
    const initId = (id) =>{
        navigate('/product/' + id)
    }
    return (
        <ul className='kaza__cards'>
            {homes.map(({ id, title, cover }) => (
                <li key={id} className='kaza__flat' onClick={() => initId(id)}>
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