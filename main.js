/*
 * @Author: your name
 * @Date: 2022-01-19 17:11:18
 * @LastEditTime: 2022-01-19 21:00:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Bezier-master/main.js
 */
const drawPoint = (canvas, point, size = 3, color = "black", isStrokeStyle = false) => {
  const [x, y] = point;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  if (isStrokeStyle) {
    ctx.strokeStyle = color
  }
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};

const drawLine = (canvas, p1, p2) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = vectorInterpolate(p1, p2, i);
    log("p", p);
    drawPoint(canvas, p, 3, 'pink', true);
  }
}

const drawBezier = (canvas, start, end, p1, p2) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = bezier(start, end, p1, p2, i);
    // log("p", p);
    drawPoint(canvas, p);
  }
}

const __main = () => {
  const canvas = document.querySelector(".g-canvas");

  const start = [20, 200];
  const end = [10, 10];
  

  const p1 = [350, 50];
  const p2 = [70, 90];

  drawBezier(canvas, start, end, p1, p2)

  log('start', start, 'p1', p1)
  drawLine(canvas, start, p1)
  drawLine(canvas, p1, p2)
  drawLine(canvas, p2, end)

  drawPoint(canvas, start, 10, "red");
  drawPoint(canvas, end, 10, "red");


  drawPoint(canvas, p1, 10, "blue");
  drawPoint(canvas, p2, 10, "blue");

  // for (let i = 0; i < 1; i += 0.001) {
  //   let p = bezier2(start, end, p1,  i);
  //   // log("p", p);
  //   drawPoint(canvas, p);
  // }
};

__main();
