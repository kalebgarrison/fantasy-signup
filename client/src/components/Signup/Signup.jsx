import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <div id="fantasy" className="container">
      <div className="row">
        <div className="col-md-12">
          <form
            id="signupForm"
            action="https://wordpress.us9.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="2a9ed1ba10a148999ef21733f" />
            <input type="hidden" name="id" value="7561a98a3a" />
            <div className="form-row">
              <div className="col" id="first">
                <label for="exampleInputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="MERGE1"
                  name="MERGE1"
                />
              </div>
              <div className="col" id="last">
                <label for="exampleInputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="MERGE2"
                  name="MERGE2"
                />
              </div>
            </div>
            <div id="email">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                id="MERGE0"
                type="email"
                name="MERGE0"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button id="submit" type="submit" class="btn btn-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
