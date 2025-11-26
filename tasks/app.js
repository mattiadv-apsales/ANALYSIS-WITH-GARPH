function SaveTasks({tasks, setTasks}) {

    let [title, setTitle] = React.useState("")
    let [desc, setDesc] = React.useState("")
    let [message, setMessage] = React.useState("")

    function clear_message() {
        setMessage("")
    }

    function save_task() {
        if (title.length > 0 && desc.length > 0) {
            setTasks([...tasks, {"title": title, "desc": desc, "state": false}])
            setTitle("")
            setDesc("")
            setMessage("Done brooo")
            setTimeout(clear_message, 2000)
        } else {
            setMessage("Inserire dei valori in entrambi i campi!")
            setTimeout(clear_message, 2000)
        }
    }

    return (
        <>
            {
                <>
                    <label for="title">Titolo: </label>
                    <input type="text" className="Title" id = "title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label for="desc">Descrizione: </label>
                    <input type="text" id = "desc" className="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <button className="send_task" onClick={save_task}>Save</button>
                    <p>{message}</p>
                </>
            }
        </>
    )
}

function ViewTasks({ tasks, setTasks }) {

    function delete_task(task) {
        setTasks(tasks.filter(t => t !== task))
    }

    function change_state(task) {
        let idx = tasks.findIndex(t => t === task)
        let new_tasks = [...tasks]

        new_tasks[idx].state = !new_tasks[idx].state

        setTasks(new_tasks)
    }

    return (
        <>
            <ul>
                {tasks.map((task, i) => {
                    return (
                        <React.Fragment key={i}>
                            <input type="checkbox" onChange={() => change_state(task)} checked={task.state} />
                            <li>Title: {task.title}</li>
                            <li>Description: {task.desc}</li>
                            <li>{task.state === true ? "Fatta" : "Da fare"}</li>
                            <button onClick={() => delete_task(task)}>Elimina</button>
                            <br />
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    )
}

function App() {
    let [tasks, setTasks] = React.useState([])

    return (
        <>
            {
                <>
                    <div className="container">
                        Welcome to tasks
                    </div>
                    <div className="container">
                        <SaveTasks tasks={tasks} setTasks={setTasks} />
                        <ViewTasks tasks={tasks} setTasks={setTasks} />
                    </div>
                </>
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)