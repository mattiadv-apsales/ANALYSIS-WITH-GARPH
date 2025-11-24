from flask import Flask, request, json, jsonify, send_file, render_template
from createGraph import return_graph

app = Flask(__name__)

@app.get("/")
def index():
    return render_template("index.html")

@app.post("/graph")
def graph():
    data = request.json
    x = data["x"]
    y = data["y"]
    response = return_graph(x, y)
    return jsonify({"status": response})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)