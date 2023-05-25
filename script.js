
/*

Pop-up's configuration

*/ 
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


/*

LINES PUP-UPS INSIDE DROP VERTICAL MENU

*/
/*

LINES PUP-UPS INSIDE DROP VERTICAL MENU

*/
//SOURCES POPUP
const openModalButtonLinesSources = document.querySelector("#Sources");
const modalLinesSources = document.querySelector("#modal-lines-Sources");
const fadeLinesSources = document.querySelector("#fade-lines-Sources");
const closeModalButtonLinesSources = document.querySelector("#close-modal-lines-Sources");

const toggleModalLinesSources = () => {
  modalLinesSources.classList.toggle("hide");
  fadeLinesSources.classList.toggle("hide");
};

[openModalButtonLinesSources, closeModalButtonLinesSources, fadeLinesSources].forEach((el) => {
  el.addEventListener("click", () => toggleModalLinesSources());
});

//SUSTAINABLE POPUP
const openModalButtonLinesSustainable = document.querySelector("#Sustainable");
const modalLinesSustainable = document.querySelector("#modal-lines-Sustainable");
const fadeLinesSustainable = document.querySelector("#fade-lines-Sustainable");
const closeModalButtonLinesSustainable = document.querySelector("#close-modal-lines-Sustainable");

const toggleModalLinesSustainable = () => {
  modalLinesSustainable.classList.toggle("hide");
  fadeLinesSustainable.classList.toggle("hide");
};

[openModalButtonLinesSustainable, closeModalButtonLinesSustainable, fadeLinesSustainable].forEach((el) => {
  el.addEventListener("click", () => toggleModalLinesSustainable());
});

//Sensibility POPUP
const openModalButtonLinesSensibility = document.querySelector("#Sensibility");
const modalLinesSensibility = document.querySelector("#modal-lines-Sensibility");
const fadeLinesSensibility = document.querySelector("#fade-lines-Sensibility");
const closeModalButtonLinesSensibility = document.querySelector("#close-modal-lines-Sensibility");

const toggleModalLinesSensibility = () => {
  modalLinesSensibility.classList.toggle("hide");
  fadeLinesSensibility.classList.toggle("hide");
};

[openModalButtonLinesSensibility, closeModalButtonLinesSensibility, fadeLinesSensibility].forEach((el) => {
  el.addEventListener("click", () => toggleModalLinesSensibility());
});





/*

APPERANCE PUP-UPS INSIDE DROP VERTICAL MENU

*/
/*
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
*/




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
              DROP DOWN MENUS
==============================================

*/

function DisplayLinesMenu(){
  var menu = document.getElementById("dropdown-menu-lines");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function DisplayApperanceMenu(){
  var menu = document.getElementById("dropdown-menu-apperance");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/*

==============================================
              POST - START
==============================================

*/

const dataForm = document.getElementById("dataForm");
const NameSend = document.querySelector("#inputName");  
const Rsend = document.querySelector("#inputR");
const Nsend = document.querySelector("#inputN");
const Fsend = document.querySelector("#inputF");

function submit(event) {
  event.preventDefault();

  fetch("http://localhost:8080/points", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      nm_ponto: NameSend.value,
      r_ponto: Rsend.value,
      n_ponto: Nsend.value,
      f_ponto: Fsend.value,
    })
  })
    .then(function (res) {
      console.log(res);
      // Handle the response here
    })
    .catch(function (error) {
      console.log(error);
      // Handle errors here
    });

  clean();
}

function clean() {
  NameSend.value = "";
  Rsend.value = "";
  Nsend.value = "";
  Fsend.value = "";
}

document.getElementById("insidePopupData").addEventListener('click', submit);
document.getElementById("close-modal-dataInput").addEventListener('click', clean);

/*

==============================================
              POST - END
==============================================

*/


/*

==============================================
              GET - START
==============================================

*/

function getData() {
  fetch("http://localhost:8080/points", {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error retrieving data");
      }
    })
    .then(function (data) {
      console.log(data);
      updateChart(data);
    })
    .catch(function (error) {
      console.log(error);
      // Handle errors here
    });
    
}


getData();

/*

==============================================
              GET - END
==============================================

*/

/*

==============================================
              PUT - START
==============================================

*/

function updateData(id, newData) {
  fetch(`http://localhost:8080/points/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(newData)
  })
    .then(function (res) {
      console.log(res);
      // Handle the response here
    })
    .catch(function (error) {
      console.log(error);
      // Handle errors here
    });
}

/*

==============================================
              PUT - END
==============================================

*/

/*

==============================================
              DELETE - START
==============================================

*/

function deleteData(id) {
  fetch(`http://localhost:8080/points/${id}`, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function (res) {
      console.log(res);
      // Handle the response here
    })
    .catch(function (error) {
      console.log(error);
      // Handle errors here
    });
}

/*

==============================================
              DELETE - END
==============================================

*/

/*

==============================================
            SOURCE   LINE
==============================================

*/
let isLineVisible = true;
const lineElementNtoF = document.querySelector('#lineAnalisyNtoF');
function toggleLineNtoF() {
  if (isLineVisible) {
      lineElementNtoF.style.display = 'none'; // Hide the line
  } else {
      lineElementNtoF.style.display = 'block'; // Show the line
  }
  isLineVisible = !isLineVisible;
}

let y1 = 86;
let y2 = 86;

function updateLineNtoF() {
  lineElementNtoF.setAttribute('y1', `${y1}%`);
  lineElementNtoF.setAttribute('y2', `${y2}%`);
}

function decreaseYNtoF() {
  y1 -= 1;
  y2 -= 1;
  // LOW limit
  if (y1 < 22) y1 = 22;
  if (y2 < 22) y2 = 22;
  updateLineNtoF();
}

function increaseYNtoF() {
  y1 += 1;
  y2 += 1;
  // TOP limit
  if (y1 > 86) y1 = 86;
  if (y2 > 86) y2 = 86;
  updateLineNtoF();
}


const lineElementRtoN = document.querySelector('#lineAnalisyRtoN');
function toggleLineRtoN() {
  if (isLineVisible) {
      lineElementRtoN.style.display = 'none'; // Hide the line
  } else {
      lineElementRtoN.style.display = 'block'; // Show the line
  }
  isLineVisible = !isLineVisible;
}

let y1RtoN = 89;
let y2RtoN = 15;
let x1RtoN = 38.25;
let x2RtoN = 48.40;

function updateLineRtoN() {
  lineElementRtoN.setAttribute('y1', `${y1RtoN}%`);
  lineElementRtoN.setAttribute('y2', `${y2RtoN}%`);
  lineElementRtoN.setAttribute('x1', `${x1RtoN}%`);
  lineElementRtoN.setAttribute('x2', `${x2RtoN}%`);
}

function decreaseRtoN() {
  y1RtoN -= 1;
  y2RtoN -= 1;
  x1RtoN -= 1;
  x2RtoN -= 1;
  // LOW limit
  if (y1RtoN > 89) y1RtoN = 89;
  if (y2RtoN > 15) y2RtoN = 15;
  if (x1RtoN > 38.25) x1RtoN = 38.25;
  if (x2RtoN > 48.40) x2RtoN = 48.40;
  /*
  if (y1RtoN < 22) y1 = 22;
  if (y2RtoN < 22) y2 = 22;
  if (x1RtoN < 22) x1 = 22;
  if (x2RtoN < 22) x2 = 22;
  */
  updateLineRtoN();
}

function increaseRtoN() {
  y1RtoN += 1;
  y2RtoN += 1;
  x1RtoN += 1;
  x2RtoN += 1;
  // TOP limit
  

  updateLineRtoN();
}


const lineElementFtoR = document.querySelector('#lineAnalisyFtoR');
function toggleLineFtoR() {
  if (isLineVisible) {
      lineElementFtoR.style.display = 'none';
  } else {
      lineElementFtoR.style.display = 'block'; 
  }
  isLineVisible = !isLineVisible;
}

let y1FtoR = 89;
let y2FtoR = 15;
let x1FtoR = 56.7;
let x2FtoR = 46.5;

function updateLineFtoR() {
  lineElementFtoR.setAttribute('y1', `${y1FtoR}%`);
  lineElementFtoR.setAttribute('y2', `${y2FtoR}%`);
  lineElementFtoR.setAttribute('x1', `${x1FtoR}%`);
  lineElementFtoR.setAttribute('x2', `${x2FtoR}%`);
}

function decreaseFtoR() {
  y1FtoR -= 1;
  y2FtoR -= 1;
  x1FtoR -= 1;
  x2FtoR -= 1;
  // LOW limit
  /*
  if (y1FtoR < 22) y1 = 22;
  if (y2FtoR < 22) y2 = 22;
  if (x1FtoR < 22) x1 = 22;
  if (x2FtoR < 22) x2 = 22;
  */
  updateLineFtoR();
}

function increaseFtoR() {
  y1FtoR += 1;
  y2FtoR += 1;
  x1FtoR += 1;
  x2FtoR += 1;
  // TOP limit
  /*
  if (y1FtoR > 82) y1FtoR = 82;
  if (y2FtoR > 82) y2FtoR = 82;
  if (x1FtoR > 82) x1FtoR = 82;
  if (x2FtoR > 82) x2FtoR = 82;    
  */   
  updateLineFtoR();
}



updateLineNtoF();

updateLineRtoN();

updateLineFtoR();

/*

==============================================
            Ternary Charty - START
==============================================

*/

function updateChart(data) {
  // Map the retrieved data to the required format for the chart
  const updatedData = data.map((point) => ({
    R: point.r_ponto,
    N: point.n_ponto,
    F: point.f_ponto,
    label: point.nm_ponto,
  }));
 
/*
const rawData = [
  { R: 1.00E+00, N: 2.00E+00, F: 3.00E+00, label: "point 1" },
  { R: 4.00E+00, N: 5.00E+00, F: 6.00E+00, label: "point 2" },
  { R: 1.00E+00, N: 1.00E+00, F: 1.00E+00, label: "point 3" },
 
];
*/
function makeAxis(title, tickangle) {
  return {
    title: title,
    titlefont: { size: 20 },
    tickfont: { size: 15 },
    tickcolor: "rgba(0,0,0,0)",
    ticklen: 5,
    showline: true,
    showgrid: true,
    tickvals: [], // This will remove all tick labels, and also the grid...
  };
}



const trace = {
  type: "scatterternary",
  mode: "markers",
  
  a: updatedData.map((x) => x.R),
  b: updatedData.map((x) => x.N),
  c: updatedData.map((x) => x.F),
  text: updatedData.map((x) => x.label),
  marker: {
    symbol: 0,
    color: "#DB7365",
    size: 7,
    line: { width: 2 },
  },
  name: "Points"
};


/*===========SIMERGY POINT===========*/ 

const sumPoints = updatedData.reduce(
  (acc, point) => {
    acc.R += point.R;
    acc.N += point.N;
    acc.F += point.F;
    return acc;
  },
  { R: 0, N: 0, F: 0 }
);

const averagePoint = {
  R: sumPoints.R / updatedData.length,
  N: sumPoints.N / updatedData.length,
  F: sumPoints.F / updatedData.length,
};

const averageTrace = {
  type: "scatterternary",
  mode: "markers",
  a: [averagePoint.R],
  b: [averagePoint.N],
  c: [averagePoint.F],
  marker: {
    symbol: "circle",
    size: 10,
    color: "green",
    line: { width: 1, color: "black" },
  },
  line: { color: "green", width: 2 },
  connectgaps: true,
  name: "Simergy Point"
};
/*===========SIMERGY POINT===========*/ 
 
const layout = {
  ternary: {
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

Plotly.newPlot("plot", [trace, averageTrace], layout).then(() => {
  // Get the ternary chart dimensions
  const chart = document.querySelector('.scatterternary');
  const chartRect = chart.getBoundingClientRect();
  const chartWidth = chartRect.width;
  const chartHeight = chartRect.height;




  const line = document.querySelector('.line');
  line.setAttribute('x1', `${chartRect.left}px`);
  line.setAttribute('y1', `${chartRect.top + chartHeight}px`);
  line.setAttribute('x2', `${chartRect.left + chartWidth}px`);
  line.setAttribute('y2', `${chartRect.top}px`);


});



/*

==============================================
        SHOW THE DATA IN THE HTML FILE
==============================================

*/

const checkboxState = [];

function updateDataContainer(data) {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = ""; 

  var EYR = 0
  for (let i = 0; i < data.length; i++) {
    const pointParagraph = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // Set the checkbox's checked property based on the stored state or default to true
    checkbox.checked = checkboxState[i] === undefined ? true : checkboxState[i];

    // Add an event listener to update the state when the checkbox is clicked
    checkbox.addEventListener("change", function() {
      checkboxState[i] = checkbox.checked;
    });

    pointParagraph.appendChild(checkbox);

    var R = data[i].r_ponto;
    var N = data[i].n_ponto;
    var F = data[i].f_ponto
    var EYR = (1/F).toFixed(5);
    var EIR = (F/EYR).toFixed(5);
    var ELR = ((1 - R)/R).toFixed(5);
    var SI = (EYR/ELR).toFixed(5);

    const dataText = document.createElement("span");
    dataText.textContent = ` ${data[i].nm_ponto}, R: ${R}, N: ${N}, F: ${F}, EYR: ${EYR} EIR: ${EIR}, ELR: ${ELR}, SI: ${SI}`;

    pointParagraph.appendChild(dataText);

    dataContainer.appendChild(pointParagraph);
  }
}

updateDataContainer(data);

/*
==============================================
     EXPORT IMAGES IN DIFFERENT FORMATS
==============================================
*/


document.getElementById('exportPNG').addEventListener('click', function() {
  exportChart('png', 'chart.png');
});

document.getElementById('exportJPEG').addEventListener('click', function() {
  exportChart('jpeg', 'chart.jpeg');
});

document.getElementById('exportSVG').addEventListener('click', function() {
  exportChart('svg', 'chart.svg');
});

function exportChart(format, filename) {
  if (format === 'pdf') {
    const element = document.getElementById('plot');
    domtoimage.toPng(element)
      .then(function (dataUrl) {
        var pdf = new jsPDF();
        var img = new Image();
        img.src = dataUrl;
        img.onload = function() {
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          var imageData = canvas.toDataURL('image/jpeg');
          pdf.addImage(imageData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
          pdf.save(filename);
        };
      });
  } else {
    Plotly.toImage('plot', { format: format, width: 800, height: 600 })
      .then(function (url) {
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
      });
  }
}

}
