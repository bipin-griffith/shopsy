import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        createdAt: new Date()
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-primary">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
