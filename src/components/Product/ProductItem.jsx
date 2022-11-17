import { useNavigate, useParams } from "react-router-dom";
import {homes} from '../../datas/List';
import Collapse from "../About/Collapse";
import styled from "styled-components";
import "../../styles/productitem.scss";
import PicturesSlide from "./PicturesSlide"
import Rating from "./ProductRating"
import { useEffect } from "react";


const InfosFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px
`

const WidthCollapse = styled.div`
    width: 47%;
`

function ProductItem() {
    // récupérer l'id du logement dans l'url //
    const { id } = useParams()
    // récupérer l'appartement dans la liste homes selon son id //
    const flatInfos = homes.filter(data => data.id === (id))
    // récupérer tous les id de la liste homes pour les comparer //
    const idList = homes.map(data => data.id)
    const navigate = useNavigate()

    useEffect(() => {
        // en cas de changement de l'id du produit dans l'URL affiche la page du produit ou redirige vers la page d'erreur //
        const idSearch = idList.find((nb) => nb === id)
        if (idSearch === undefined){
            // renvoie vers 404 //
            navigate('*')
        }
    })
    
    return (
        <div>
        {flatInfos.map(({ id, title, rating, description, equipments, pictures, location, tags, host }) => (
            <div key={id} className="kaza__product">
                <PicturesSlide pictures = {pictures}/>
                <InfosFlex>
                <div>
                    <div className='kaza__product__title'>{title}</div>
                    <div className="kaza__product__location">{location}</div>
                    <div className="kaza__product__tags">{tags.map((tag, index) => <span key={index}>{(tag)}</span>)}</div>
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

