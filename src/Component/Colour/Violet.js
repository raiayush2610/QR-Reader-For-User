import React,{useState} from "react";
import QrCodeStylingComponent from "../QrCodeStylingComponent";
import tapop from '../Image/tapop.png'




export default function Violet() {


  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet"])
 
 
            
  return (
    <div className="App">
      <h1>Violet</h1>
      
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[6]}
              eyeColor={eyeColor[6]}
              titleColor={titleColor[6]}
              title={title[6]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


