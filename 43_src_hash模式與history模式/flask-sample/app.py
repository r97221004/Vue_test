from flask import Flask, render_template


app = Flask(__name__,
            template_folder="./web/dist",
            static_folder="./web/dist",
            static_url_path="")


@app.route("/")
def index():
    return render_template('index.html')
