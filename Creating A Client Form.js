import './App.css';
import {useState} from "react";
import {validateEmail} from "../src/utils";

const PasswordErrorMessage = () => {
 return (
   <p className="FieldError">Password should have at least 8 characters</p>
 );
};

function App() {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState({
   value: "",
   isTouched: false,
 });
 const [role, setRole] = useState("role");

 const getIsFormValid = () => {
   return (
     firstName &&
     validateEmail(email) &&
     password.value.length >= 8 &&
     role !== "role"
   );
 };

 const clearForm = () => {
   setFirstName("");
   setLastName("");
   setEmail("");
   setPassword({
     value: "",
     isTouched: false,
   });
   setRole("role");
 );
}

export default App;
