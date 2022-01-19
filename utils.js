/*
 * @Author: your name
 * @Date: 2022-01-19 18:55:42
 * @LastEditTime: 2022-01-19 18:55:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /bezier/utils.js
 */
const log = console.log.bind(console);

const vectorLength = (v) => {
  const [x, y] = v;
  return Math.sqrt(x * x + y * y);
};

const interpolate = (a, b, factor) => {
  return a + (b - a) * factor;
};

const vectorInterpolate = (a, b, factor) => {
  return [interpolate(a[0], b[0], factor), interpolate(a[1], b[1], factor)];
};

const bezier = (start, end, p1, p2, factor) => {
  const c1 = vectorInterpolate(p1, p2, factor);
  const c2 = vectorInterpolate(start, c1, factor);
  const c3 = vectorInterpolate(c1, end, factor);
  const p = vectorInterpolate(c2, c3, factor);
  return p;
};