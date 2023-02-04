import React,{useState} from "react";
import QrCodeStylingComponent from "../QrCodeStylingComponent";
import tapop from '../Image/tapop.png'




export default function Black() {


  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet"])
 
 
            
  return (
    <div className="App">
      <h1>Pink</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[5]}
              eyeColor={eyeColor[5]}
              titleColor={titleColor[5]}
              title={title[5]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


