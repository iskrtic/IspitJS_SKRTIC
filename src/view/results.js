
export default (rez) => {
    let searchTerm = document.getElementById("searchTerm")

    //return `<h3>Rezultat za upit: ${rez.name}</h3>

    if (rez.data.length == 0) {
      return `<div><h3>Reultat nije pronađen</h3></div>`;
    }
    else {
      return `<h3>Rezultat za upit: ${searchTerm.value}</h3>

            <div style="display: flex; width: 1000px; padding: 0.5em; justify-content: flex-start; margin: 0.5em;  background-color: lightgrey;">
              <div style="display: inline-block; width: 400px;">Name</div>
              <div style="display: inline-block; width: 400px;">Title</div>
            </div>

              ${rez.data.map((elem) => {
                return `
                <div style="display: flex; width: 1000px; justify-content: flex-start; margin: 0.5em; border-bottom: 1px solid lightgrey;">
                <div style="display: inline-block; width: 400px;">${elem.title}</div>
                <div style="display: inline-block; width: 400px;">${elem.artist.name} </div>
                </div>`;
              }).join('')}
    `;
  }
};


/*
export default (rez) => {
  let searchTerm = document.getElementById("searchTerm")
  //return `<h3>Rezultat za upit: ${rez.name}</h3>
  //console.log(rez);
  return `<h3>Rezultat za upit: ${searchTerm.value}</h3>
          <ul>
            ${rez.results.map((elem) => {
              //console.log(elem.trackName + " " + elem.collectionName + " " + elem.previewUrl);
              return `<li> ${elem.artistName} - ${elem.trackName} </li>`;
            }).join('')}
          </ul>
  `;
};
*/