import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";
import CartList from "./components/CartList";
import AddCart from "./components/AddCart";
import EditCart from "./components/EditCart";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading)
    return (
      <div className="h-screen grid justify-items-center content-center text-[2rem] text-blue-800 font-bold font-mono">
        <p>Loading</p>
      </div>
    );

  return (
    <div className="w-full mx-auto">
      <h1 className="text-center py-10 font-bold text-blue-800 text-[1.8rem] font-mono">
        Good Reading Bookstore
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/add/category" element={<AddCategory />} />
          <Route path="/edit/:id" element={<EditCategory />} />
        </Routes>
        <Routes>
          <Route path="/" element={<CartList />} />
          <Route path="/add/cart" element={<AddCart />} />
          <Route path="/edit/cart/:id" element={<EditCart />} />
        </Routes>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add/employee" element={<AddEmployee />} />
          <Route path="/edit/employee/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;