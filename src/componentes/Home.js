import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
    return (
        <div className="Home">
            <header></header>
            <div>
                <h1>Cadastre-se Agora!</h1>
                <Link to="/cadastro">
                    <button>Cadastre-se</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;