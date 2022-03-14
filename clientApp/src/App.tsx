import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './components/homePage';
import GraphsPage from './components/graphsPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="graphs" element={<GraphsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
