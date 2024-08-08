import React from 'react'
import { useState, useContext } from 'react';
import { quizDataContext } from '../ContextValues';
function ForgotPassword() {
    const {users, setusers} = useContext(quizDataContext)
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [userRePassword, setuserRePassword] = useState("");

    const [isSentVerificationCode, setisSentVerificationCode] = useState(false)
    const [isVerify, setisVerify] = useState(false)
    const [hide, sethide] = useState(true)
    const [otp, setotp] = useState("")
    const handleForm = (event) => { 
        
    }

    const handleVerify = (e) => { 
        setisSentVerificationCode(false)
        setisVerify(true);
     }
  return (
    <div>
         <div className="container login-box border">
            <div className="h3 text-center">
                Forgot Password ?
            </div>
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
                {
                    isSentVerificationCode && <div>
                        <div className='mt-3'>
                    <label htmlFor="user-verification-code" className="form-labe" id="user-verification-code">
                        Enter verification code/otp
                    </label>
                    <input type="text" name=""
                      value={otp}
                      onChange={(e)=>setotp(e.target.value)}
                      id="user-verification-code" className="form-control" 
                      required/>
                </div>

                    <div className="text-center mt-4">
                        <button className="btn btn-success"
                            disabled = {otp.length ==0}
                            onClick={handleVerify}>
                            verify
                        </button>
                    </div>

                    </div>
                }
                {
                    isVerify && (
                        <div>
                            <div className='mt-2'>
                            <label htmlFor="user-password" className="form-labe" id="user-password">
                                Set new password
                            </label>
                            <input type="password" name=""
                            value={userPassword}
                            onChange={(e)=>setuserPassword(e.target.value)}
                            id="user-password" className="form-control" 
                            required/>
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="user-repassword" className="form-labe" id="user-repassword">
                                re-enter password
                            </label>
                            <input type="password" name=""
                            value={userRePassword}
                            onChange={(e)=>setuserRePassword(e.target.value)}
                            id="user-repassword" className="form-control" 
                            required/>
                        </div>

                        <div className='text-center mt-3'>
                            <button className="btn btn-primary">
                                set password
                            </button>
                        </div>
                        </div>

                    )
                }
               
                {/* Submit button */}
                <div className='text-center mt-3'>
                {
                    hide  && <button type="button" 
                    onClick={()=>{
                        setisSentVerificationCode(true)
                        sethide(false)
                    }}
                    disabled = {userEmail.length ==0} 
                    className="btn btn-primary btn-block mb-4" data-mdb-button-init data-mdb-ripple-init>
                    Send Verification Code
                </button>
                }
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
  )
}

export default ForgotPassword