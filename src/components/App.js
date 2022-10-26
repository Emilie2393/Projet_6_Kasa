import HomePage from './Home/HomePage';
import ProductPage from './Product/ProductPage';
import QuestionForm from './QuestionForm'

import { Routes, Route } from "react-router-dom";


function App() {
    return <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <QuestionForm />
        

    </div>
}



export default App
