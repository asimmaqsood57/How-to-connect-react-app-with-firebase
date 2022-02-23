import React from "react";

function Alert() {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Your data is stored successfully!</strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
