import Banner from '../PageComponents/Nav/Banner';
import ProductItem from './ProductItem';
import Footer from '../PageComponents/Footer/Footer';
import styled from 'styled-components';

const Width = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Minheight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap:wrap;
`

// affiche un logement 
function ProductPage() {
    return <div>
        <Minheight>
        <Width>
        <Banner />
        <ProductItem />
        </Width>
        <Footer />
        </Minheight>

        </div>
}

export default ProductPage