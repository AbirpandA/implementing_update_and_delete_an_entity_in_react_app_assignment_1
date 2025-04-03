import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from "axios";

// Use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/1`;

const App = () => {
  const [item, setItem] = useState(null); 

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URI);
      setItem(res.data); 
    } catch (err) {
      console.error("Error fetching item:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Door Information</h3>
      {item ? (
        <>
          <UpdateItem item={item}  />
          <p>Current Door: {item.name || "No Name Provided"}</p>
        </>
      ) : (
        <p>Loading door...</p>
      )}
    </div>
  );
};

export default App;
