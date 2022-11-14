import { useParams } from "react-router-dom";
import {homes} from '../../datas/List';
import Collapse from "../About/Collapse";
import styled from "styled-components";
import "../../styles/productitem.scss";
import PicturesSlide from "./PicturesSlide"
import Rating from "./Rating"


const InfosFlex = styled.div`
    display: flex;
    justify-content: space-between;

`

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
                <InfosFlex>
                <div>
                    <div className='kaza__product__title'>{title}</div>
                    <div className="kaza__product__location">{location}</div>
                    <div className="kaza__product__tags">{tags.map((tag) => <span>{(tag)}</span>)}</div>
                </div>
                <div>
                    <div className="kaza__product__host">
                        <div className="kaza__product__host__name">
                            <span>{(host.name.split(' '))[0]}</span>
                            <span>{(host.name.split(' '))[1]}</span>
                        </div>
                        <img src={host.picture} alt="visage du propriétaire" />
                    </div>
                <Rating rating = {rating} />
                </div>
                </InfosFlex>
                
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

