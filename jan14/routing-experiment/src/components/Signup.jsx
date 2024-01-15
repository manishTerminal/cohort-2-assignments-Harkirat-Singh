// export default function Signup() {

    
// 	return (
// 		<div>
// 			<h1>SignUp Page</h1>
// 			<label>First Name</label>
// 			<input className="m-2 border border-sky-500" type="text"></input>
// 			<br></br>
// 			<label>Last Name</label>
// 			<input className="m-2 border border-sky-500" type="text"></input>
// 			<br></br>
// 			<label>Phone Number</label>
// 			<input className="m-2 border border-sky-500" type="text"></input>
// 			<br></br>
// 			<label>Email</label>
// 			<input className="m-2 border border-sky-500" type="text"></input>
// 			<br></br>
// 			<label>Password</label>
// 			<input className="m-2 border border-sky-500" type="text"></input>
// 			<br></br>
// 			<button className="m-2 p-4 cursor-pointer  bg-slate-900 hover:bg-sky-700 text-white" onClick={() => {}}>
// 				Register
// 			</button>
// 		</div>
// 	);
// }

import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // If the response status is not OK (e.g., 404 Not Found, 500 Internal Server Error), throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (response.ok) {
        // Handle success
        console.log('User registered successfully');
      } else {
        // Handle error
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <label>First Name</label>
      <input
        className="m-2 border border-sky-500"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <br />
      <label>Last Name</label>
      <input
        className="m-2 border border-sky-500"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <br />
      <label>Phone Number</label>
      <input
        className="m-2 border border-sky-500"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <br />
      <label>Email</label>
      <input
        className="m-2 border border-sky-500"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <br />
      <label>Password</label>
      <input
        className="m-2 border border-sky-500"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />
      <button
        className="m-2 p-4 cursor-pointer bg-slate-900 hover:bg-sky-700 text-white"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}


/*
    firstName: String,
	lastName: String,
	phoneNumber: Number,
	email: String,
	password: String
*/
