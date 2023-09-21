import React from "react";
import './about.css';
const AboutUs = ()=>{
    return(
        <div className="aboutOuterBody">
        <div className="aboutInnerBody">
            <div className="aboutLeftInnerBody">
                <h2>About Us</h2>
                <ul>
                    <li><p>
                Finco is here to make your choices related to sports clearer. Here, we will help you in providing guidence, give you sports 
                advice and provide you suggestion according your need.
                </p></li>
                <li>
                <p> We will provide you multiple tools through which you can 
                analyze the sports like olymics, IPL etc. 
                </p>
                </li>
                <li><p>
                 For clear sports help that’s on your side and free to use, just search for Finco. 
                 </p></li>
                </ul>
                
                
                
                
            </div>
            <div className="aboutRightInnerBody">
                <img src="./images/aboutPic.png" alt="" />
            </div>

        </div>
        
        
        </div>
    )
}
export default AboutUs;