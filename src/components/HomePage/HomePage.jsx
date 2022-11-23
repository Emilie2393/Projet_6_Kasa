import Banner from '../PageComponents/Nav/Banner';
import Picture from '../PageComponents/Nav/BannerPicture';
import Footer from '../PageComponents/Footer/Footer';
import Card from './Card'
import image from '../../assets/IMG.png'
import styled from 'styled-components';

const Width = styled.div`
    width: 90%;
    margin: 0 auto
`

function HomePage() {
    return <div>
        <Width>
        <Banner />
        <Picture pic= {image} text={"Chez vous, partout et ailleurs"}/>
        <Card />
        </Width>
        <Footer />
        

        </div>
}

export default HomePage