import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
    return (
        <div className="Home">
            <header></header>
            <div>
                <Link to="/cadastro">
                    <button>Cadastrar</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;