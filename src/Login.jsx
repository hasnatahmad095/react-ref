import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const storedDataArray = JSON.parse(localStorage.getItem("data")) || [];
  // const [storeddata, setStoreddata] = useState(storedDataArray[0] || {});
  
  const [storeddata, setStoreddata] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const navigate = useNavigate();

  const [fields, setfields] = useState({
    username: "",
    password: "",
  });

  const getData = (e) => {
    setfields({ ...fields, [e.target.name]: e.target.value });
  };

  const Logineature = () => {
    const matchedUser = storeddata.find(
      (item) =>
        item.user.trim().toLowerCase() ===
          fields?.username.trim().toLowerCase() &&
        item.pass === fields?.password
    );
    // fields?.username.trim().toLowerCase() == storeddata?.user.trim().toLowerCase() &&
    // fields?.password == storeddata?.pass

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", JSON.stringify(true))
      window.location.href = "/";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h1>

        <input
          type="text"
          placeholder="Enter Username"
          onChange={getData}
          name="username"
          value={fields.username}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={getData}
          name="password"
          value={fields.password}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={Logineature}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
