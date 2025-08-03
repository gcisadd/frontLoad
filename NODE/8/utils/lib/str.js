const checkUserName = username => {
  return username.length >= 8
}
const checkPassword = password => {
  return password.length >= 6
}

export {
  checkPassword, checkUserName
}
