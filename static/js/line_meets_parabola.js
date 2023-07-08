// Create figure
const figure = new Fig.Figure();

const pow = (power, k = 1, stop = 5, step = 0.05) => {
  const xValues = Fig.range(0, stop, step);
  return xValues.map(x => new Fig.Point(x, k * (x ** power)));
};
const plot = figure.add({
  name: 'plt',
  make: 'collections.plot',
  // Plot size
  width: 1,
  height: 1,
  position: [-0.5, -0.5],
  // Plot Title
  title: {
    text: [
      'Distance vs Speed',
      { text: 'Stop vs Cruise', font: { size: 0.05 } },
    ],
    offset: [0, 0.1],
  },
  // Axes customizations
  x: {
    title: 'v0 (m/s)',
  },
  y: {
    start: 0,
    stop: 20,
    title: 'd0 (m)',
  },
  // Traces with names for the legend
  trace: [
    { points: pow(1, 1.5, 10), name: 'Cruise' },   // Trace names are for legend
    {                                          // Trace with only markers
      points: pow(2, 0.25, 10, 0.1),
      name: 'Stop',
      // markers: { sides: 4, radius: 0.02 },
    },
  ],
  // Turn on the legend
  legend: { font: { size: 0.05 } },
});


// plot.getElement('Cruise').animations.new().rotation(
//   { velocity: 0.5, duration: null }
// ).start();
// 
// plot.getElement('Stop').animations.new().rotation({ velocity: 0.5, duration: null })
//   .start();
