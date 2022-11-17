import HomePage from './Home/HomePage';
import ProductPage from './Product/ProductPage';
import AboutPage from './About/AboutPage';
import ErrorPage from './Error/ErrorPage'
import { Routes, Route } from "react-router-dom";


function App() {
    

    return <div>
        <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/api/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>

    </div>
}

export default App
