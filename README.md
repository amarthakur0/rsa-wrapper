# RSA - Public Key Cryptography

This module will be used for Encrypt/Decrypt or Signing/Verify.

Some basics about Public Key Cryptography - 

* **Public key encryption** - in which a message is encrypted with a recipient's public key. The message cannot be decrypted by anyone who does not possess the matching private key, who is thus presumed to be the owner of that key and the person associated with the public key. This is used in an attempt to ensure confidentiality.
* **Digital signatures** - in which a message is signed with the sender's private key and can be verified by anyone who has access to the sender's public key. This verification proves that the sender had access to the private key, and therefore is likely to be the person associated with the public key. This also ensures that the message has not been tampered with, as a signature is mathematically bound to the message it originally was made with, and verification will fail for practically any other message, no matter how similar to the original message.

## Documentation - 
* Public Key Cryptography Wiki - https://en.wikipedia.org/wiki/Public-key_cryptography
* RSA Wiki - https://en.wikipedia.org/wiki/RSA_(cryptosystem)
* Node RSA Module - https://www.npmjs.com/package/node-rsa
* Node RSA Module Advanced Options - https://github.com/rzcoder/node-rsa/wiki/Advanced-options

## Generate Keys -
**Generate 2048 bit RSA Private Key** - 
```
openssl genrsa -des3 -out private.pem 2048
```
**Generate RSA Public Key** - 
```
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```

## 1. Encrypt - 

This function will Encrypt data by using provided Public Key.
Public key data will be passed to Class Constructor.

Input Parameters -
* data - Compulsory. This will be your data/message that needs to be encrypted.
* outputEncoding - Optional. Output result will be encoded in this format. Default set to "base64".
* sourceEncoding - Optional. Specify source/data/message encoding format. Default set to "utf8".

**Function Call** - 
```
try {
    const data = "Testing RSA Public Key Cryptography";
    const rsaObj = new RSA(publicKey);
    const result = rsaObj.encrypt(data);
    console.log(result);
}
catch(error) {}
```

**Output** - 
```
xNgvSaM1we/HPmlrDxIvBH3wmkObWYTkqNat4pZ9sLSIQemJ83DrSBZ38cVDyE4dU5KtaZMLxgTm/tI7k9c8/E/OaJ3L92zZVKz17V7Zd2KnyrjfU+DC8CGDeo3MsjsHrD/DmDPMZYMQNvDkKwj/h0YYCTFk5GSRSFGQ3P80pK0pUjNxopCr+OuSZd62XDKPbiVv9IgH24Bqb7yZnILRvexPsxITe3zRl6FvvCbGXs8ycJACKX1yGmj/naAGH6z7HMVkL6I4K6Wrjq5AK8duBUPOVurnafq9KFj53K+vkkbzWhq9SpJw/pNFxYSUXicHMLpixJZgFbuIKdlPmHU74A==
```

## 2. Decrypt - 

This function will Decrypt data by using provided Private Key.
Private key data will be passed to Class Constructor.

Input Parameters -
* data - Compulsory. This will be your data/message that needs to be decrypted.
* outputEncoding - Optional. Output result will be encoded in this format. Default set to "buffer".

**Function Call** - 
```
try {
    const encryptResult = `xNgvSaM1we/HPmlrDxIvBH3wmkObWYTkqNat4pZ9sLSIQemJ83DrSBZ38cVDyE4dU5KtaZMLxgTm/tI7k9c8/E/OaJ3L92zZVKz17V7Zd2KnyrjfU+DC8CGDeo3MsjsHrD/DmDPMZYMQNvDkKwj/h0YYCTFk5GSRSFGQ3P80pK0pUjNxopCr+OuSZd62XDKPbiVv9IgH24Bqb7yZnILRvexPsxITe3zRl6FvvCbGXs8ycJACKX1yGmj/naAGH6z7HMVkL6I4K6Wrjq5AK8duBUPOVurnafq9KFj53K+vkkbzWhq9SpJw/pNFxYSUXicHMLpixJZgFbuIKdlPmHU74A==`;
    const rsaObj = new RSA(privateKey);
    const result = rsaObj.decrypt(encryptResult); // This will be buffer
    console.log(result.toString()); // Convert to string & print
}
catch(error) {}
```

**Output** - 
```
Testing RSA Public Key Cryptography
```

## 3. Sign - 

This function will Sign data by using provided Private Key.
Private key data will be passed to Class Constructor.

Input Parameters -
* data - Compulsory. This will be your data/message that needs to be Signed.
* outputEncoding - Optional. Output result will be encoded in this format. Default set to "base64".
* sourceEncoding - Optional. Specify source/data/message encoding format. Default set to "utf8".

**Function Call** - 
```
try {
    const data = "Testing RSA Public Key Cryptography";
    const rsaObj = new RSA(privateKey);
    const result = rsaObj.sign(data, 'base64');
    console.log(result);
}
catch(error) {}
```

**Output** - 
```
VNEJSWVwT3YO9Bd9zvEn+3yCGiYIkhGFy408odvd1+pZUDfDaDVq0brIAgUKRbXyb6f0B1wGqKnAJ0tfmFeGkk0gmPwiFKOknU020tp0hik8deYdtIGefNxfyCrMEuHfn+1xlxNJrJWGxJ7QwaN7MOhu1+E8WciAPRS8jcZ/ACIit+goeL7xXcXTNNpC1rgl5cTNuYXeqyt4ObsT9ZWobNZZhltSY4GpsAJx0wLRoiJeGYK1mLhmDOJcBgMBs/amLqmgmm+qZRP/yqGf5dRs2ovtA5mXHcHtjxknD10zWds/yqyMXdUqT+8SOYoZu721/UjbcaCEdQ5/Rjk8AxQFjg==
```

## 4. Verify - 

This function will Verfiy Signed data by using provided Public Key.
Public key data will be passed to Class Constructor.

Input Parameters -
* data - Compulsory. This will be your data/message that needs to be Verfied.
* signature - Compulsory. This will be data/message Signature.
* sourceEncoding - Optional. Specify source/data/message encoding format. Default set to "utf8".
* signatureEncoding - Optional. This is Signature encoding format. Default set to "base64".

**Function Call** - 
```
try {
    const signature = `VNEJSWVwT3YO9Bd9zvEn+3yCGiYIkhGFy408odvd1+pZUDfDaDVq0brIAgUKRbXyb6f0B1wGqKnAJ0tfmFeGkk0gmPwiFKOknU020tp0hik8deYdtIGefNxfyCrMEuHfn+1xlxNJrJWGxJ7QwaN7MOhu1+E8WciAPRS8jcZ/ACIit+goeL7xXcXTNNpC1rgl5cTNuYXeqyt4ObsT9ZWobNZZhltSY4GpsAJx0wLRoiJeGYK1mLhmDOJcBgMBs/amLqmgmm+qZRP/yqGf5dRs2ovtA5mXHcHtjxknD10zWds/yqyMXdUqT+8SOYoZu721/UjbcaCEdQ5/Rjk8AxQFjg==` ;
    const rsaObj = new RSA(publicKey);
    const result = rsaObj.verify(data, signature, 'utf8', 'base64');
    console.log(result);
}
catch(error) {}
```

**Output** - 
```
true
```