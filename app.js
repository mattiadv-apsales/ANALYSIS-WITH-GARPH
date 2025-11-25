function App() {
    return (
        <div className = "ciao">
            Ciao amici
        </div>
    )
}

let giochi = ["Impiccato", "Indovina il numero"]

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

function GuessTheNumber() {
  const [number, setNumber] = React.useState(""); // input dell'utente
  const [output, setOutput] = React.useState(""); // messaggio di output
  let number_to_guess = Math.floor(Math.random() * 10) + 1;

  function Is_Correct() {
    if (parseInt(number) === number_to_guess) {
        setOutput("Esatto!");
    } else {
        setOutput("Fai pena!");
        setNumber("")
    }
  }

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={Is_Correct}>Controlla</button>
      <p>{output}</p>
    </div>
  );
}

function GetUsers() {
    let [n, setIn] = React.useState("")
    let [e, setEm] = React.useState("")
    let [users, setUsers] = React.useState([])

    function save_user() {
        setUsers([...users, {"name": n, "email": e}])
        setIn("")
        setEm("")
    }

    return (
        <>
            <input type = "text" value={n} onChange={(e) => setIn(e.target.value)}/>
            <input type = "email" value={e} onChange={(e) => setEm(e.target.value)}/>
            <button onClick={save_user}>Salvami</button>
            {
                <ul>
                    {users.map(user => {
                        return (
                            <>
                                <li>Name: {user.name}</li>
                                <li>Email: {user.email}</li>
                                <br />
                            </>
                        )
                    })}
                </ul>
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
<>
    <App />
    <CreateCard />
    <GuessTheNumber />
    <GetUsers />
</>
)