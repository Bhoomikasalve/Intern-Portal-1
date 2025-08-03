// src/App.jsx
import { useState, useEffect } from "react";
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import AddIntern from "./components/AddIntern";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      const fetchIntern = async () => {
        try {
          const docRef = doc(db, "hello", "hello232");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setIntern(docSnap.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching intern:", error);
        }
      };
      fetchIntern();
    }
  }, [loggedIn]);

  // 👉 Show login until loggedIn is true
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard data={intern} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<AddIntern />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
