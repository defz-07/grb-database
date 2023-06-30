import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCart = () => {
  const [totalItems, setTotalItems] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCartById = async () => {
      const response = await axios.get(`http://localhost:5000/cart/${id}`);
      setTotalItems(response.data.totalItems.toString());
      setTotalPrice(response.data.totalPrice.toString());
      setStatus(response.data.status);
    };
    getCartById();
  }, [id]);

  const updateCart = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/cart/${id}`, {
      totalItems: totalItems,
      totalPrice: totalPrice,
      status: status,
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Edit Form</h1>
      <form onSubmit={updateCart} className="my-10">
        <div className="grid justify-items-center content-center">
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">Total Items: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={totalItems}
              onChange={(e) => setTotalItems(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">Total Price: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center space-x-3 mb-5">
            <label className="w-[200px] font-bold text-black">Status: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-2xl border-indigo-500 mt-3"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCart;