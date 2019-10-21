import React from "react";
import { relative } from "path";

const Toast = (message, type) => {
  return (
    <div
      ariaLive="polite"
      ariaAtomic="true"
      style={{ position: relative, minHeight: "200px" }}
    >
      <div className="toast" style={{ position: "absolute", top: 0, right: 0 }}>
        <div className="toast-header">
          <strong class="mr-auto">Indusnet System</strong>
          <button
            type="submit"
            className="ml-2 mb-1 close"
            dataDismiss="toast"
            ariaLabel="close"
          >
            <span areaHidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">So, this is message!!!</div>
      </div>
    </div>
  );
};

export default Toast;
