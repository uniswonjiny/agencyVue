
// 현금 세자리 컴마
const currency = (val) => {
  if (!val) return ''
  val = Number(val)
  return val.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
}

// 오늘 날짜 2020-01-01 형식으로 얻기
const dataType = (val, type) => {
  if (!type) type = '-'
  let year = 0
  let month
  let day = 0
  let today

  // 비정상 적인 모습으로 오면 오늘 날짜
  if (!val || val.length < 9) {
    today = new Date()
  } else {
    today = new Date(val)
  }
  year = today.getFullYear()
  month = today.getMonth() + 1
  day = today.getDate()

  if (month < 10) month = '0' + month

  return year + type + month + type + day
}

const dateTime = (val, type) => {
  if (!type) type = ':'
  if (!val || val.length !== 6) return '00' + type + '00' + type + '00'
  val = val.substring(0, 2) + type + val.substring(2, 4) + type + val.substring(4, 6)
  return val
}

export {
  currency,
  dataType,
  dateTime,
}
