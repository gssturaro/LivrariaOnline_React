import React from 'react';

import './Botao.scss'

const Botao = ({children}) => {
    return(
        <button className="Botao">{children}</button>
    )
}

export default Botao;