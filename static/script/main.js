let x = document.getElementById('x')
let y = document.getElementById('y')

x.addEventListener("keypress", function(e) {
    if (e.key == " ") {
        x.value = x.value + ","
    }
    if (e.key == "Enter") {
        all_array()
    }
})

y.addEventListener("keypress", function(e) {
    if (e.key == " ") {
        y.value = y.value + ","
    }
    if (e.key == "Enter") {
        all_array()
    }
})

let x_array = []
let y_array = []

function all_array() {
    x_array.push(x.value.split(", ").map(Number))
    console.log(x_array)
    y_array.push(y.value.split(", ").map(Number))
    console.log(y_array)

    if (x_array.length > 0 && y_array.length > 0) {
        fetch_for_graph(x_array, y_array)
    }
}

function fetch_for_graph(x, y) {
    fetch("/graph", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({"x": x, "y": y})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("graph_img").src = "/static/img/plot.png?rand=" + Math.random();
    })
}