
import '../../styles/Card.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import useFetch from '../PageComponents/Fetch'


// retourne les cartes de logement
function Card() {

    

    // const { data } = useFetch("http://localhost:3000/data/List.json")

    // console.log({ data })
    const [data, setData] = useState([])

    let fetchdata = async() => {
        const response = await fetch("http://localhost:3000/data/List.json")
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    let navigate = useNavigate();
    const initId = (id) => {
        navigate('/product/' + id)
    }

    console.log("data", data)
    
    return (
        <ul className='kaza__cards'>
            {data.map(flat =>
                <li key={flat.id} className='kaza__flat' onClick={() => initId(flat.id)}>
                    <img className='kaza__flat__image' src={flat.cover} alt={`${flat.title} cover`} />
                    <div className='kaza__flat__title'>
                    {flat.title}
                    </div>
                </li>
            )
            }
        </ul>)
}

export default Card