import React,{useState} from "react";
import "./Register.css";
import FormInput from "../Login/FormInput"
import axios from "axios";
import { Link,Navigate,useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:5000/api/users";
        const result = await axios.post(url,values);
        Navigate("/login")
    } catch (error) {
      if(
        error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
      )
      {
        setError(error.response.values.message);
      }
    }
  };
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
         
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
         <div>
          <input type="checkbox" id="agree"/>
          <label className="label" htmlFor="agree"> I agree to <Link>terms and conditions</Link></label>
        </div>
        <button>Register</button>
        <h6>Have Already an Account ? <Link to={"/login"}>Login here</Link></h6>
      </form>
    </div>
  );
};

export default Register;