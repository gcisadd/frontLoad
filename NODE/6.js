export const baseURL = 'https://hmajax.itheima.net/api/province'
export const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

export default {
  URL: baseURL,
  arraySum: getArraySum,
}