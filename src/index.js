/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: er-console
 * @Dependence: --
 * @Description: --
 * @CreatedBy: www.dunizb.com
 * @CreateDate: 2018/12/29 15:00
 * @LastModifiedBy: www.dunizb.com
 * @LastModifiedDate: 2018/12/29 15:00
 *
 * --------------------------------------------------------------------------- *
 */

const consoleConfig = {
  staff: '%c终于等到你 \n',
  dayOne: '万物之中，希望至美，新婚快乐',
  funExp: '🚗 🚕 🚙 🚌 🚓 🚛  🚚 🚐 超级驾校，让招生创收更简单',
  Market: '欢迎访问 https://www.dunizb.com',
  bgimg: require('./avatar.gif')
}
const consoleInfo = (function (consoleConfig) {
  console.log('%c' + '' + '\n%c    ', 'color: #6190e8;', `background: url(${consoleConfig.bgimg}) no-repeat left center;font-size: 100px;`, '\n')
  console.log(consoleConfig.staff, 'color: #6190e8;')
  if (consoleConfig.funExp !== '') {
    console.log('%c' + consoleConfig.funExp, 'color: #6190e8;', '\n')
  }
  if (consoleConfig.Market !== '') {
    console.log('%c' + consoleConfig.Market + '\n%c    ', 'color: #6190e8;', '\n')
  }
  if (consoleConfig.dayOne !== '') {
    console.log('%c' + consoleConfig.dayOne, 'color: #6190e8', '\n\n')
  }
}(consoleConfig))

console.log(consoleInfo)
