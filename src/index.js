import React from "react";
import ReactDOM from "react-dom";

const title = "React Webpack Babel Boilerplate (updated 2018)";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
