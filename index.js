'use strict';

// Rules
// 1. For Encrypt/Decrypt - Encrypt message/data with Others Public key. 
//                          But only holder/owner/receiver of that Public key can decrypt message/data using Private key.
// 2. For Sign/Verify - Sign message/data with Your Private key.
//                      For Verification Others will use Your Public key to validate whether message/data tampered/changed or not.

// Documentation - 
//  Public Key Cryptography Wiki - https://en.wikipedia.org/wiki/Public-key_cryptography
//  RSA Wiki - https://en.wikipedia.org/wiki/RSA_(cryptosystem)
//  Node RSA Module - https://www.npmjs.com/package/node-rsa
//  Node RSA Module Advanced Options - https://github.com/rzcoder/node-rsa/wiki/Advanced-options

// Required modules
const NodeRSA = require('node-rsa');

class RSA {
    
    // keyData - This will be PEM string data
    // options - Please read "node-rsa" Documentation
    // format - Please read "node-rsa" Documentation    
    
    // Initiate Node RSA
    constructor(keyData, options = {}, format = '') {
        this.rsaKeyObj = new NodeRSA(keyData, options, format);
    }

    // Set extra options for Node RSA
    // Optional
    setOptions(options = {}) {
        this.rsaKeyObj.setOptions(options);
    }

    // Recommendations for Encrypt -
    // 1. Encrypt message/data with Others Public key
    // 2. Limit message/data to 245 bytes for 2048-bit RSA key
    //    Limit on Message/Data totally depends on RSA key
    //    For more read Documentation
    // 3. As per Node RSA documentaion it "Supports long messages for encrypt/decrypt"
    encrypt(data, outputEncoding = 'base64', sourceEncoding = 'utf8') {
        try {
            return this.rsaKeyObj.encrypt(data, outputEncoding, sourceEncoding);
        }
        catch(error) {
            throw error;
        }
    }

    // Recommendations for Decrypt -
    // 1. Decrypt message/data with holder/owner/receiver of Private key
    // 2. Output will be buffer/json depending on output encoding.
    //    For getting into plain text, convert result to string            
    decrypt(data, outputEncoding = 'buffer') {
        try {
            return this.rsaKeyObj.decrypt(data, outputEncoding);
        }
        catch(error) {
            throw error;
        }
    }

    // Recommendations for Sign -
    // 1. Sign message/data with Your Private key
    sign(data, outputEncoding = 'base64', sourceEncoding = 'utf8') {
        try {
            return this.rsaKeyObj.sign(data, outputEncoding, sourceEncoding);
        }
        catch(error) {
            throw error;
        }
    }

    // Recommendations for Verify -
    // 1. For Verification use Others Public key
    verify(data, signature, sourceEncoding = 'utf8', signatureEncoding = 'base64') {
        try {
            return this.rsaKeyObj.verify(data, signature, sourceEncoding, signatureEncoding);
        }
        catch(error) {
            throw error;
        }
    }
}

module.exports = RSA;