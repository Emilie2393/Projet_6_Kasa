import Banner from '../PageComponents/Nav/Banner';
import ProductItem from './ProductItem';
import Footer from '../PageComponents/Footer/Footer';
import styled from 'styled-components';
import { useState } from 'react';

const Width = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Minheight = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
`



// affiche un logement
function ProductPage() {

  // modifie le state des élements en fonction du chargement des données // 
  const [hidden, setHidden] = useState(true)
  return (
    <div>
      <Minheight>
        <Width>
          <Banner loading = {hidden}/>
          <ProductItem modifyPage = {setHidden}/>
        </Width>
        <Footer loading = {hidden} />
      </Minheight>
    </div>
  );
}

export default ProductPage