import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [genre, setGenre] = useState("");
  const [ageRestriction, setAgeRestriction] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategoryById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/category/${id}`);
        const category = response.data;
        setGenre(category.genre);
        setAgeRestriction(category.ageRestriction.toString());
      } catch (error) {
        console.error("Error fetching category: ", error);
      }
    };

    getCategoryById();
  }, [id]);

  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/category/${id}`, {
        genre: genre,
        ageRestriction: parseInt(ageRestriction),
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating category: ", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Edit Category</h1>
      <form onSubmit={updateCategory} className="my-10">
        <div className="grid justify-items-center content-center">
          <div className="w-full flex items-center space-x-3 pb-4">
            <label className="w-[200px] font-bold text-black">Category: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center space-x-3 pb-4">
            <label className="w-[200px] font-bold text-black">Age Restriction: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={ageRestriction}
              onChange={(e) => setAgeRestriction(e.target.value)}
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

export default EditCategory;