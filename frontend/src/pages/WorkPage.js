import React from 'react';
import '../styling/work.css';
// import '../styling/procrastination.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import about_us from './about_us';

function getResult() {
  alert(`Why would you want to do that?`)
}
function getSignOut() {
    alert(`Signed out successfully!`)
}

function WorkPage() {

  return (
    <div>
      <div class="navbar">
            <a href="/"><img class= "logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2e65a73-04bd-4fd8-a873-bb33ba3ed9d6/Image_31-07-21_at_11.58_AM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210731T025039Z&X-Amz-Expires=86400&X-Amz-Signature=bdd46ef1d539981ad8b2c558a355ca99b3a9d0fb987916e687578b6f3ed5a859&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Image_31-07-21_at_11.58_AM.jpg%22"></img></a>
            <div class= "links">
            <a href = {'/about'}>
                <Button buttonText={"About Us"} clickAction={about_us}/>
                </a>
            <a href = {'/profile'}>
                <Button buttonText={"Profile"} clickAction={about_us}/>
                </a>
                {/* <a class="btn" href= "/about">About Us</a>
                <a class="btn" href= "/profile">Profile</a> */}
                {/* <Button class="btn" buttonText={"GO BACK TO WORK"} clickAction={getResult} /> */}
                {/*  */}
            </div>
            
        </div>
      <div class="workContain">
        <div class="space todo">
        <h1>To Do:</h1>
        <ul id="myUL">
  <li>Start Assignment 1</li>
  <li class="checked">Read Textbook</li>
  <li>Finish Quiz 3</li>
</ul>
        </div>
        <div class="space timer">
        <p class= "procrastinate"><a href={'/procrastination'}>Procrastinate Now!</a></p>
      </div>
      <div class="space later">
        <h1>Things you want to do later:</h1>
        <ul id="myUL">
  <li>Hit the gym</li>
  <li class="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>
      </div>
      </div>
      
    </div>
  );
}

export default WorkPage;
