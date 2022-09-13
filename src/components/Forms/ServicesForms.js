//ManagedServicesRequestForm
//ProjectDeliveryRequestForm
//CoworkingSpaceForm

import { useState } from "react"
import logo from "../../assets/images/logo.png"


const Request = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        debrief: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        console.log("Email: " + formData.email);
        console.log("password: " + formData.password);
        console.log("Debrief: " + formData.debrief);
    }

    return (
        <>
    <button type="button" className="prop" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Request for a proposal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
    <div class="modal-header m-2">
        <img src={logo} width={40} className="" id="staticBackdropLabel"/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={handleSubmit}>
<div className="background" >
<h4 class=" request mb-4">Request Form</h4>

<div className="Vessel mb-3">
   <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="text" name="email" id="email" className="myInput form-control" placeholder="Email"></input>
</div>


<div className="Vessel">
   <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="password" name="password" id="password" className="myInput form-control" placeholder="Password"></input>
</div>

<div className=" Vessel mb-3">
    <label for="debrief" className="form-label"></label>
    <textarea class="myInput form-control" id="debrief" rows="3" onChange={(e) => setFormData({...formData, debrief: e.target.value})} value={formData.debrief} type="text" name="debrief" placeholder="Debrief"></textarea>
</div>
<div class="col-12 mb-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      Click to join our  Newsletter
    </label>
    </div>
    </div>
    <div className="sub">
<button type="button" className="submit">Submit</button>
    </div>
    </div>
</form>


</div>
</div>
</div>
</div>
        </>
    )
}

export default Request