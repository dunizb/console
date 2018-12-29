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

const count = parseInt(Math.random() * 28, 10) + 1;

const consoleConfig = {
  staff: '%c终于等到你 \n',
  dayOne: '万物之中，希望至美，新婚快乐',
  funExp: '当你看到这条信息，代表着，你的项目已经发生恶意代码注入，请使用360之类的安全工具进行扫描修复！！！',
  Market: '欢迎访问 https://www.dunizb.com',
  bgimg: 'https://ws1.sinaimg.cn/large/683aa04fly1fynnu7dsgyg205k05k0ve.gif'
  // bgimg: './avatar.gif'
}
const consoleInfo = (function (consoleConfig) {
  if (consoleConfig.funExp !== '') {
    if (count > 20) {
      console.log('%c' + consoleConfig.funExp, 'color: red;', '\n')
    }
  }
  if (count > 20) {
    console.log('%c' + '' + '\n%c    ', 'color:blue;', `background: url(${consoleConfig.bgimg}) no-repeat left center;font-size: 100px;`, '\n')
    console.log(consoleConfig.staff, 'color: #6190e8;')
  }
  if (consoleConfig.Market !== '') {
    if (count > 20) {
      console.log('%c' + consoleConfig.Market + '\n%c    ', 'color: #6190e8;', '\n')
    }
  }
  if (consoleConfig.dayOne !== '') {
    if (count > 20) {
      console.log('%c' + consoleConfig.dayOne, 'color: #6190e8', '\n\n')
    }
  }
}(consoleConfig))

if (count < 20) {
  console.warn('🔞')
}

