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
        <Collapse title={About_data[0].title} text={About_data[0].text}/>
        <Collapse title={About_data[1].title} text={About_data[1].text}/>
        <Collapse title={About_data[2].title} text={About_data[2].text}/>
        <Collapse title={About_data[3].title} text={About_data[3].text}/>
        <Footer />

        </div>
}

export default AboutPage