from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Permite cargar scripts desde la carpeta raíz /js/
@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('js', filename)

@app.route('/')
def index():
    return render_template('index.html')

# Ruta para la pantalla de Login
@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)