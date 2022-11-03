import { useParams } from "react-router-dom";
import {homes} from '../../datas/List'


function ProductItem() {
    const { id } = useParams()
    const donne = homes.filter(data => data.id === (id))

    return (
        <div>
        {donne.map(({ id, title, cover, description, rating }) => (
            <div key={id} className='kaza__product' >
                <img className='kaza__product__image' src={cover} alt={`${title} cover`} />
                <div className='kaza__product__title'>
                {title}
                </div>
                <div className='kaza__product__description'>
                {description}
                </div>
                <div className='kaza__product__rating'>
                {rating}
                </div>
            </div>
        ))
        }</div>

    )
    
    
}
 
export default ProductItem

