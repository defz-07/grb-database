import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCart = () => {
  const [formData, setFormData] = useState({
    totalItems: "",
    totalPrice: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const saveCart = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cart", {
        totalItems: parseInt(formData.totalItems),
        totalPrice: formData.totalPrice,
        status: formData.status,
      });
      navigate("/");
    } catch (error) {
      console.error("Error saving cart: ", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Add Form</h1>
      <form onSubmit={saveCart} className="my-10">
        <div className="w-full">
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Total Items</label>
            <input
              type="text"
              name="totalItems"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="2"
              value={formData.totalItems}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Total Price</label>
            <input
              type="text"
              name="totalPrice"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="10000"
              value={formData.totalPrice}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-10 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Status</label>
            <input
              type="text"
              name="status"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="On Progress"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCart;