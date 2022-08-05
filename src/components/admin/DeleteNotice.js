import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DeleteNotice=()=>{

    const{id}=useParams();
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/admin/notice/delete/'+id).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Deleted"){
                history('/admin/notices/all');
            }

        }).catch(
            err=>{
                console.log(err);
            });

    },[]);


}

export default DeleteNotice;