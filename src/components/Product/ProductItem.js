
import CareScale from '../CareScale'
import '../../styles/productitem.css'


function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function ProductItem({ id, cover, title, water, light }) {
	return (
		<li key={id} onClick={() => handleClick(title)}>
			<img className='kaza-flat-item-cover' src={cover} alt={`${title} cover`} />
			{title}
			<div>
				<CareScale scaleValue={water} careType='water' />
				<CareScale scaleValue={light} careType='light' />
			</div>
		</li>
	)
}



export default ProductItem
