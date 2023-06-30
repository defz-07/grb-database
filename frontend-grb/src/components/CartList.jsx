import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CartList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cart");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data cart: ", error);
      }
    };

    fetchData();
  }, []);

  const deleteCart = async (cartId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${cartId}`);
      setData((prevData) =>
        prevData.filter((cart) => cart.id !== cartId)
      );
    } catch (error) {
      console.error("Error deleting cart: ", error);
    }
  };

  return (
    <div className="w-full grid justify-items-center px-14 py-10">
      <div className="w-full grid justify-items-center">
        <h2 className="font-bold text-[1.2rem] pb-1">Cart Table</h2>
        <div className="w-full grid justify-items-center mx-auto shadow-lg rounded-lg mt-3">
          <table className="w-full">
            <thead className="text-[0.9rem] text-center bg-blue-100">
              <tr>
                <th className="py-3 px-1">No</th>
                <th className="py-3 px-6">Total Items</th>
                <th className="py-3 px-6">Total Price</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((cart, index ) => (
                <tr className="bg-white border-b" key={cart.id}>
                  <td className="py-3 px-1 text-black text-center text-[0.9rem]">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-black text-[0.9rem]">
                    {cart.totalItems}
                  </td>
                  <td className="py-3 px-6 text-black text-[0.9rem]">
                    {cart.totalPrice}
                  </td>
                  <td className="py-3 px-6 text-black text-[0.9rem]">
                    {cart.status}
                  </td>
                  <td className="p-2 flex justify-center space-x-2 text-[0.9rem]">
                    <Link
                      to={`/edit/cart/${cart.id}`}
                      className="text-[1rem] font-medium bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCart(cart.id)}
                      className="text-[1rem] font-medium bg-red-500 hover:bg-red-400 px-3 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          to="/add/cart"
          className="mt-5 rounded-lg bg-purple-500 hover:bg-purple-400 text-[1rem] text-white font-medium py-2 px-5"
        >
          Add Data
        </Link>
      </div>
    </div>
  );
};

export default CartList;