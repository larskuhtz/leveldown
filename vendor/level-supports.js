'use strict'

module.exports = function supports () {
  var manifest = {}
  for (let i = 0; i < arguments.length; i++) {
    Object.assign(manifest, arguments[i])
  }

  return Object.assign(manifest, {
    // Features of abstract-leveldown
    bufferKeys: manifest.bufferKeys || false,
    snapshots: manifest.snapshots || false,
    permanence: manifest.permanence || false,
    seek: manifest.seek || false,
    clear: manifest.clear || false,

    // Features of abstract-leveldown that levelup doesn't have
    status: manifest.status || false,

    // Features of disk-based implementations
    createIfMissing: manifest.createIfMissing || false,
    errorIfExists: manifest.errorIfExists || false,

    // Features of level(up) that abstract-leveldown doesn't have yet
    deferredOpen: manifest.deferredOpen || false,
    openCallback: manifest.openCallback || false,
    promises: manifest.promises || false,
    streams: manifest.streams || false,
    encodings: manifest.encodings || false,

    // Methods that are not part of abstract-leveldown or levelup
    additionalMethods: Object.assign({}, manifest.additionalMethods)
  })
}
