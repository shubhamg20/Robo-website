import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
 faGithub
} from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
  var style={
    anchor:{color:"Red" },
  };
  return (
 <div class="footer">
   <div icon-padd>
   <a
        href="https://www.youtube.com/channel/UCWM9ZaOmev5otSwQqW3JICA"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="3x"  />
      </a>
      <a
        href="https://www.facebook.com/roboclubiitkanpur/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://github.com/RoboticsClubIITK"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
     </div>
   <p style={{  margin:"20px"}}>
     Designed by <a style={style.anchor} href="https://www.facebook.com/profile.php?id=100033832803282">shubham</a>
    <br/>
   <span style={{margin:"0"}}> © 2021 Robotics Club IIT Kanpur</span></p>
 </div>
  );
}