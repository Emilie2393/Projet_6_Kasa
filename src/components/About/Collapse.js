import '../../styles/collapse.scss'
import vectorup from '../../assets/Vectorup.png'
import vectordown from '../../assets/Vectordown.png'
import { useState } from 'react'

function Collapse(props) {
    const [open, isOpen] = useState(null)

    const reveal = (i) => {
        if (open === i){
            return isOpen(null)
        }
        isOpen(i)
    }
    return (
        <div className="kaza__shapping">
            {props.data.map((item, i)=> (
                <div className="kaza__collapse">
                    <div className="kaza__collapse__title" onClick={() => reveal(i)}>
                        <h2>{item.title}</h2>
                        <div>{open === i ? <img src={vectorup} alt="flèche haut"/> :  <img src={vectordown} alt="flèche bas"/>}</div>
                    </div>
                    <div className={open === i ? "kaza__collapse__textOpen" : "kaza__collapse__text"}>
                            {item.text}
                    </div>
                </div>
                )
                )}
        </div>
        
    )
}

export default Collapse