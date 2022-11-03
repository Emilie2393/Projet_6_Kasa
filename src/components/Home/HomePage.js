import Banner from '../Nav/Banner';
import Picture from './Picture';
import Footer from '../Footer/Footer';
import Card from './Card'
import image from '../../assets/IMG.png'


function HomePage() {
    return <div>
    
        <Banner />
        <Picture pic= {image} text={"Chez vous, partout et ailleurs"}/>
        <Card />
        <Footer />

        </div>
}

export default HomePage