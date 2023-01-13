import "../../styles/Card.scss";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../PageComponents/Fetch";
import { useEffect } from "react";
import Logo from "../../assets/LOGO.png"


// retourne les cartes de logement
function Card({modifyPage}) {
  // récupère les données du fichier json //
  const { isLoading, data, error } = useFetch(
    `http://localhost:3000/data/List.json`
  );
  // initialise useNavigate pour construire l'URL de la page appartement au click //
  let navigate = useNavigate();
  const initId = (id) => {
    navigate("/product/" + id);
  };

  useEffect(() => {
    // quand le chargement est terminé et que les data sont disponibles //
    //nouveau commit
    if (!isLoading) {
      modifyPage(false)
    }
    else{
      modifyPage(true)
    }
  });

  if (error) {
    return <span>Il y a un problème dans le composant fetch</span>;
  }
  // si les données sont en chargement, affiche un message d'attente, puis la liste des logements //
  return isLoading ? (
    <div className="loading">
        <h1>Les logements arrivent . . .</h1>
        <img className="loading__image" src ={Logo} alt="logo kasa" />
    </div>
  ) : (
    <ul className="kaza__cards">
      {data.map((flat) => (
        <li
          key={flat.id}
          className="kaza__flat"
          onClick={() => initId(flat.id)}
        >
          <img
            className="kaza__flat__image"
            src={flat.cover}
            alt={`${flat.title} cover`}
          />
          <div className="kaza__flat__title">{flat.title}</div>
        </li>
      ))}
    </ul>
  );
}

export default Card;
