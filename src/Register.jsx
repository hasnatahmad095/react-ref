import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [value, setValue] = useState({
    user: "",
    pass: "",
  });

  const navigate = useNavigate();

  const [arry, setArry] = useState(JSON.parse(localStorage.getItem("data")) || []);

  const getvalue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submission = () => {
    setArry([...arry, value]);
    setValue({ user: "", pass: "" });
    navigate("/login");
  };

  console.log(arry, "arry");
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arry));
  }, [arry]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register Yourself First
        </h1>

        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={getvalue}
          name="user"
          value={value.user}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="*****"
          onChange={getvalue}
          name="pass"
          value={value.pass}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={submission}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Register Now
        </button>

        <Link
          to="/login"
          className="block text-center w-full mt-4 text-blue-500 hover:underline"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
