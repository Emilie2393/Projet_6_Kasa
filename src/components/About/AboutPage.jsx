import Banner from '../Nav/Banner';
import Picture from '../Nav/Picture';
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
    margin: 0 auto;
    margin-bottom: 60px;
    font-size: 1.2em;
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
                <ul>
                    {About_data.map((collapse => ( 
                        <Collapse key={collapse.index} title={collapse.title} text={collapse.text} />)))}
                </ul>
            </WidthCollapse>
                <Footer />
            </Flex>

            </div>
    
}

export default AboutPage