import React,{useState} from "react";
import QrCodeStylingComponent from "../QrCodeStylingComponent";
import tapop from '../Image/tapop.png'




export default function Black() {


  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet","red"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet","red"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet","red"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet","red"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet","red"])
 
 
            
  return (
    <div className="App">
      <h1>Red</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[7]}
              eyeColor={eyeColor[7]}
              titleColor={titleColor[7]}
              title={title[7]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


