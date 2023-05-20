
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
const openModalButtonLinesSustainable = document.querySelector("#Sustainable");
const modalLinesSustainable = document.querySelector("#modal-lines-Sustainable");
const fadeLinesSustainable = document.querySelector("#fade-lines-Sustainable");
const closeModalButtonLinesSustainable = document.querySelector("#close-modal-lines-Sustainable");

const toggleModalLines = () => {
  modalLinesSustainable.classList.toggle("hide");
  fadeLinesSustainable.classList.toggle("hide");
};

[openModalButtonLinesSustainable, closeModalButtonLinesSustainable, fadeLinesSustainable].forEach((el) => {
  el.addEventListener("click", () => toggleModalLines());
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

const dataForm = document.getElementById("#dataForm");
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
      name: NameSend.value,
      r: Rsend.value,
      n: Nsend.value,
      f: Fsend.value,
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
      // Process the retrieved data here
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
            SUSTAINABLE LINE
==============================================

*/

const lineElement = document.querySelector('#lineAnalisy');
let isLineVisible = true;

function toggleLine() {
    if (isLineVisible) {
        lineElement.style.display = 'none'; // Hide the line
    } else {
        lineElement.style.display = 'block'; // Show the line
    }
    isLineVisible = !isLineVisible;
}

let y1 = 82;
let y2 = 82;

function updateLine() {
    lineElement.setAttribute('y1', `${y1}%`);
    lineElement.setAttribute('y2', `${y2}%`);
}

function decreaseY() {
    y1 -= 1;
    y2 -= 1;
    // Check lower limit
    if (y1 < 22) y1 = 22;
    if (y2 < 22) y2 = 22;
    updateLine();
}

function increaseY() {
    y1 += 1;
    y2 += 1;
    // Check upper limit
    if (y1 > 82) y1 = 82;
    if (y2 > 82) y2 = 82;
    updateLine();
}

updateLine();


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

Plotly.newPlot("plot", [trace], layout).then(() => {

  // Get the SVG container
  const svgContainer = document.querySelector('.scatterlayer');

  // Create a new group element
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // Get the line element
  const line2 = document.querySelector('.line');

  // Append the line element to the group
  group.appendChild(line2);

  // Append the group to the SVG container
  svgContainer.appendChild(group);
  // Get the ternary chart dimensions
  const chart = document.querySelector('.scatterternary');
  const chartRect = chart.getBoundingClientRect();
  const chartWidth = chartRect.width;
  const chartHeight = chartRect.height;



  // Adjust the line coordinates based on the chart dimensions
  const line = document.querySelector('.line');
  line.setAttribute('x1', `${chartRect.left}px`);
  line.setAttribute('y1', `${chartRect.top + chartHeight}px`);
  line.setAttribute('x2', `${chartRect.left + chartWidth}px`);
  line.setAttribute('y2', `${chartRect.top}px`);

  // Adjust the circle coordinates based on the chart dimensions
  const circle = document.querySelector('.circle');
  const cAxis = document.querySelector('.scatterternary .ytitle');
  const cAxisRect = cAxis.getBoundingClientRect();
  const cAxisX = chartRect.left + (chartWidth * 0.5);
  const cAxisY = cAxisRect.top - cAxisRect.height * 0.5;
  circle.setAttribute('cx', `${cAxisX}px`);
  circle.setAttribute('cy', `${cAxisY}px`);
});


/*

==============================================
             Ternary Charty - END
==============================================

*/

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


