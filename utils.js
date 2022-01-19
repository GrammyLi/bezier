/*
 * @Author: your name
 * @Date: 2022-01-19 18:55:42
 * @LastEditTime: 2022-01-19 20:58:38
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

const vectorInterpolate = (p1, p2, factor) => {
  return [interpolate(p1[0], p2[0], factor), interpolate(p1[1], p2[1], factor)];
};

// 三
const bezier = (start, end, p1, p2, factor) => {
  const c1 = vectorInterpolate(p1, p2, factor);
  const c2 = vectorInterpolate(start, c1, factor);
  const c3 = vectorInterpolate(c1, end, factor);
  const p = vectorInterpolate(c2, c3, factor);
  return p;
};

// 二
const bezier2 = (start, end, p1, factor) => {
  const c1 = vectorInterpolate(start, p1, factor);
  const p = vectorInterpolate(c1, end, factor);
  return p;
};