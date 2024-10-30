import React, { useState } from "react";
import ContentOwner from "./contentOwner";

function DashBoardContentOwner() {
  const [showModal, setShowModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }

  function handleShow() {
    setShowModal(true);
  }

  return (
    <div className="container-fluid">
      <div className="text-dark text-decoration-none pt-5">
        <div className="row">
          <div className="col-9 text-Justify">
            <h4>Content Owners</h4>
          </div>

          <div className="col-3 text-right">
            <button type="button" className="btn btn-success"  onClick={handleShow}>
              <img src="images/plus.svg" alt="plus" className="me-1" />
                Add Content Owner
            </button>
          </div>
        </div>

        <div className="row pt-5 text-center">
          <table className="table table-bordered">
            <thead className="table-secondary ">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Join Date</th>
                <th scope="col">Email Address</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="d-flex justify-content-center align-items-center">
                  <img
                    src="/images/contentownerlogo-red.svg"
                    alt="logo"
                    className="me-3"
                  />
                  Red
                </td>
                <td>20/03/2025</td>
                <td>abcd-xyz@gmail.com.com</td>
                <td>
                  <span className="badge rounded-pill bg-success">Active</span>
                </td>
                <td>
                  {/* <link
                    {/* className="delete-btn"
                    onClick={() => handleShowDelete("Red")} 
                  > */}
                  <img src="/images/trash.svg" alt="Trash" className="me-3" />
                  {/* </link>

                <link
                    className="edit-btn"
                    onClick={() => handleShowEdit()} 
                  > */}
                  <img src="/images/Edit.svg" alt="Edit" />
                  {/* </link> */}
                  {/* </span> */}
                </td>
              </tr>

              <tr>
                <td className="d-flex justify-content-center align-items-center">
                  <img
                    src="/images/contentownerlogo-yellow.svg"
                    alt="logo"
                    className="me-3"
                  />
                  Yellow
                </td>
                <td>20/03/2025</td>
                <td>abcd-xyz@gmail.com.com</td>
                <td>
                  <span className="badge rounded-pill bg-success">Active</span>
                </td>
                <td>
                  {/* <span className="actions">
              <link
                    className="delete-btn"
                    onClick={() => handleShowDelete("Red")} 
                  > */}
                  <img src="/images/trash.svg" alt="Trash" className="me-3" />
                  {/* </link>

                <link
                    className="edit-btn"
                    onClick={() => handleShowEdit()} 
                  > */}
                  <img src="/images/Edit.svg" alt="Edit" />
                  {/* </link>
              </span> */}
                </td>
              </tr>

              <tr>
                <td className="d-flex justify-content-center align-items-center">
                  <img
                    src="/images/contentownerlogo-pink.svg"
                    alt="logo"
                    className="me-3"
                  />
                  Pink
                </td>
                <td>20/03/2025</td>
                <td>abcd-xyz@gmail.com.com</td>
                <td>
                  <span className="badge rounded-pill bg-success">Active</span>
                </td>
                <td>
                  <img src="/images/trash.svg" alt="Trash" className="me-3" />
                  <img src="/images/Edit.svg" alt="Edit" />
                </td>
              </tr>

              <tr>
                <td className="d-flex justify-content-center align-items-center">
                  <img
                    src="/images/contentownerlogo-violet.svg"
                    alt="logo"
                    className="me-3"
                  />
                  Violet
                </td>
                <td>20/03/2025</td>
                <td>abcd-xyz@gmail.com.com</td>
                <td>
                  <span className="badge rounded-pill bg-danger">Inactive</span>
                </td>
                <td>
                  <img src="/images/trash.svg" alt="Trash" className="me-3" />
                  <img src="/images/Edit.svg" alt="Edit" />
                </td>
              </tr>

              <tr>
                <td className="d-flex justify-content-center align-items-center">
                  <img
                    src="/images/contentownerlogo-orange.svg"
                    alt="logo"
                    className="me-3"
                  />
                  Orange
                </td>
                <td>20/03/2025</td>
                <td>abcd-xyz@gmail.com.com</td>
                <td>
                  <span className="badge rounded-pill bg-danger">Inactive</span>
                </td>
                <td>
                  <img src="/images/trash.svg" alt="Trash" className="me-3" />
                  <img src="/images/Edit.svg" alt="Edit" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ContentOwner showModal={showModal} handleClose={handleClose} />

      </div>
    </div>
  );
}

export default DashBoardContentOwner;
