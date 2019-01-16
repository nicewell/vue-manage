/**
 * utils 公共方法
 */
/**
 * @param {Number} min 最小
 * @param {Number} max 最大
 */
const getRandom = (min, max) => {
  return Math.round((max - min) * Math.random()) + min
}
/**
 * @param {Number} n 需要检测补零数字
 */
const addZero = (n) => {
  return n < 10 ? '0' + n : '' + n
}
/**
 * 实践格式化
 */
const formatTime = ms => {
  let date = new Date(ms)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  return addZero(y) + '/' + addZero(m) + '/' + addZero(d)
}

export { getRandom, addZero, formatTime }
