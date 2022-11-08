import { useParams } from "react-router-dom";
import {homes} from '../../datas/List';
import Collapse from "../About/Collapse";
import styled from "styled-components";
import "../../styles/productitem.scss";
import PicturesSlide from "./PicturesSlide"

const Flex = styled.div`
    display: flex;
    flexwrap: wrap;
`



function ProductItem() {
    const { id } = useParams()
    const donne = homes.filter(data => data.id === (id))
    

    return (
        <div>
        {donne.map(({ id, title, cover, rating, description, equipments, pictures, location, tags }) => (
            <div key={id} className="kaza__product">
                <PicturesSlide pictures = {pictures}/>
                <div className='kaza__product__title'>{title}</div>
                <div className="kaza__product__location">{location}</div>
                <div className="kaza__product__tags">{tags.map((tag) => <span>{(tag)}</span>)}</div>
                <div className='kaza__product__rating'>
                {rating}
                </div>
                <Flex>
                <Collapse  title={"description"} text={description}/>
                <Collapse  title={"équipements"} textArray={equipments}/>
                </Flex>
                
            </div>
        ))
        }</div>

    )
    
    
}
 
export default ProductItem

