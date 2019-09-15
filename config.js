const dev = {
  HOSTPORT: 3000
}

const prod = {
  HOSTPORT: 4000
}

module.exports = process.env.NODE_ENV === 'development' ? dev : prod
