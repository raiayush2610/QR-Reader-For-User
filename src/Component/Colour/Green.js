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
      <h1>Green</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[3]}
              eyeColor={eyeColor[3]}
              titleColor={titleColor[3]}
              title={title[5]}
              centerImageSrc={tapop}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


