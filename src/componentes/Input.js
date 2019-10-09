import React from 'react';

import './Input.scss'

const Input = ({ label, type, placeholder, value, atualizarState, obrigatorio }) => {
    const atualizar = (event) => {
        atualizarState(event.target.value)
    }
    return (
        <div className="Input">
            <label>{label}{obrigatorio ? "*" : ""}</label>
            <input required={obrigatorio ? true : false} type={type} placeholder={placeholder} value={value} onChange={atualizar} />
        </div>
    )
}

export default Input;