const closeModalButton = document.querySelector("#close-modal");

  const openModalButtonDataInput = document.querySelector("#DataInput");
  const modalDataInput = document.querySelector("#modal-dataInput");
  const fadeDataInput = document.querySelector("#fade-dataInput");

  const toggleModalData = () => {
    modalDataInput.classList.toggle("hide");
    fadeDataInput.classList.toggle("hide");
  };
  
  [openModalButtonDataInput, closeModalButton, fadeDataInput].forEach((el) => {
    el.addEventListener("click", () => toggleModalData());
  });

  
   

  const openModalButtonPoints = document.querySelector("#Points");
  const modalPoints = document.querySelector("#modal-points");
  const fadePoints = document.querySelector("#fade-points");

  const toggleModalPoints = () => {
    modalPoints.classList.toggle("hide");
    fadePoints.classList.toggle("hide");
  };
  
  [openModalButtonPoints, closeModalButton, fadePoints].forEach((el) => {
    el.addEventListener("click", () => toggleModalPoints());
  });




  const openModalButtonLines = document.querySelector("#Lines");
  const modalLines = document.querySelector("#modal-lines");
  const fadeLines = document.querySelector("#fade-lines");

  const toggleModalLines = () => {
    modalLines.classList.toggle("hide");
    fadeLines.classList.toggle("hide");
  };
  
  [openModalButtonLines, closeModalButton, fadeLines].forEach((el) => {
    el.addEventListener("click", () => toggleModalLines());
  });




  const openModalButtonInformation = document.querySelector("#Information");
  const modalInformation = document.querySelector("#modal-information");
  const fadeInformation = document.querySelector("#fade-information");

  const toggleModalInformation = () => {
    modalInformation.classList.toggle("hide");
    fadeInformation.classList.toggle("hide");
  };
  
  [openModalButtonInformation, closeModalButton, fadeInformation].forEach((el) => {
    el.addEventListener("click", () => toggleModalInformation());
  });
  



  const openModalButtonApperance = document.querySelector("#Apperance");
  const modalApperance = document.querySelector("#modal-apperance");
  const fadeApperance = document.querySelector("#fade-apperance");

  const toggleModalApperance = () => {
    modalApperance.classList.toggle("hide");
    fadeApperance.classList.toggle("hide");
  };
  
  [openModalButtonApperance, closeModalButton, fadeApperance].forEach((el) => {
    el.addEventListener("click", () => toggleModalApperance());
  });




  const openModalButtonPrintExport = document.querySelector("#PrintExport");
  const modalPrintExport = document.querySelector("#modal-printExport");
  const fadePrintExport = document.querySelector("#fade-printExport");

  const toggleModalPrintExport = () => {
    modalPrintExport.classList.toggle("hide");
    fadePrintExport.classList.toggle("hide");
  };
  
  [openModalButtonPrintExport, closeModalButton, fadePrintExport].forEach((el) => {
    el.addEventListener("click", () => toggleModalPrintExport());
  });


/*

==============================================
              Data Input - START
==============================================

*/
/*
const btnInput = document.querySelector("#insidePopupData")

btnInput.addEventListener("click", function(e) {
  e.preventDefault();

  const r = document.querySelector("#inputR");
  const n = document.querySelector("#inputN");
  const f = document.querySelector("#inputF");

  const valueR = r.valueR;
  const valueN = n.value;
  const valueF = f.value;

  console.log(valueR)
  console.log(valueN)
  console.log(valueF)
});
*/

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

/*

==============================================
             Ternary Charty - END
==============================================

*/

