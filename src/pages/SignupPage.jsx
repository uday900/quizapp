import React, { useContext, useState } from 'react';
import { quizDataContext } from '../ContextValues';

function SignupPage() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRePassword, setUserRePassword] = useState("");
    const { users, setusers } = useContext(quizDataContext);

    const handleForm = (event) => {
        event.preventDefault();
        if (userPassword !== userRePassword) {
            return alert("Password didn't match");
        }
        setusers(
            [...users, 
                {
                    userName,
                    userEmail,
                    userPassword,
                }
            ]
        );
        setUserEmail("");
        setUserName("");
        setUserPassword("");
        setUserRePassword("");
        console.log("Matched", users);
    };

    return (
        <div className=''>
            <div>
                <div className="container login-box border">
                    <div className="h3 text-center">Register</div>
                    <form action="" onSubmit={handleForm}>
                        <div>
                            <label htmlFor="user-name" className="form-label">
                                Enter your name
                            </label>
                            <input 
                                type="text" 
                                id="user-name" 
                                className="form-control"
                                value={userName} 
                                onChange={(e) => setUserName(e.target.value)}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="user-email" className="form-label">
                                Enter email
                            </label>
                            <input 
                                type="email" 
                                id="user-email" 
                                className="form-control" 
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className='mt-2 mb-3'>
                            <label htmlFor="user-password" className="form-label">
                                Enter password
                            </label>
                            <input 
                                type="password" 
                                id="user-password" 
                                className="form-control" 
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <div className='mt-2 mb-3'>
                            <label htmlFor="user-repassword" className="form-label">
                                Confirm password
                            </label>
                            <input 
                                type="password" 
                                id="user-repassword" 
                                className="form-control" 
                                value={userRePassword}
                                onChange={(e) => setUserRePassword(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <div className="">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className='text-center'>
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block mb-4" 
                                data-mdb-button-init 
                                data-mdb-ripple-init
                            >
                                Register
                            </button>
                        </div>

                        {/* Register buttons */}
                        <div className="text-center">
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
        </div>
    );
}

export default SignupPage;
