import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getEmployeeById = async () => {
      const response = await axios.get(`http://localhost:5000/employee/${id}`);
      setEmployeeName(response.data.employeeName);
      setTelephoneNumber(response.data.telephoneNumber);
      setSalary(response.data.salary.toString());
      setCity(response.data.city);
      setCountry(response.data.country);
    };
    getEmployeeById();
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/employee/${id}`, {
      employeeName: employeeName,
      telephoneNumber: telephoneNumber,
      salary: salary,
      city: city,
      country: country,
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-blue-100 px-8 py-2 rounded-xl shadow-xl">
      <h1 className="text-center text-xl font-bold pt-3">Edit Form</h1>
      <form onSubmit={updateEmployee} className="my-10">
        <div className="grid justify-items-center content-center">
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">Employee Name: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">Telephone Number: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center space-x-3 mb-5">
            <label className="w-[200px] font-bold text-black">Salary: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">City: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center mb-5 space-x-4">
            <label className="w-[200px] font-bold text-black">Country: </label>
            <input
              type="text"
              className="w-full py-3 mt-1 rounded-lg px-3"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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

export default EditEmployee;