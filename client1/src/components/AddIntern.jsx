// src/components/AddIntern.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddIntern = () => {
  const [name, setName] = useState("");
  const [donations, setDonations] = useState("");
  const [referralCode, setReferralCode] = useState(""); // ✅ New state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !donations || !referralCode) {
      return alert("Please fill all fields");
    }

    try {
      await addDoc(collection(db, "interns"), {
        name,
        donations: parseInt(donations),
        referralCode, // ✅ Add to Firestore
        createdAt: new Date(),
      });
    //   alert("Intern added!");
      setName("");
      setDonations("");
      setReferralCode(""); // ✅ Reset field
    } catch (err) {
      console.error("Error adding intern:", err);
      alert("Failed to add intern.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded mt-4">
      <h2 className="text-lg font-semibold mb-2">Add Intern</h2>

      <input
        type="text"
        placeholder="Intern Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Referral Code" // ✅ New input
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Donations Raised"
        value={donations}
        onChange={(e) => setDonations(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
      >
        Add Intern
      </button>
    </form>
  );
};

export default AddIntern;
