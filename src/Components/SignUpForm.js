import React, { useState } from "react";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [passwordMismatchMsg, setPasswordMismatchMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  //Form validation(Error/Success Handling)
  function validateForm() {
    if (!fullName) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (!email) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (!password) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (!confirmPassword) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (password !== confirmPassword) {
      setErrorMsg(false);
      setPasswordMismatchMsg(true);
      setSuccessMsg(false);
      return;
    } else {
      setErrorMsg(false);
      setPasswordMismatchMsg(false);
      setSuccessMsg(true);
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
    >
      <h2>SignUp</h2>
      <div>
        <label for="full-name">Full Name</label>
        <input
          id="full-name"
          placeholder="Enter your fullname"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          placeholder="Enter email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          placeholder="Enter confirm password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="error-success-msg">
        {errorMsg && <p id="error-msg">All the fields are mandatory</p>}
        {passwordMismatchMsg && (
          <p id="error-msg">Password and Confirm Password not matching</p>
        )}
        {successMsg && <p id="success-msg">Successfully SignedUp!!</p>}
      </div>
      <input type="submit" value="SignUp" id="signup-btn" />
    </form>
  );
}
