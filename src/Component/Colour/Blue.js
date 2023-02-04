import React,{useState} from "react";
import QrCodeStylingComponent from "../QrCodeStylingComponent";
import tapop from '../Image/tapop.png'




export default function Blue() {


  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet"])
 
 
            
  return (
    <div className="App">
      <h1>Blue</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[4]}
              eyeColor={eyeColor[4]}
              titleColor={titleColor[4]}
              title={title[4]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


