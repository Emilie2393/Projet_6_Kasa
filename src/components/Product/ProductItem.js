import { useParams } from "react-router-dom";
import {homes} from '../../datas/List';
import Collapse from "../About/Collapse";
import styled from "styled-components";
import "../../styles/productitem.scss";
import PicturesSlide from "./PicturesSlide"
import Rating from "./Rating"


const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const WidthCollapse = styled.div`
    width: 47%;

`



function ProductItem() {
    const { id } = useParams()
    const donne = homes.filter(data => data.id === (id))
    

    return (
        <div>
        {donne.map(({ id, title, cover, rating, description, equipments, pictures, location, tags, host }) => (
            <div key={id} className="kaza__product">
                <PicturesSlide pictures = {pictures}/>
                <div className='kaza__product__title'>{title}</div>
                <div className="kaza__product__location">{location}</div>
                <div className="kaza__product__tags">{tags.map((tag) => <span>{(tag)}</span>)}</div>
                <Rating rating = {rating} />
                <div className="kaza__product__host">
                    <span>{host.name}</span>
                    <img src={host.picture} alt="visage du propriétaire" />
                </div>
                <Flex>
                    <WidthCollapse><Collapse  title={"description"} text={description}/></WidthCollapse>
                    <WidthCollapse><Collapse  title={"équipements"} textArray={equipments}/></WidthCollapse>
                </Flex>
                
            </div>
        ))
        }</div>

    )
    
    
}
 
export default ProductItem

