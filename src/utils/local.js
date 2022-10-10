// 工具型方法  保存  localStorage
function saveLocal (key, value) {
  window.localStorage.setItem(key, value)
}
// 获取Token方法
function getLocal (key) {
  return window.localStorage.getItem(key)
}
// 移除token
function removeLocal (key) {
  window.localStorage.removeItem(key)
}

// 输出 出去
export { saveLocal, getLocal, removeLocal }
  