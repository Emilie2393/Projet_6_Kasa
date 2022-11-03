import Banner from '../Nav/Banner';
import Picture from '../Home/Picture';
import Footer from '../Footer/Footer';
import image_about from '../../assets/aboutpic.png'
import Collapse from './Collapse'
import {About_data} from '../../datas/About'
import '../../styles/about.scss'


function AboutPage() {
   
    

    return <div className='flex'>
        
        <Banner />
        <Picture pic={image_about} />
        <Collapse data={About_data}/>
        <Footer />

        </div>
}

export default AboutPage