import '../../styles/collapse.scss'
import vectorup from '../../assets/Vectorup.png'
import vectordown from '../../assets/Vectordown.png'
import { useState } from 'react'

function Collapse(props) {
    const textArray = props.textArray
    const text = props.text
    const [open, isOpen] = useState(false)

    const reveal = (i) =>{
        isOpen(!open)
    }
    return (
        <div className="kaza__shapping">
            <div className="kaza__collapse">
                    <div className="kaza__collapse__title" onClick={reveal}>
                        <h1>{props.title}</h1>
                        <div>{open === true ? <img src={vectorup} alt="flèche haut"/> :  <img src={vectordown} alt="flèche bas"/>}</div>
                    </div>
                    <div className={open === true ? "kaza__collapse__textOpen" : "kaza__collapse__text"}>
                        <div>{textArray ? textArray.map((text) => <li key={text}>{(text)}</li>) : <span>{text}</span> }</div>
                    </div>
                </div>   
        </div>
        
    )
}

export default Collapse