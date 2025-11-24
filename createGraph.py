import matplotlib.pyplot as plt
import os

def return_graph(x, y):
    try:
        plt.figure(figsize=(6,4))
        plt.plot(x, y, marker='o')
        plt.title("Grafico d'esempio")
        plt.xlabel("Asse delle x")
        plt.ylabel("Asse delle y")

        img_path = os.path.join("static", "img", "plot.png")
        plt.savefig(img_path)
        plt.close()

        return True
    except:
        return False