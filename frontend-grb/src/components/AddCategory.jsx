import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    genre: "",
    ageRestriction: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const saveCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/category", {
        genre: formData.genre,
        ageRestriction: parseInt(formData.ageRestriction),
      });
      navigate("/");
    } catch (error) {
      console.error("Error saving category: ", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Add Form</h1>
      <form onSubmit={saveCategory} className="my-10">
        <div className="w-full">
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Science"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={formData.genre}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-10 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Age Restriction</label>
            <input
              type="text"
              name="ageRestriction"
              placeholder="2"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={formData.ageRestriction}
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

export default AddCategory;