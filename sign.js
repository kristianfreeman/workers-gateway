const aws4 = require('aws4')
const functions = require('./functions')

const sign = async request => {
  const accessKeyId = await WORKERS_GATEWAY.get('ACCESS_KEY_ID')
  const secretAccessKey = await WORKERS_GATEWAY.get('SECRET_ACCESS_KEY')

  const url = new URL(request.url)
  const fn = functions[url.pathname]

  const body = await request.text()
  const opts = {
    headers: fn.requestHeaders || {},
    method: 'POST',
    path: `/2015-03-31/functions/${fn.name}/invocations/`,
    service: 'lambda',
  }

  if (body) opts.body = body

  return aws4.sign(opts, { accessKeyId, secretAccessKey })
}

module.exports = sign
