import Banner from '../Nav/Banner';
import Picture from '../Home/Picture';
import Footer from '../Footer/Footer';
import image_about from '../../assets/aboutpic.png'
import Collapse from './Collapse'
import {About_data} from '../../datas/About'
import '../../styles/about.scss'
import styled from "styled-components";

const Width = styled.div`
    width: 80%;
    margin: 0 auto
`

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
`


function AboutPage() {
   
    

    return <div> 

            <Width>
                <Banner />
            </Width>
            <Flex>
            <Width>
                <Picture pic={image_about} />
                <Collapse title={About_data[0].title} text={About_data[0].text}/>
                <Collapse title={About_data[1].title} text={About_data[1].text}/>
                <Collapse title={About_data[2].title} text={About_data[2].text}/>
                <Collapse title={About_data[3].title} text={About_data[3].text}/>
            </Width>
                <Footer />
            </Flex>
            </div>
    
}

export default AboutPage