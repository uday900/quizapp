import React from 'react';
import './LoginPage.css'
function LoginPage() {
  return (
    <>
    <div>
        <div className="container login-box border">
            <div className="h3 text-center">Login</div>
            <form action="">
                <div>
                    <label htmlFor="user-email" className="form-labe" id="user-name">
                        Enter email
                    </label>
                    <input type="email" name="" id="user-email" className="form-control" />
                </div>
                <div className='mt-2 mb-3'>
                    <label htmlFor="user-password" className="form-labe">
                        Enter password
                    </label>
                    <input type="password" name="" id="user-password" className="form-control" />
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
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* Submit button */}
                <div className='text-center'>
                <button type="button" className="btn btn-primary btn-block mb-4" data-mdb-button-init data-mdb-ripple-init>
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
