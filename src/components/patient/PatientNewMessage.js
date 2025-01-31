import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";


const PatientNewMessage = () =>{
    const{id}=useParams();
    const [newMessage,setNewMessage]=useState('');
    let history=useNavigate();

    const sendNewMessage = () => {
        console.log(newMessage);
        let obj={msg:newMessage,i_id:id};
        axios.post("http://127.0.0.1:8000/api/patient/convo/message/new",obj)
            .then(resp=>{
                history("/patient/inbox/"+id);
            }).catch(err=>{
            console.log(err.response.data);
        });
    }

    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h5>Send New Message</h5>
            <form action="">
                <label htmlFor="new" className="form-label">New Message</label>
                <input type="text" name="" id="new" className="form-control" value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}/>

            </form> <br/>
            <button className="btn btn-outline-dark" onClick={sendNewMessage}>Reply</button>

        </div>
    )


}
export default PatientNewMessage;