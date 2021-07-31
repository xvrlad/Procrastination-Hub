import React from 'react';
// import '../styling/index.css';
import '../styling/procrastination.css';
import Button from '../components/Button';
// import { getMeaningOfLife } from '../utils/ExampleUtil';

// function getResult() {
//   alert(`The meaning of life: ${getMeaningOfLife()}`)
// }
function getResult() {
  alert(`Why would you want to do that?`)
}
function getSignOut() {
    alert(`Signed out successfully!`)
}

function Procrastination() {

  return (
    <div class= "html">
        <div class="navbar">
            <a href="/"><img class= "logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2e65a73-04bd-4fd8-a873-bb33ba3ed9d6/Image_31-07-21_at_11.58_AM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210731T025039Z&X-Amz-Expires=86400&X-Amz-Signature=bdd46ef1d539981ad8b2c558a355ca99b3a9d0fb987916e687578b6f3ed5a859&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Image_31-07-21_at_11.58_AM.jpg%22"></img></a>
            <div class= "links">
                <h3 class="btn">About Us</h3>
                <h3 class="btn">Profile</h3>
                <Button class="btn" buttonText={"GO BACK TO WORK"} clickAction={getResult} />
                <Button class="btn" buttonText={"Sign Out"} clickAction={getSignOut}/>
            </div>
            
        </div>
      <div class="websites">
          <div>
            <h2><a href= "https://netflix.com" target= "_blank">Netflix</a></h2>
            <div class= "windows">
            <div class="thumbnails"><img src="./img/netflix-2-logo.png"></img>placeholder</div>
                <div class="thumbnails">placeholder</div>
                <div class="thumbnails">placeholder</div>
            </div>
          </div>
          <div>
            <h2 class="read">Read</h2>
            <div class= "windows">
            
            <div class="thumbnails"><a href= "https://facebook.com" target= "_blank">Facebook</a></div>
                <div class="thumbnails"><a href= "https://reddit.com" target= "_blank">Reddit</a></div>
                <div class="thumbnails"><a href= "https://twitter.com" target= "_blank">Twitter</a></div>
            </div>
          </div>
          <div>
            <h2><a href= "https://youtube.com" target= "_blank">YouTube</a></h2>
            <div class= "windows">
            <div class="thumbnails">placeholder</div>
                <div class="thumbnails">placeholder</div>
                <div class="thumbnails">placeholder</div>
            </div>
          </div>
          
          <div>
            <div class= "windows">
            <div class="thumbnails"><a href= "https://facebook.com" target= "_blank">Facebook</a></div>
                <div class="thumbnails"><a href= "https://reddit.com" target= "_blank">Reddit</a></div>
                <div class="thumbnails"><a href= "https://twitter.com" target= "_blank">Twitter</a></div>
            </div>
          </div>
          <div>
            <h2><a href= "https://disneyplus.com" target= "_blank">Disney+</a></h2>
            <div class= "windows">
            <div class="thumbnails">placeholder</div>
                <div class="thumbnails">placeholder</div>
                <div class="thumbnails">placeholder</div>
            </div>
          </div>
          
      </div>
    </div>

  );
}

export default Procrastination;
