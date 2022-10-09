import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h5>Profile Details:</h5>
          <div className="border border-success rounded p-2 mb-2">
            <div className="row">
              <div className="col-lg-6">name: person1</div>
              <div className="col-lg-6">gender: Male</div>
              <div className="col-lg-6">dob: 10/12/1985</div>
              <div className="col-lg-6">phone: 957864372</div>
              <div className="col-lg-6">email: person1@gmail.com</div>
              <div className="col-lg-6">city: chennai</div>
              <div className="col-lg-6">state: TamilNadu</div>
              <div className="col-lg-6">country: India</div>
            </div>
          </div>

          <Link to={"/user"} type="button" className="btn btn-primary">
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
