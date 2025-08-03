
# 🌐 InternHub Portal

A simple intern portal built with React+vite, Firebase, and Tailwind CSS. It includes dummy login, a personal dashboard, a leaderboard, and a form to add new interns.

## 🔗 Live Demo

👉 [intern portal app](https://internportel.netlify.app/)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/internhub-portal.git
cd internhub-portal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a project in [Firebase Console](https://console.firebase.google.com/), then:

* Enable **Firestore Database**
* Copy your Firebase config
* Replace the placeholder in `src/firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4. Run the App Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🚀 Features

* 🔐 Dummy login system
* 📊 Intern dashboard (name, referral code, donations raised)
* 🏆 Leaderboard with real-time updates
* ➕ Add new intern form
* 🎨 Responsive UI using Tailwind CSS

---

## 📁 Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Backend:** Firebase Firestore

---

## 📌 License

This project is licensed under the MIT License.
