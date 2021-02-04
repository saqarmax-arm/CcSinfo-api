const path = require('path')

const CHAIN = Symbol('CcS.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.CcSinfo.lib.Chain.get(this.config.CcS.chain)
    return this[CHAIN]
  },
  get CcSinfo() {
    return {
      lib: require(path.resolve(this.config.CcSinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.CcSinfo.path, 'rpc'))
    }
  }
}
