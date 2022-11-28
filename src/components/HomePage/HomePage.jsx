import Banner from '../PageComponents/Nav/Banner';
import Picture from '../PageComponents/Nav/BannerPicture';
import Footer from '../PageComponents/Footer/Footer';
import Card from './Card'
import image from '../../assets/IMG.png'
import styled from 'styled-components';
import { useState } from 'react';

const Width = styled.div`
  width: 90%;
  margin: 0 auto;
`

function HomePage() {
  // modifie le state des élements en fonction du chargement des données //
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <Width>
        <Banner loading={hidden} />
        <Picture
          loading={hidden}
          pic={image}
          text={"Chez vous, partout et ailleurs"}
        />
        <Card modifyPage={setHidden} />
      </Width>
      <Footer loading={hidden} />
    </div>
  );
}

export default HomePage;