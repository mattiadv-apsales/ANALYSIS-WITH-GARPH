function ViewNumber({number, setNumber}) {

    let [o, setOut] = React.useState("")
    let [n, setNum] = React.useState("")

    function change_number() {
        setNumber(Math.floor(Math.random()* 10) + 1)
    }

    function clear_out() {
        setOut("")
    }

    function numberCorrect(nu) {
        if (Number(nu) == number) {
            setOut("Bravissimo")
            change_number()
            setNum("")
            setTimeout(clear_out, 1000)
        } else {
            setOut("Sbagliato")
            setNum("")
            setTimeout(clear_out, 1000)
        }
    }

    return (
        <>
            <input type="number" value={n} onChange={(e) => setNum(e.target.value)}/>
            <button onClick={() => numberCorrect(n)}>Proviamo</button>
            <p>{o}</p>
        </>
    )
}

function App() {
    let [number, setNumber] = React.useState(Math.floor(Math.random()* 10) + 1)

    return (
        <>
            <div className="container">
                Ciao amici
                <ViewNumber number={number} setNumber={setNumber} />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)