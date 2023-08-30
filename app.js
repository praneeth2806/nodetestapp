const express=require('express')
const CryptoJS = require("crypto-js");

const app=express()
app.use(express.json())
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Server listening on PORT",PORT)
})

app.get("/status",(request,response)=>{
    response.setHeader('Content-Type',"application/json")
  var x={
    token:createToken(),
    clientId:"108" }

    response.send(JSON.stringify(x))
})
function createToken(){

    var token="1234567890"+"|"+ "test@gmail.com"+"|"+"qawsedrftgyhujikolp"+"|";
    let encryptedToken=CryptoJS.AES.encrypt(token,
        CryptoJS.enc.Base64.parse("qJkAp2AyAGSO8M59xcrm3VxtQiBDPVB/bTMZeCKVlc8="),
        {
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7,
            iv:CryptoJS.enc.Base64.parse("T0iPmNI7v+XCi7tSy8npYA==")

        }).toString()
        return base64_url_encode(encryptedToken)
}
function base64_url_encode(input){
    var urlEncoded=input
    .replace(/\+/g,"-")
    .replace(/\//g,"_")
    .replace(/=+$/,",")
    return urlEncoded;
}