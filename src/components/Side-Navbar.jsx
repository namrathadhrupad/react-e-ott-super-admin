import React from "react";
import DashBoardContentOwner from "./DashBoardContentOwner";

function SideNavbar() {
  return (
    <div className="container-fluid">
      <div className="row bg-light ">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 pt-4 bg-white">
        <div className={`d-flex flex-column `}>
            {/* <div className={`flex-grow-1 ${isOpen ? 'sidebar-content-open' : 'sidebar-content-closed'}`}>

          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100"> */}
            <a
              href="/"
              className="d-flex align-items-center pb-3 me-md-auto text-dark text-decoration-none"
            >
              <img
                src="/images/contentownerlogo-green.svg"
                alt="Logo"
                className="me-2"
              />
              <span className="fs-3">ENVOTIONS</span>
            </a>
            <hr/>

            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start ">
              
              <li className="nav-item active">
                <a
                  href="#"
                  className="nav-link align-middle px-0"
                  aria-current="page"
                >
                  <span className="ms-1 text-dark">
                    <img
                      src="images/content-owner.svg"
                      alt="ContentOwner"
                      className="me-2"
                    />
                    <i className="nav-icon"></i>
                    Content Owners
                  </span>
                </a>
              </li>

              <li>
                <a href="#submenu2" className="nav-link align-middle px-0">
                  <span className="ms-1 text-dark">
                    <img
                      src="images/viewer-content.svg"
                      alt="ViewerContent"
                      className="me-2"
                    />
                    Content Viewers
                  </span>
                </a>
              </li>

              <li>
                <a href="#submenu4" className="nav-link px-0 align-middle ">
                  <span className="ms-1 text-dark">
                    <img
                      src="images/list-content.svg"
                      alt="listContent"
                      className="me-2"
                    />
                    Movies
                  </span>
                </a>
              </li>

              <li>
                <a href="#submenu5" className="nav-link px-0 align-middle">
                  <span className="ms-1 d-sm-inline text-dark">
                    <img
                      src="images/payment.svg"
                      alt="payment"
                      className="me-2"
                    />
                    Payment
                  </span>
                </a>
              </li>

                <hr className="my-3 border-2 text-divider"/>

              <li>
              <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-dark text-decoration-none"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>My Profile</span>
              </a>
              
              <ul className="dropdown-menu dropdown-menu-white text-small shadow">
                
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src={"/images/contentownerprofile.svg"}
                      alt="profile"
                      className="me-2"
                    />
                    Profile
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="images/settings.svg"
                      alt="settings"
                      className="me-2"
                    />
                    Settings
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="images/logout.svg"
                      alt="logout"
                      className="me-2"
                    />
                    Log out
                  </a>
                </li>
              </ul>
              </div>
              </li>
            </ul>
              
          </div>
        </div>

        <div className="col py-3 text-dark">
          <DashBoardContentOwner />
        </div>

      </div>
    </div>
  );
}

export default SideNavbar;
