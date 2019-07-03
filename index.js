const functions = require('./functions')
const sign = require('./sign')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const handleRequest = async request => {
  try {
    const url = new URL(request.url)
    const { responseHeaders: fnHeaders, method } = functions[url.pathname]

    if (method != request.method) {
      return new Response('Method Not Allowed', { status: 405 })
    }

    const signed = await sign(request)
    const { body, headers, hostname, path } = signed

    const opts = {
      headers,
      method: 'POST',
    }
    if (body) opts.body = body

    const response = await fetch('https://' + hostname + path, opts)

    return new Response(response.body, { ...response, headers: fnHeaders })
  } catch (err) {
    return new Response(err)
  }
}
