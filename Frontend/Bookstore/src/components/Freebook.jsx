//import list from "../../public/list.json"
import "./Freebook.css"
import { useState,useEffect } from "react";
import axios from "axios";
export default function Freebook() {


  
  const[book,setBook]=useState([])

  useEffect(()=>{
      const getBook=async()=>{

      
      try {
          const res=await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data);
          
      } catch (error) {
          console.log(error);

          
      }
      }
      getBook();

  },[])


    const filterdata=book.filter((data)=>data.category==="free");
    console.log (book);
    

  return (
    <div style={{paddingTop:"100px"}} >
      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; See our popular <span style={{color:"Green"}} > BOOKS </span></h3>
     
    <div className="row col-12" style={{display:"flex"}}>
         {filterdata.map((data) => (
                <div key={data.id}  className="col-md-3 custom-card" style={{padding:"50px"}}>
                    <div className="card" style={{paddingLeft:"10px"}} >
                        <img className="card-img-top" src={data.imageSrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.description}</p>
                            <a href="#" className="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    
    </div>
  );
}
