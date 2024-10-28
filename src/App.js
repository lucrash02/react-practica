// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer message="¡Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;
