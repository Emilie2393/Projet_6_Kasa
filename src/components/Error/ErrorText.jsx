import '../../styles/error.scss'
import { Link } from 'react-router-dom'


function ErrorText(){
    return (  
    <div className="error">
        <h1 className='error__404'>404</h1>
        <div className='error__text'>Oups! La page que vous demandez n'existe pas</div>
        <Link to="/" className='error__link'>Retournez sur la page d'accueil</Link>
    </div>
    )
}

export default ErrorText