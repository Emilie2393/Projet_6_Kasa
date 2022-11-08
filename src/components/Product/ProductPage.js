import Banner from '../Nav/Banner';
import ProductItem from './ProductItem';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const Width = styled.div`
    width: 80%;
    margin: 0 auto;
`

// affiche un logement 
function ProductPage() {
    return <div>
        <Width>
        <Banner />
        <ProductItem />
        </Width>
        <Footer />

        </div>
}

export default ProductPage