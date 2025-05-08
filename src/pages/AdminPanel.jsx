import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const AdminPanel = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      const querySnap = await getDocs(collection(db, "purchases"));
      const data = querySnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPurchases(data);
    };

    fetchPurchases();
  }, []);

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-primary">All Purchases</h2>
      {purchases.map((user) => (
        <div key={user.id} className="mb-6 border p-4 rounded">
          <h3 className="font-semibold mb-2">User ID: {user.id}</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {user.items.map((item, idx) => (
              <li key={idx}>{item.title} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
