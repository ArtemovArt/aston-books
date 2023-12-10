import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function Loader() {
  return (
    <div className="loader">
      <CircularProgress size={100} color="inherit" />
    </div>
  );
}

export default Loader;
