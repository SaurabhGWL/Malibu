import React from "react";
import "./politics.m.css";
import img from "./icons/donald.jpg";
export function PoliticsPage() {
  return (
    <div>
       <div styleName="root">
        <div styleName="gridContainer">
           <div styleName="grid1">
             <img src="./icons/donald.jpg" alt="news"/>
             <div styleName="ImgText" style={{bottom:"33%"}}>
              <div styleName="headlineText">
                Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'
                </div>
                <p styleName="authorText">Jonnathan Doe</p>
              </div>
           </div>
               <div styleName="grid20">
                 <img src='./icons/content.png'  alt="launch"/>
                 <div styleName="headline">
                   Jenny Lawson is publishing a new book and It's Sort of a Colouring Book
                 </div>
                 <p styleName="author">Jonnathan Doe</p>
                </div>
               <div styleName="grid21">
                 <div styleName="headline">
                   Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service  
                 </div>
                 <p styleName="author">Alice Doe</p>
               </div> 
                <div styleName="grid31">
                  <div styleName="headline1">
                    Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G 
                    Service
                  </div>
                  <p styleName="author1">Alex Parkinson</p>
                </div>
                <div styleName="grid32">
                  <div styleName="headline1">
                    Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-
                    Year Low  
                  </div>
                  <p styleName="author1">Alice Doe</p>
                </div>
                <div styleName="grid33">
                  <div styleName="headline1">
                    Sundar Pichai Launches 'Digital
                    Unlocked' Programme 
                  </div>
                  <p styleName="author1">Jonnathan Doe</p>
                </div>
                <div styleName="grid34">
                  <div styleName="headline1">
                    Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-
                    Year Low
                  </div>
                  <p styleName="author1">Alice Doe</p>
                </div>
        </div>
      </div>

      
    </div>
  );
}