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
      <h1>Black</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[1]}
              eyeColor={eyeColor[1]}
              titleColor={titleColor[4]}
              title={title[1]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


