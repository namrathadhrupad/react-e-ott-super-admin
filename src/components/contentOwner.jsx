import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { addContentOwner } from "../APIs/APIS/common_API";

function ContentOwner({ handleClose, showModal, fetchTableData }) {
  
  const initialValues = {
    email: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function validationForm() {
    const errors = {};

    if (formData.email === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
      setErrors(errors);
      return errors;
    }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = await validationForm();
        if (Object.keys(validationErrors).length === 0) {
            const res = await addContentOwner(formData);
            if (res && res.errors) {
                setErrors({
                    formError: res.errors
                });
            } else {
              fetchTableData();
              handleClose();
            }
        }
  }

  return (
    <div>
      {showModal && (
         <Modal
          show={true}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
       >

        <Modal.Header closeButton>
           <Modal.Title >Add Content Owner Details</Modal.Title>
        </Modal.Header>

         <Form onSubmit={handleSubmit}>
         <Modal.Body >
              <div className="custom-modal-body">
                <label for="inputEmail4" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="inputEmail4" 
                  name="email"
                  value={formData.email}
                  placeholder="Enter the Email Address"
                  onChange={handleChange}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
           </Modal.Body>

            <Modal.Footer>
              <button type="button" 
                      className="btn btn-secondary"
                      onClick={handleClose}
               >
                 Cancel
               </button>

               <button
                 type="Submit"
                 className="btn btn-success"
                >
                 Save
               </button>
             </Modal.Footer>
         </Form>
       </Modal>
     )}
   </div>
 );
}

export default ContentOwner;