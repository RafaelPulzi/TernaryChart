const openModalButtonDataInput = document.querySelector("#DataInput");
//const openModalButtonPoints = document.querySelector("#Points");

/*
const openModalButtonLines = document.querySelector("#Lines");
const openModalButtonInformation = document.querySelector("#Information");
const openModalButtonApperance = document.querySelector("#Apperance");
const openModalButtonPrintExport = document.querySelector("#PrintExport");
*/

const closeModalButton = document.querySelector("#close-modal");

const modalBodyDataInput = document.querySelector("#modal-dataInput");
//const modalBodyPoints = document.querySelector("#modal-body-points");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modalBodyDataInput.classList.toggle("hide");
  //modalBodyPoints.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButtonDataInput, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});





var trace1 = {
  type: 'scatterternary',
  mode: 'markers',
  a: [0.1, 0.4, 0.7],
  marker: {
    color: 'red',
    size: 10,
    opacity: 0.7
  },
  name: 'Data Points'
};

var data = [trace1];

var layout = {
  ternary: {
    sum: 1,
    aaxis: { title: 'A', ticksuffix: '', min: 0, max: 1, dtick: 0.1 },
    baxis: { title: 'B', ticksuffix: '', min: 0, max: 1, dtick: 0.1 },
    caxis: { title: 'C', ticksuffix: '', min: 0, max: 1, dtick: 0.1 },
    bgcolor: '#fff',
    line: {
      color: 'black'
    }
  },
  width: 500,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 50
  },
  hovermode: 'closest'
};

Plotly.newPlot('chart', data, layout);

