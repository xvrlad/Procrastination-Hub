import React, {useState} from 'react';
import '../styling/signup.css';
import Button from '../components/Button';

function signUp() {
  alert(`Successful Sign Up!`);
}

function AnotherPage() {
  const [showPassword] = useState(false)
  return (
    <div class="body">
      <h1>Sign Up</h1>
      <div class = "signUpBox">
        <h3><b>First Name</b></h3>
        <input type="text" id="firstName" name="lastName"></input>
        <h3><b>Last Name</b></h3>
        <input type="text" id="firstName" name="lastName"></input>
        <h3><b>Email</b></h3>
        <input type="text" id="firstName" name="lastName"></input>
        <h3><b>Password</b></h3>
        <input type={showPassword? "text": "password"} id="passwordInput"></input>
        <h3><b>Confirm Password</b></h3>
        <input type={showPassword? "text": "password"} id="passwordInput"></input>
        {/* Need to implement another page change here */}
        <a href = {'/'}>
        <Button buttonText={"Sign Up"} />
        </a>
        <a href={'/'}>
        <Button buttonText={'Login'}/>
        </a>
      </div>
    </div>

  );
}

export default AnotherPage;