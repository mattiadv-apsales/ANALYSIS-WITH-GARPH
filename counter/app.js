function NumberPart({counter, setCounter}) {
    function summ() {
        setCounter(counter + 1)
    }

    function sott() {
        setCounter(counter - 1)
    }

    return (
        <>
            <button onClick={summ}>+</button>
            <div className="acc">{counter}</div>
            <button onClick={sott}>-</button>
        </>
    )
}

function App() {

    let [counter, setCounter] = React.useState(0)

    return (
        <>
            <div className="container">
                Ciao amici
                <NumberPart counter={counter} setCounter={setCounter} />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)