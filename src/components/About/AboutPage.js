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

const WidthCollapse = styled.div`
    width: 70%;
    margin: 0 auto
`

const Flex = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap
`


function AboutPage() {
   
    

    return <div> 

            <Flex>
            <Width>
                <Banner />
                <Picture pic={image_about} />
            </Width>
            <WidthCollapse>
                <Collapse title={About_data[0].title} text={About_data[0].text}/>
                <Collapse title={About_data[1].title} text={About_data[1].text}/>
                <Collapse title={About_data[2].title} text={About_data[2].text}/>
                <Collapse title={About_data[3].title} text={About_data[3].text}/>
            </WidthCollapse>
                <Footer />
            </Flex>

            </div>
    
}

export default AboutPage