import Layout from "./view/layout.js";
import Data from "./data.js";
import { render } from "./render.js";
import MarkupZaRezultate from "./view/results.js";

export default () => {

  //Unesite kriterij
  document.getElementById("app").innerHTML =Layout();

  //render(Layout(), document.getElementById("app"));
  let elementRezultata = document.getElementById("results");

  document.getElementById("searchTerm").addEventListener("change", (event) => {

    let spinner = document.getElementById("spinner");
    spinner.innerHTML=`<img src="./icons/4Segments.gif" alt="spinner" width: "10px">`;
  
  //document.getElementById("searchTerm").addEventListener("keydown", (event) => {
    Data(event.target.value).then((rezultat) => {
      spinner.innerHTML=`<br/>`;
      render(MarkupZaRezultate(rezultat), elementRezultata);
    });
  });
  
};
