from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/write', methods=['POST'])
def write_to_file():
    data = request.form['data']
    with open('output.txt', 'w') as f:
        f.write(data)
    return 'Data written to file successfully!'

if __name__ == '__main__':
    app.run(debug=True)
