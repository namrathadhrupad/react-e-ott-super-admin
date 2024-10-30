import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OttTextfieldSuperAdmin from "./OttTextFieldSuperAdmin";
import { login } from "../pages/APIS/common_API";

function SuperadminLogin(){

    const initialValues = {
        email: "",
        password: "",
      };
    
      const [formData, setFormData] = useState(initialValues);
      const [showPassword, setShowPassword] = useState(false);
      const [errors, setErrors] = useState({});

      const navigate = useNavigate();
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      function validationForm() {
        const errors = {};
        
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        
        if (!formData.password) {
          errors.email("Password is invalid");
    }
    
        return errors; // Make sure you return the errors object
    }
    
      const onValueChange = (e) => {
        return setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      async function onFormSubmit(e) {
        e.preventDefault();
        
        const validationErrors = validationForm();
        setErrors(validationErrors); // Set initial form validation errors
        
        if (Object.keys(validationErrors).length === 0) {
          const res = await login(formData); // Attempt login
          
          if (res && res.errors) {
            // Set form error message if login response includes errors
            setErrors({formError: res.errors});
          } else {
            // If login is successful, navigate to the next page
            navigate("/sidenavbar");
          }
        }
      }
    
      const handleForgotPassword = () => {
        localStorage.removeItem("userEmail");
        // navigate("/forgot-password");
      };

    return(
        <div className="loginSectionContainer">
          <div className="loginLogo">
              <img src="images/logo.svg" alt="logo" />
              </div>
              <div className="loginSection">
              <h2>ENVOTIONS</h2>

              <div className="loginCenterSection">
                <span>Log In</span>
              </div>

          <form className="loginForm" onSubmit={onFormSubmit}>
            <OttTextfieldSuperAdmin
              type="email"
              label="Email Address"
              value={formData.email}
              name="email"
              placeholder="Enter the Email Address"
              onChange={onValueChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

              <OttTextfieldSuperAdmin
                type={showPassword ? "text" : "password"}
                label="Password"
                value={formData.password}
                name="password"
                placeholder="Enter the Password"
                onChange={onValueChange}
              />
              <span
                className="toggle-visibility-login"
                onClick={togglePasswordVisibility}
              >
             <img
                src={showPassword
                    ? "/images/visible.svg"
                    : "/images/hiddenIcon.svg"
                }
                alt="visibility toggle"
              />
             </span>

             {errors.password && <p className="error">{errors.password}</p>}

            <div
              className="forgotPassword"
              onClick={handleForgotPassword}
            >
              Forgot Password
            </div>

            <button
                type="Submit"
                className="btn btn-success login-btn">
                LOG IN
            </button>
          </form>
        </div>
      </div>
    );
}

export default SuperadminLogin;