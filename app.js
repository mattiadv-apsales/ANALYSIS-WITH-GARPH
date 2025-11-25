function App() {
    return (
        <div className = "ciao">
            Ciao amici
        </div>
    )
}

let giochi = [1,2,3,4,5,6,7,8,9,10]

function CreateCard() {
    return (
        <>
            {giochi.map((g) => {
                return (
                    <div className="card">
                        Gioco {g}
                    </div>
                )
            })}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
<>
    <App />
    <CreateCard />
    <CreateCard />
</>
)