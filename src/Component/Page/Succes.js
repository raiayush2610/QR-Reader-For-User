import React,{useEffect} from "react";
import axios from "axios";
// import { Link } from 'react-router-dom'
import {useNavigate, useParams} from 'react-router-dom'
let foundEntry= {}
const Succes = () => {
          const {Code} = useParams();
          // const location =useLocation();
          const navigate = useNavigate();
        
          const getQRcode =async() =>{
                    try {
                    
                    const res = await axios.get(`http://localhost:4000/person/details/get/${Code}`)
                    //   setfoundEntry(res.data)
                      foundEntry=res.data
                      if (res.data.length===0) {
                        navigate('/no')
                      }else{
                        console.log(res.data);
                    
                      }
                      }
                          catch (error) {console.log(error);}
                }
                useEffect(()=>{
                  getQRcode();
          
                },[])
                
        
                console.log(foundEntry);
  return (
    <div>
      Name:-{foundEntry.personName}

      Email:-{foundEntry.email}
      Phone:-{foundEntry.phone}
    </div>
  )
}

export default Succes
