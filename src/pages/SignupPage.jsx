import React from 'react'

function SignupPage() {
  return (

<div>
<div>
        <div className="container login-box border">
            <div className="h3 text-center">Register</div>
            <form action="">
                <div>
                    <label htmlFor="user-name" className="form-label">
                        Enter your name
                    </label>
                    <input type="text" name="" id="user-name" className="form-control" />
                </div>
                <div>
                    <label htmlFor="user-email" className="form-label" id="user-name">
                        Enter email
                    </label>
                    <input type="email" name="" id="user-email" className="form-control" />
                </div>
                <div className='mt-2 mb-3'>
                    <label htmlFor="user-password" className="form-label">
                        Enter password
                    </label>
                    <input type="password" name="" id="user-password" className="form-control" />
                </div>
                <div className='mt-2 mb-3'>
                    <label htmlFor="user-password" className="form-label">
                        Confirm password
                    </label>
                    <input type="password" name="" id="user-password" className="form-control" />
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
                <button type="button" className="btn btn-primary btn-block mb-4" data-mdb-button-init data-mdb-ripple-init>
                    Regester
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
  )
}

export default SignupPage