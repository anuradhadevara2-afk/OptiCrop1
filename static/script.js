async function predictCrop() {

    const data = {
        N: document.getElementById("N").value,
        P: document.getElementById("P").value,
        K: document.getElementById("K").value,
        temperature: document.getElementById("temperature").value,
        humidity: document.getElementById("humidity").value,
        ph: document.getElementById("ph").value,
        rainfall: document.getElementById("rainfall").value
    };

    const resBox = document.getElementById("result");
    resBox.innerText = "Predicting... 🌱";

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.crop) {
        resBox.innerHTML = "🌾 Recommended Crop: " + result.crop;
    } else {
        resBox.innerHTML = "❌ Error in prediction";
    }
}