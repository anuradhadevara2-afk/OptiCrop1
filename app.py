from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model and scaler
model = joblib.load("models/crop_model.joblib")
scaler = joblib.load("models/scaler.joblib")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    features = np.array([[
        float(data["N"]),
        float(data["P"]),
        float(data["K"]),
        float(data["temperature"]),
        float(data["humidity"]),
        float(data["ph"]),
        float(data["rainfall"])
    ]])

    features = scaler.transform(features)

    crop = model.predict(features)[0]

    return jsonify({
        "crop": crop
    })


if __name__ == "__main__":
    app.run(debug=True)