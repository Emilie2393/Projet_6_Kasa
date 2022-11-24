import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../PageComponents/Collapse";
import "../../styles/ProductItem.scss";
import Gallery from "./Gallery"
import Rating from "./ProductRating"
import { useState, useEffect } from "react";



function Data(){
    const [data, setData] = useState([])

    let fetchdata = async() => {
        const response = await fetch("http://localhost:3000/data/List.json")
        const data = await response.json()
        setData(data)
        
    }

    useEffect(() => {
        fetchdata()
    }, [])
    return data
}



function ProductItem() {
    
    const [data, setData] = useState([])

    let fetchdata = async() => {
        const response = await fetch("http://localhost:3000/data/List.json")
        const data = await response.json()
        setData(data)
        
    }

    useEffect(() => {
        fetchdata()
    })
    
    // récupère l'id du logement dans l'url //
    const { id } = useParams()
    // récupère l'appartement dans la liste homes selon son id //
    const flatInfos = data.filter(flat => flat.id === (id))
    // récupère tous les id de la liste homes pour les comparer et afficher une erreur si besoin //
    const idList = data.map(flat => flat.id)
    
    let navigate = useNavigate()
    
    const idSearch = idList.find((nb) => nb === id)
        if (idSearch === undefined){
            // renvoie vers 404 //
            navigate('*')
        }
    

    
    
    return (
        <div>
        {flatInfos.map(({ id, title, rating, description, equipments, pictures, location, tags, host }) => (
            <div key={id} className="kaza__product">
                <Gallery pictures = {pictures}/>
                <div className='kaza__product__flex'>
                <div>
                    <h1 className='kaza__product__title'>{title}</h1>
                    <div className="kaza__product__location">{location}</div>
                    <div className="kaza__product__tags">{tags.map((tag, index) => <span key={index}>{(tag)}</span>)}</div>
                </div>
                <div className='kaza__product__hostandrating'>
                    <div className="kaza__product__host">
                        <div className="kaza__product__host__name">
                            <span>{(host.name.split(' '))[0]}</span>
                            <span>{(host.name.split(' '))[1]}</span>
                        </div>
                        <img src={host.picture} alt="visage du propriétaire" />
                    </div>
                <Rating rating = {rating} />
                </div>
                </div>
                
                <div className="kaza__product__collapse">
                    <div className="kaza__product__collapse__width"><Collapse  title={"description"} text={description}/></div>
                    <div className="kaza__product__collapse__width"><Collapse  title={"équipements"} textArray={equipments}/></div>
                </div>
            </div>
        ))
        }</div>
    )
}
 
export default ProductItem

