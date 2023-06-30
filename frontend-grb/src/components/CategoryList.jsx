import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:5000/category/${categoryId}`);
      setData((prevData) =>
        prevData.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category: ", error);
    }
  };

  return (
    <div className="w-full grid justify-items-center px-14 py-10">
      <div className="w-full grid justify-items-center">
        <h2 className="font-bold text-[1.2rem] pb-1">Category Table</h2>
        <div className="w-full grid justify-items-center mx-auto shadow-lg rounded-lg mt-3">
          <table className="w-full">
            <thead className="text-[0.9rem] text-center bg-blue-100">
              <tr>
                <th className="py-3 px-1">No</th>
                <th className="py-3 px-6">Genre</th>
                <th className="py-3 px-6">Age Restriction</th>
                <th className="py-3 px-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr className="bg-white border-b" key={category.id}>
                  <td className="py-3 px-1 text-black text-center text-[0.9rem]">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-black text-[0.9rem]">
                    {category.genre}
                  </td>
                  <td className="py-3 px-6 text-black text-[0.9rem]">
                    {category.ageRestriction}
                  </td>
                  <td className="p-2 flex justify-center space-x-2 text-[0.9rem]">
                    <Link
                      to={`/edit/${category.id}`}
                      className="text-[1rem] font-medium bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-white mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCategory(category.id)}
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
          to="/add/category"
          className="mt-5 rounded-lg bg-purple-500 hover:bg-purple-400 text-[1rem] text-white font-medium py-2 px-5"
        >
          Add Data
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;