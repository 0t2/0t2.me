import "../css/main.scss";
import Typed, { TypedOptions } from "typed.js";

const options: TypedOptions = {
  stringsElement: "#typed-strings",
  typeSpeed: 50
};

const typed = new Typed("#typed", options);
