import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    telephoneNumber: "",
    salary: "",
    city: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/employee", {
        employeeName: formData.employeeName,
        telephoneNumber: formData.telephoneNumber,
        salary: parseInt(formData.salary),
        city: formData.city,
        country: formData.country,
      });
      navigate("/");
    } catch (error) {
      console.error("Error saving employee: ", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Add Form</h1>
      <form onSubmit={saveEmployee} className="my-10">
        <div className="w-full">
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Employee Name</label>
            <input
              type="text"
              name="employeeName"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="Akbar"
              value={formData.employeeName}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Telephone Number</label>
            <input
              type="text"
              name="telephoneNumber"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="+628391647368"
              value={formData.telephoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Salary</label>
            <input
              type="text"
              name="salary"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="10000000"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">City</label>
            <input
              type="text"
              name="city"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="Solo"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mb-10 space-x-4">
            <label className="w-[200px] font-bold text-slate-700">Country</label>
            <input
              type="text"
              name="country"
              className="w-full py-3 mt-1 rounded-lg px-3"
              placeholder="Indonesia"
              value={formData.country}
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

export default AddEmployee;