import { useState } from "react";
import axios from "axios";

const UpdateItem = ({ item }) => {
    const [formData, setFormData] = useState(item.name || ""); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            await axios.put(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, { name: formData });
            alert("Update successful!");
        } catch (err) {
            setError("Failed to update item.");
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Enter update" onChange={handleChange} value={formData} />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Updating..." : "Update"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default UpdateItem;
