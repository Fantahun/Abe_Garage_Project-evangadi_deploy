// Import react
import React from "react";
// Import the css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file
import "./assets/styles/custom.css";
import PageRouter from "./Router/PageRouter/PageRouter";

function App() {
  return (
    <>
      <PageRouter />
    </>
  );
}

export default App;
