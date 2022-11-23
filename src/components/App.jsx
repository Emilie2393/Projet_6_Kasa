import HomePage from './HomePage/HomePage';
import ProductPage from './ProductPage/ProductPage';
import AboutPage from './AboutPage/AboutPage';
import ErrorPage from './ErrorPage/ErrorPage'
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
