import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'
function List() {
          const [id,setId]=useState([]);
          const navigate = useNavigate();
          const getCode =async() =>{
                    try {
                    
                    const res = await axios.get('http://localhost:4000/person/details/get/')
                      setId(res.data)
                     
                      if (res.data.length===0) {
                        navigate('/no')
                      }else{
                        console.log(res.data);
                    
                      }
                      }
                          catch (error) {console.log(error);}
                }
                useEffect(()=>{getCode();},[])
                console.log(id);
  return (
    <div>
      {id.map((id=>
      <>
      <p>{id._id}-</p>
      </>
      ))}
    </div>
  )
}

export default List

