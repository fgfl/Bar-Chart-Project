/* Nov 12, 2019
  Frederick

  js script for barChart.html
*/

function barChartFns($) {
  const canvasHeight = 500;
  const canvasWidth = 500;
  const leftMargin = 50;
  const rightMargin = 50;
  const topMargin = 50;
  const bottomMargin = 50;

  const yAxisCoor = {
    start: [leftMargin, topMargin],
    end: [leftMargin, canvasHeight - bottomMargin]

  };
  const xAxisCoor = {
    start: [leftMargin, canvasHeight - bottomMargin],
    end: [canvasWidth - leftMargin - rightMargin, canvasHeight - bottomMargin]
  }

  //let ctx = $("#barChart").getContext("2d");
  let ctx = document.getElementById("barChart").getContext("2d");
  ctx.beginPath();
  ctx.moveTo(yAxisCoor.start[0], yAxisCoor.start[1]);
  ctx.lineTo(yAxisCoor.end[0], yAxisCoor.end[1]);
  ctx.lineTo(xAxisCoor.end[0], xAxisCoor.end[1]);
  ctx.stroke();
}
