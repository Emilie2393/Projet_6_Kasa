import Banner from '../PageComponents/Nav/Banner';
import Picture from '../PageComponents/Nav/BannerPicture';
import Footer from '../PageComponents/Footer/Footer';
import image_about from '../../assets/aboutpic.png'
import Collapse from '../PageComponents/Collapse'
import {About_data} from '../../datas/About'
import styled from "styled-components";

const Width = styled.div`
    width: 90%;
    margin: 0 auto
`

const WidthCollapse = styled.div`
    width: 80%;
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
                <ul className='kaza__about__collapse'>
                    {About_data.map((collapse => ( 
                        <Collapse key={collapse.title} title={collapse.title} text={collapse.text} />)))}
                </ul>
            </WidthCollapse>
                <Footer />
            </Flex>

            </div>
    
}

export default AboutPage