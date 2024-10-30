import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

function ContentOwner({ handleClose, showModal }) {
  
  const initialValues = {
    email: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSelection(selectedOption) {
    setFormData({
      ...formData,
      status: selectedOption.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
  }

  function handleCloseConfirm() {
    setShowConfirmModal(false);
  }

  function handleShowConfirm() {
    setShowConfirmModal(true);
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

         <Form onClick={handleClick}>
         <Modal.Body >
              <div className="custom-modal-body">
                <label for="inputEmail4" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter the Email Address"/>
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
                 onClick={() => handleShowConfirm()}
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