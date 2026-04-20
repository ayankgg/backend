const {nanoid}=require("nanoid");
const { url: urlModel } = require("../Models/urlmodel");

async function generateShortUrl(req,res){
    const { url: actUrl } = req.body;
    if(!actUrl)return res.status(400).json({error:"Url is required"});
    const shortId=nanoid(7);
    await urlModel.create({ shorturl: shortId, actualurl: actUrl });
    res.json({ shortId });
}

async function redirectToUrl(req, res) {
    const { shortId } = req.params;
    const entry = await urlModel.findOne({ shorturl: shortId });
    if (!entry) return res.status(404).json({ error: "URL not found" });
    res.redirect(entry.actualurl);
}

module.exports={generateShortUrl, redirectToUrl};