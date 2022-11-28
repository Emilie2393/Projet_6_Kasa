import logo from '../../../assets/LOGO_white.png'
import '../../../styles/Footer.scss'



function Footer({loading}) {
	return (
		<footer className={loading === true ? "hidden" :'kaza__footer'}>
			<div className='kaza__footer__wrapper'>
				<img className='kaza__footer__logo' src={logo} alt="logo kaza"/>
				<div className='kaza__footer__text'>© 2020 Kasa. All rights reserved</div>
			</div>
		</footer>
	)
}

export default Footer