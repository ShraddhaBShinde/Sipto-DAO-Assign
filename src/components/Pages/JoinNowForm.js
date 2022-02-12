import React from "react";

function JoinNowForm() {
  return (
    <>
      <form className="container p-5  bg-white shadow-lg align-center justify-content-center mt-5">
        <h2 className="align-center justify-content-center">
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
    </>
  );
}

export default JoinNowForm;
