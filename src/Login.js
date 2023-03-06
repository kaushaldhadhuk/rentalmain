import React, { useState } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataOfUser = {
    email,
    password,
  };
  console.log(dataOfUser, "userData");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const submitData = async () => {
    const response = axios.post(
      `http://localhost:8000/login `,
      dataOfUser
    );
  };
  const updateVal = () => {};
  const isValid = () => {};

  return (
    <div>
      <form onSubmit={submitData}>
        <div class="m-5 p-5 shadow">
          <h1>Log in</h1>

          <div class="form-group col-md-6">
            {/* <label for="inputEmail4">Email</label> */}
            <input
              type="email"
              name="email"
              class="form-control"
              id="inputEmail4"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><br/>
          <div class="form-group col-md-6">
        
            {/* <label for="inputPassword4">Password</label> */}
            <input
              type="password"
              name="password"
              class="form-control"
              id="inputPassword4"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div><br/>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => isValid(e)}
        >
          Login
        </button>
        </div>

      </form>
    </div>
  );
}
