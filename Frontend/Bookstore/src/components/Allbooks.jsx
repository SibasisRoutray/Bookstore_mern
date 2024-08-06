//import list from "../../public/list.json"
import "./Freebook.css"
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function Allbooks() {

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



  return (
    <div>

<h3>See our popular books</h3>
    <div className="row" style={{display:"flex"}}>
         {book.map((data) => (
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
  )
}
