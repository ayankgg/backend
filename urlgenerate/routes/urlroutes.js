const express=require("express");
const {generateShortUrl, redirectToUrl}=require('../controller/urlcontroller')

const router=express.Router()
router.post('/url',generateShortUrl);
router.get('/:shortId', redirectToUrl);
module.exports=router;

