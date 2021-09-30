const path = require('path')
const minimist = require('minimist')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const cwd = process.cwd()
const spawn = require('child_process').spawn

const rawArgv = process.argv.slice(2)
const argv = minimist(rawArgv)
const mode = argv.mode

const basePath = path.resolve(cwd, `.env${mode ? `.${mode}` : ``}`)
const localPath = `${basePath}.local`
const loadEnv = envPath => {
  try {
    const env = dotenv.config({ path: envPath })
    dotenvExpand(env)
  } catch (err) {}
}

loadEnv(basePath)
loadEnv(localPath)

const ls = spawn('webpack', [
  'serve',
  '--color'
], {
  stdio: 'inherit', // 保持控制台输出颜色
  cwd: process.cwd()
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
})