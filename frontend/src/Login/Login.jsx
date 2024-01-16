import { useEffect, useState } from "react";
import "./Login.css";
import FormInput from "../Login/FormInput"
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import {FaInstagram,FaFacebook,FaFacebookMessenger,FaGoogle} from "react-icons/fa"


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:5000/api/users";
        const result = await axios.post(url,values);
        console.log(result)
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
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Login</button>
        <h6>New on Our Platform? <Link to={"/register"}>Create an account</Link></h6>
        ___________________  or  __________________
        <br />
         <Link className="facebook" to="https://www.facebook.com/"><FaFacebook/></Link>
        <Link className="instagram" to="https://www.instagram.com/"><FaInstagram/></Link>
        <Link className="messanger" to="https://www.messenger.com/"><FaFacebookMessenger/></Link>
        <Link className="google"  to=""><FaGoogle/></Link>
      </form>
    </div>
  );
};

export default Login;