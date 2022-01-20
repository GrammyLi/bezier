/*
 * @Author: your name
 * @Date: 2022-01-19 18:55:42
 * @LastEditTime: 2022-01-20 16:52:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /bezier/utils.js
 */
const log = console.log.bind(console);

const vectorLength = (v) => {
  const [x, y] = v;
  return Math.sqrt(x * x + y * y);
};

// B(t) = P0 + (P1 - P0) * t
const interpolate = (a, b, factor) => {
  return a + (b - a) * factor;
};

// 一
const vectorInterpolate = (p1, p2, factor) => {
  return [interpolate(p1[0], p2[0], factor), interpolate(p1[1], p2[1], factor)];
};

// 二
const bezier2 = (start, end, p1, factor) => {
  const c1 = vectorInterpolate(start, p1, factor);
  const c2 = vectorInterpolate(p1, end, factor);
  const p = vectorInterpolate(c1, c2, factor);
  return p;
};

// 三
const bezier3 = (start, end, p1, p2, factor) => {
  const c1 = vectorInterpolate(start, p1, factor);
  const c2 = vectorInterpolate(p1, p2, factor);
  const c3 = vectorInterpolate(p2, end, factor);

  return bezier2(c1, c3, c2, factor);
};

const bezier = (positions, factor) => {
  while (positions.length > 1) {
    const newPostions = [];
    positions.forEach((item, index) => {
      if (index === positions.length - 1) {
        return;
      }
      let p = vectorInterpolate(item, positions[index + 1], factor);
      newPostions.push(p);
    });
    return bezier(newPostions, factor);
  }
  return positions;
};

const drawPoint = (
  canvas,
  point,
  size = 3,
  color = "black",
) => {
  const [x, y] = point;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};

const drawLine = (canvas, p1, p2) => {
  for (let i = 0; i < 1; i += 0.001) {
    let p = vectorInterpolate(p1, p2, i);
    drawPoint(canvas, p, 3, "pink", true);
  }
};