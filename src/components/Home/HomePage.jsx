import Banner from '../Nav/Banner';
import Picture from '../Nav/Picture';
import Footer from '../Footer/Footer';
import Card from './Card'
import image from '../../assets/IMG.png'
import styled from 'styled-components';

const Width = styled.div`
    width: 80%;
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