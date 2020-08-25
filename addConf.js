/**
 * 在 client.conf 文件中追加 max-routes 10000 ，以访问公司VPN
 */
const fs = require('fs')
const os = require('os')
const chalk = require(`${os.homedir}/AppData/Roaming/npm/node_modules/chalk/source`)
const { log } = console

const path = `${os.homedir()}/AppData/Roaming/NSFOCUS/SSLVPN/conf/client.conf`
const text = '\r\nmax-routes 10000'

fs.appendFile(path, text, (err) => {
  if (err) {
    log(err)
  } else {
    log(`${chalk.green('\r\n执行成功\r\nExecute successfully!')}`)
  }
})
