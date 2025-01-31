import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientDash = () => {

    // let user = JSON.parse(localStorage.getItem('doctor'));
    // var obj={token:user.access_token};
    // axios.defaults.headers.common["Authorization"] = obj.token;
    // console.log(obj.token);
    // console.log(axios.defaults.headers.common["Authorization"]);




    return (
        <div>
            <div class="card">
                     <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                           <h4 class="card-title">Personal Information</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <form>
                           <div class="form-group row align-items-center">
                              <div class="col-md-12">
                                 <div class="profile-img-edit">
                                    <img class="profile-pic" src="../assets/images/user/11.png" alt="profile-pic" loading="lazy"/>
                                    <div class="p-image d-flex align-items-center justify-content-center">
                                       <span class="material-symbols-outlined">edit</span>
                                       <input class="file-upload" type="file" accept="image/*"/>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class=" row align-items-center">
                              <div class="form-group col-sm-6">
                                 <label for="fname" class="form-label">First Name:</label>
                                 <input type="text" class="form-control" id="fname" placeholder="Bni"/>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label for="lname" class="form-label">Last Name:</label>
                                 <input type="text" class="form-control" id="lname" placeholder="Jhon"/>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label for="uname" class="form-label">User Name:</label>
                                 <input type="text" class="form-control" id="uname" placeholder="Bni@01"/>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label for="cname" class="form-label">City:</label>
                                 <input type="text" class="form-control" id="cname" placeholder="Atlanta"/>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label class="form-label d-block">Gender:</label>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio10"> Male</label>
                                 </div>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio11">Female</label>
                                 </div>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label for="dob" class="form-label">Date Of Birth:</label>
                                 <input class="form-control" id="dob" placeholder="1984-01-24"/>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label class="form-label">Marital Status:</label>
                                 <select class="form-select" aria-label="Default select example">
                                    <option selected="">Single</option>
                                    <option>Married</option>
                                    <option>Widowed</option>
                                    <option>Divorced</option>
                                    <option>Separated </option>
                                 </select>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label class="form-label">Age:</label>
                                 <select class="form-select" aria-label="Default select example 2">
                                    <option>46-62</option>
                                    <option>63 &gt; </option>
                                 </select>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label class="form-label">Country:</label>
                                 <select class="form-select" aria-label="Default select example 3">
                                    <option>Caneda</option>
                                    <option>Noida</option>
                                    <option selected="">USA</option>
                                    <option>India</option>
                                    <option>Africa</option>
                                 </select>
                              </div>
                              <div class="form-group col-sm-6">
                                 <label class="form-label">State:</label>
                                 <select class="form-select" aria-label="Default select example 4">
                                    <option>California</option>
                                    <option>Florida</option>
                                    <option selected="">Georgia</option>
                                    <option>Connecticut</option>
                                    <option>Louisiana</option>
                                 </select>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary me-2">Submit</button>
                           <button type="reset" class="btn bg-soft-danger">Cancle</button>
                        </form>
                     </div>
                  </div>
        </div>
    )
}

export default PatientDash;