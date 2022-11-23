import '../../styles/Collapse.scss'
import vectorup from '../../assets/Vectorup.png'
import vectordown from '../../assets/Vectordown.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({title, text, textArray}) {

    // state du collapse par défaut fermé //
    const [open, isOpen] = useState(false)
    // fonction qui change le state au click // 
    const reveal = () =>{
        isOpen(!open)
    }
    return (
        <div className="kaza__shapping">
            <div className="kaza__collapse">
                    <div className="kaza__collapse__title" onClick={reveal}>
                        <h1>{title}</h1>
                        <div>{open === true ? <img src={vectorup} alt="flèche haut"/> :  <img src={vectordown} alt="flèche bas"/>}</div>
                    </div>
                    <div className={open === true ? "kaza__collapse__textOpen" : "kaza__collapse__text"}>
                        <div>{textArray ? textArray.map((equipments) => <li key={equipments}>{(equipments)}</li>) : <p>{text}</p> }</div>
                    </div>
                </div>   
        </div>
    )
}

// vérifie le type des props //
Collapse.propTypes = {
    title: PropTypes.string,
    text : PropTypes.string,
    textArray : PropTypes.array,
}

export default Collapse