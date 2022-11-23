import Banner from '../PageComponents/Nav/Banner';
import Footer from '../PageComponents/Footer/Footer';
import ErrorText from './ErrorText';
import styled from 'styled-components';


const Flex = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap
`

const Width = styled.div`
    width: 80%;
    margin: 0 auto
`


function ErrorPage() {
    return <div>
        <Flex>
        <Width>
        <Banner />
        <ErrorText />
        </Width>
        <Footer />
        </Flex>

        </div>
}

export default ErrorPage