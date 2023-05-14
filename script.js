const openModalButtonDataInput = document.querySelector("#DataInput");
const modalDataInput = document.querySelector("#modal-dataInput");
const fadeDataInput = document.querySelector("#fade-dataInput");
const closeModalButtonDataInput = document.querySelector("#close-modal-dataInput");

const toggleModalData = () => {
  modalDataInput.classList.toggle("hide");
  fadeDataInput.classList.toggle("hide");
};

[openModalButtonDataInput, closeModalButtonDataInput, fadeDataInput].forEach((el) => {
  el.addEventListener("click", () => toggleModalData());
});



const openModalButtonPoints = document.querySelector("#Points");
const modalPoints = document.querySelector("#modal-points");
const fadePoints = document.querySelector("#fade-points");
const closeModalButtonPoints = document.querySelector("#close-modal-points");

const toggleModalPoints = () => {
  modalPoints.classList.toggle("hide");
  fadePoints.classList.toggle("hide");
};

[openModalButtonPoints, closeModalButtonPoints, fadePoints].forEach((el) => {
  el.addEventListener("click", () => toggleModalPoints());
});




const openModalButtonLines = document.querySelector("#Lines");
const modalLines = document.querySelector("#modal-lines");
const fadeLines = document.querySelector("#fade-lines");
const closeModalButtonLines = document.querySelector("#close-modal-lines");

const toggleModalLines = () => {
  modalLines.classList.toggle("hide");
  fadeLines.classList.toggle("hide");
};

[openModalButtonLines, closeModalButtonLines, fadeLines].forEach((el) => {
  el.addEventListener("click", () => toggleModalLines());
});




const openModalButtonInformation = document.querySelector("#Information");
const modalInformation = document.querySelector("#modal-information");
const fadeInformation = document.querySelector("#fade-information");
const closeModalButtonInformation = document.querySelector("#close-modal-information");

const toggleModalInformation = () => {
  modalInformation.classList.toggle("hide");
  fadeInformation.classList.toggle("hide");
};

[openModalButtonInformation, closeModalButtonInformation, fadeInformation].forEach((el) => {
  el.addEventListener("click", () => toggleModalInformation());
});




const openModalButtonApperance = document.querySelector("#Apperance");
const modalApperance = document.querySelector("#modal-apperance");
const fadeApperance = document.querySelector("#fade-apperance");
const closeModalButtonApperance = document.querySelector("#close-modal-apperance");

const toggleModalApperance = () => {
  modalApperance.classList.toggle("hide");
  fadeApperance.classList.toggle("hide");
};

[openModalButtonApperance, closeModalButtonApperance, fadeApperance].forEach((el) => {
  el.addEventListener("click", () => toggleModalApperance());
});




const openModalButtonPrintExport = document.querySelector("#PrintExport");
const modalPrintExport = document.querySelector("#modal-printExport");
const fadePrintExport = document.querySelector("#fade-printExport");
const closeModalButtonPrintExport = document.querySelector("#close-modal-printExport");

const toggleModalPrintExport = () => {
  modalPrintExport.classList.toggle("hide");
  fadePrintExport.classList.toggle("hide");
};

[openModalButtonPrintExport, closeModalButtonPrintExport, fadePrintExport].forEach((el) => {
  el.addEventListener("click", () => toggleModalPrintExport());
});


/*

==============================================
              Data Input - START
==============================================

*/

const dataSend = document.querySelector("#modal-body-dataInput")
const Rsend = document.querySelector("#inputR")
const Nsend = document.querySelector("#inputN")
const Fsend = document.querySelector("#inputF")

function submit() {
  fetch("http://localhost:8080/points",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        r: Rsend.value,
        n: Nsend.value,
        f: Fsend.value,
      })
    })
    .then(function (res) { console.log(res)})
    .catch(function (res) {console.log(res)})
    
}

function clean () {
  Rsend.value = "";
  Nsend.value = "";
  Fsend.value = "";
};

dataSend.addEventListener('submit', function(event) {
  event.preventDefault();

  submit();
  clean();
});

/*

==============================================
              Data Input - END
==============================================

*/


/*

==============================================
            Ternary Charty - START
==============================================

*/

const rawData = [
  { R: 1.00E+00, N: 2.00E+00, F: 3.00E+00, label: "point 1" },
  { R: 4.00E+00, N: 5.00E+00, F: 6.00E+00, label: "point 2" },
  { R: 1.00E+00, N: 1.00E+00, F: 1.00E+00, label: "point 3" },
 
];

function makeAxis(title, tickangle) {
  return {
    title: title,
    titlefont: { size: 20 },
    tickangle: tickangle,
    tickfont: { size: 15 },
    tickcolor: "rgba(0,0,0,0)",
    ticklen: 5,
    showline: true,
    showgrid: true,
  };
}

const trace = {
  type: "scatterternary",
  mode: "markers",
  a: rawData.map((x) => x.R),
  b: rawData.map((x) => x.N),
  c: rawData.map((x) => x.F),
  text: rawData.map((x) => x.label),
  marker: {
    symbol: 0,
    color: "#DB7365",
    size: 7,
    line: { width: 2 },
  },
};

const layout = {
  ternary: {
    sum: 100,
    aaxis: makeAxis("R", 0),
    baxis: makeAxis("<br>N", 45),
    caxis: makeAxis("<br>F", -45),
  },
  annotations: [
    {
      showarrow: false,
      text: "Ternary Chart Simergy",
      x: 0.5,
      y: 1.3,
      font: { size: 15 },
    },
  ],
};

Plotly.newPlot("plot", [trace], layout);
/*

==============================================
             Ternary Charty - END
==============================================

*/