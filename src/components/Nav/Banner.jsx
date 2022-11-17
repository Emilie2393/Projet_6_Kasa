import '../../styles/banner.scss'
import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
    <div className="kaza__nav">
        <img className='kaza__nav__logo' src={logo} alt={"logo"} />
        <div className="kaza__nav__links">
            <Link to="/" className='kaza__nav__links__link'>Accueil</Link>
            <Link to="/api/about" className='kaza__nav__links__link'>A propos</Link>
        </div>

    </div>)
}

export default Banner