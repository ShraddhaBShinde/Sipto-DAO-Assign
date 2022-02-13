import React from "react";
import "../../Styles/Form.css";

function JoinNowForm() {
  return (
    <>
    <div className="position-absolute">
        <img classname="image" src="data:image/jpeg;base64,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"/>
        <div className="position-relative top-50 start-50 translate-middle">
        <form className="container p-5  bg-white shadow-lg mt-5">
          <h2>
          Ready to start your Journey with Sipto DAO?
          </h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
            Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Join Now
          </button>
      </form>
        </div>
      </div>
    </>
  );
}

export default JoinNowForm;
