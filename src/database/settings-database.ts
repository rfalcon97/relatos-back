const NodeRSA = require('node-rsa');

export function  desencriptarRSAIslas29(buffer) {
    const keyD = new NodeRSA(
      '-----BEGIN RSA PRIVATE KEY-----\n' +
    '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\n' +
    '-----END RSA PRIVATE KEY-----')
    return keyD.decrypt(buffer, 'utf8')
  }
  