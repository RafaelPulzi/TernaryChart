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
        text: "Simple Ternary Plot with Markers",
        x: 0.5,
        y: 1.3,
        font: { size: 15 },
      },
    ],
  };
  
  Plotly.newPlot("plot", [trace], layout);
  