import React, { useContext, useState } from 'react';
import './LoginPage.css'
import { quizDataContext } from '../ContextValues';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const {users, setusers} = useContext(quizDataContext)
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const navigate = useNavigate()

  const handleForm = (event)=>{
    event.preventDefault()
    if (users.length ==0 ) return alert("you don't have regestered")
    users.forEach((user)=>{
      if (user.userEmail === userEmail && user.userPassword === userPassword){
        navigate('/')
        setuserEmail("")
        setuserPassword("")
      }
      else{
        alert("username/password is incorrect")
      }
    })
    
  }
  return (
    <>
    <div>
        <div className="container login-box border">
            <div className="h3 text-center">Login</div>
            <form action="" onSubmit={handleForm}>
                <div>
                    <label htmlFor="user-email" className="form-labe" id="user-name">
                        Enter email
                    </label>
                    <input type="email" name=""
                      value={userEmail}
                      onChange={(e)=>setuserEmail(e.target.value)}
                      id="user-email" className="form-control" 
                      required/>
                </div>
                <div className='mt-2 mb-3'>
                    <label htmlFor="user-password" className="form-labe">
                        Enter password
                    </label>
                    <input type="password" 
                      value={userPassword}
                      onChange={(e)=>setuserPassword(e.target.value)}
                      name="" id="user-password" className="form-control" 
                      required/>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                    {/* Simple link */}
                    <a href="/forgotpassword">Forgot password?</a>
                    </div>
                </div>

                {/* Submit button */}
                <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-block mb-4" data-mdb-button-init data-mdb-ripple-init>
                    Sign in
                </button>
                </div>

      {/* Register buttons */}
      <div className="text-center">
        <p>Not a member? <a href="/signup">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1" data-mdb-button-init data-mdb-ripple-init>
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1" data-mdb-button-init data-mdb-ripple-init>
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1" data-mdb-button-init data-mdb-ripple-init>
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1" data-mdb-button-init data-mdb-ripple-init>
          <i className="fab fa-github"></i>
        </button>
      </div>

            </form>
        </div>
    </div>
    </>
   
  );
}

export default LoginPage;
