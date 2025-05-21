import { useState } from "react"

export function App() {
    const [number, setNumber] = useState(100)        
    const [texto, setTexto] = useState(false) 

    function handleAumentar() {
        setNumber(number + 100)
    }

    function handleTexto() {
        setTexto(valor => !valor)
    }

    return (
        <main>
            <h1>App</h1>

            <section>
                <p>Valor atual: {number}</p>
                <button onClick={handleAumentar}>Aumentar</button>
            </section>

            <section>
                {texto ? <p>texto</p> : null}
                <button onClick={handleTexto}>
                    {texto ? "Esconder" : "mostrar"}
                </button>
            </section>
        </main>
    )
}