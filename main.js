/*
 * @Author: your name
 * @Date: 2022-01-19 17:11:18
 * @LastEditTime: 2022-01-20 17:03:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Bezier-master/main.js
 */
const drawBezier2 = (canvas, start, end, p1) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = bezier2(start, end, p1, i);
    // log("p", p);
    drawPoint(canvas, p);
  }
};

const drawBezier3 = (canvas, start, end, p1, p2) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = bezier3(start, end, p1, p2, i);
    // log("p", p);
    drawPoint(canvas, p);
  }
};

const drawPoints = (canvas, positions) => {
  const startIndex = 0
  const endIndex = positions.length - 1
  const start = positions[startIndex]
  const end = positions[endIndex]
  drawPoint(canvas, start, 10, "red");
  drawPoint(canvas, end, 10, "red");

  positions.forEach((p, i) => {
    if ([startIndex, endIndex].includes(i)) {
      return
    }
    drawPoint(canvas, p, 10, "blue");
  });
};

const drawBezier = (canvas, positions) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = bezier(positions, i)[0]
    drawPoint(canvas, p);
  }
}

const drawLines = (canvas, positions) => {
  positions.forEach((p, i) => {
    if (positions.length - 1 === i) {
      return
    }
    drawLine(canvas, p, positions[i + 1]);
  });
};

const __main = () => {
  const canvas = document.querySelector(".g-canvas");

  const start = [20, 200];
  const end = [10, 10];

  const p1 = [250, 50];
  const p2 = [80, 80];

  const ps = [start, p1, p2, end]
  
  drawLines(canvas, ps)
  drawPoints(canvas, ps)
  drawBezier(canvas, ps)
};

__main();
