# 🌱 OptiCrop – Smart Agricultural Production Optimization Engine

## 📌 Project Overview

OptiCrop is a Machine Learning-based agricultural recommendation system that helps farmers select the most suitable crop based on soil nutrients and environmental conditions. The system analyzes soil Nitrogen (N), Phosphorus (P), Potassium (K), temperature, humidity, pH, and rainfall to recommend the best crop for cultivation.

The project aims to improve agricultural productivity, reduce resource wastage, and support data-driven farming decisions.

---

## 🎯 Problem Statement

Farmers often face difficulties in selecting the right crop for their land due to changing climatic conditions and varying soil characteristics. Incorrect crop selection can lead to poor yields and financial losses.

OptiCrop addresses this problem by using machine learning algorithms to predict the most suitable crop based on soil and weather parameters.

---

## ✨ Features

- Crop recommendation based on soil and climate conditions
- Machine Learning powered prediction engine
- User-friendly web interface
- Real-time crop prediction
- Data preprocessing and model evaluation
- Model serialization using Joblib
- Flask-based backend API
- Responsive frontend using HTML, CSS, and JavaScript

---

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Flask

### Machine Learning
- Scikit-Learn
- Pandas
- NumPy

### Data Visualization
- Matplotlib
- Seaborn

### Model Storage
- Joblib

### Development Environment
- Python 3.9+
- VS Code

---

## 📂 Repository Structure

```text
opticrop/
│
├── data/
│   └── Crop_recommendation.csv
│
├── models/
│   ├── crop_model.joblib
│   └── scaler.joblib
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── train.py
├── requirements.txt
├── README.md
│
├── Brainstorming & Ideation.pdf
├── Requirement Analysis.pdf
├── Project Design Phase.pdf
├── Project Planning Phase.pdf
├── Project Development Phase.pdf
├── Project Testing.pdf
├── Project Documentation.pdf
└── Project Demonstration.pdf
```

---

## 📊 Dataset Information

Dataset: Crop Recommendation Dataset

### Input Features

- N (Nitrogen)
- P (Phosphorus)
- K (Potassium)
- Temperature
- Humidity
- pH
- Rainfall

### Target Variable

- Crop Label

### Dataset Size

- 2200 Records
- 8 Columns

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd opticrop
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🚀 Running the Project

### Step 1: Train the Model

```bash
python train.py
```

Expected Output:

```text
Model Accuracy: 99%
Model and Scaler saved successfully.
```

### Step 2: Run Flask Application

```bash
python app.py
```

Open Browser:

```text
http://127.0.0.1:5000
```

---

## 🔄 System Workflow

1. Load Crop Dataset
2. Data Preprocessing
3. Feature Scaling
4. Train Machine Learning Models
5. Compare Model Performance
6. Select Best Model
7. Save Model using Joblib
8. Load Model in Flask Application
9. Accept User Inputs
10. Predict Best Crop
11. Display Recommendation

---

## 🤖 Machine Learning Models Used

- Logistic Regression
- K-Nearest Neighbors (KNN)
- Decision Tree
- Random Forest

### Best Performing Model

Random Forest Classifier

### Achieved Accuracy

**99% Accuracy**

---

## 🖥️ User Interface

The web application allows users to enter:

- Nitrogen (N)
- Phosphorus (P)
- Potassium (K)
- Temperature
- Humidity
- pH Value
- Rainfall

After submitting the values, the system predicts the most suitable crop instantly.

---

## 🧪 Testing

The project was tested using various soil and weather combinations.

### Testing Parameters

- Input Validation
- Model Prediction Accuracy
- Flask Application Functionality
- User Interface Responsiveness
- Error Handling

### Results

✅ Successful Prediction Generation

✅ Accurate Crop Recommendation

✅ Stable Web Application Performance

---

## 📈 Future Scope

- Fertilizer Recommendation System
- Crop Yield Prediction
- Disease Detection Module
- Weather Forecast Integration
- Mobile Application Development
- Multi-language Support
- IoT Sensor Integration
- AI-based Smart Farming Assistant

---

## 📸 Screenshots

### Home Page

!<img width="1912" height="1013" alt="Screenshot 2026-07-02 181042" src="https://github.com/user-attachments/assets/bf5b5cf3-4115-4566-a525-5dafba56ade1" />


### Crop Prediction Result

<img width="1907" height="956" alt="Screenshot 2026-07-02 181144" src="https://github.com/user-attachments/assets/ad07edd7-7367-47ec-99e7-aa349ff997a7" />


### Flask Server Running

<img width="1905" height="1007" alt="Screenshot 2026-07-02 183752" src="https://github.com/user-attachments/assets/434dc06a-d5e2-4e14-a6e3-cc01ecc06344" />


---

## 🎥 Project Demonstration

Demo Video Link:

https://youtu.be/YOUR_VIDEO_LINK

---

## 🔗 GitHub Repository



---

## 📜 License

This project is developed for educational and internship purposes.

---

⭐ If you found this project useful, consider giving the repository a star on GitHub.
