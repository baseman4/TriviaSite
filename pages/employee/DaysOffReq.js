
import { DateRangePicker } from "rsuite";
import { useState } from "react";
import Modal from "../../components/employee/Modal";

import axios from "axios";
//import { Alert } from "bootstrap";

export default function DayOffForm(){

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
     // Stop the form from submitting and refreshing the page.
     event.preventDefault()
     if(!event.target.DP.value){
      alert("Please Enter A Date Range And Hit OK To Submit Before Pressing The Request Days Off Button");
     }
     const data = {
        fName: event.target.fName.value,
        lName: event.target.lName.value,
           DP: event.target.DP.value
      }
    const sub = await axios.post("/api/DayOffReq", data)
     // Alert("Your Time Off Request Has Been Submitted");




    setShowModal(true);
  }


    const today = new Date();
    const disableDay = today.setDate(today.getDate() +14);
    const {
        allowedMaxDays,
        allowedDays,
        allowedRange,
        beforeToday,
        before,
        afterToday,
        combine
      } = DateRangePicker;;
    return(
        <div>
            <div id="modal-root" style={{zIndex:"2"}}>
         <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Your request has been sent. 
               
            </Modal>

         </div>
    <div className="row align-items-center g-lg-5 py-5 px-5 bg-light" id="Form">
         
    <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 mb-3  text-uppercase">Request Days Off</h1>
    </div>
    <div className="col-md-10 mx-auto col-lg-5">
      <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
        <div className="form-floating mb-3">

          <input type="input" name="fName" className="form-control" id="fName" placeholder="First Last" required />
          <label htmlFor="fName">First Name</label>
        </div>
        <div className="form-floating mb-3">

            <input type="input" name="lName" className="form-control" id="lName" placeholder="Last Name" required />
            <label htmlFor="lName">Last Name</label>
        </div>
        <div className="form-floating mb-3 d-flex justify-content-center" >

                <hr></hr>
                    <DateRangePicker name="DP"  id="DP" required showOneCalendar disabledDate={before(disableDay)}/>
        </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Request Days Off</button>
          <hr className="my-4"></hr>
      </form>
    </div>
    </div>
  </div>
  );
}

