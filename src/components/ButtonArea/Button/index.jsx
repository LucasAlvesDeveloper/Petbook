import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ task }) {
    const texts = {
        'findPetshop': 'Encontrar Petshop',
        'signInPetshop': 'Cadastrar Petshop'
    }

    let path = task === 'findPetshop' ? '/encontrar-petshop' : '/cadastrar-petshop'

    let choice = task === 'findPetshop' ? 'findPetshop' : 'signInPetshop'

    return (
        <div>
            <Link to={path}>
                <button>{texts[choice]}</button>
            </Link>
        </div>
    )
}