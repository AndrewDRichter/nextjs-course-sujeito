'use client'

import { useState } from "react"

export function Button() {
    const [nome, setNome] = useState("Andrew")

    function handleChangeName() {
        setNome("Andrs")
    }


    return (
        <div>
            <button onClick={handleChangeName}>Alterar nome</button><br />
            <h3>{nome}</h3>
        </div>
    )
}