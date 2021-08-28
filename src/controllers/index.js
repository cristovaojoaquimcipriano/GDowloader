const videoDownloader = {};
const { log } = require("console");
const fs = require("fs");
const ytdl = require("ytdl-core");

videoDownloader.pageRender = (req, res) => {
  res.render("index");
};

videoDownloader.simpleUrl = async (req, res) => {
  const { url } = req.body;
  // const info = await ytdl.getInfo(url);
  // const { title, thumbnails } = info.videoDetails;
  // const videoInfo = {
  //   title,
  //   image: thumbnails[0].url,
  // };
  // res.render("details", { videoInfo: videoInfo });
  ytdl(url)
    .pipe(fs.createWriteStream(`${process.cwd()}/video.mp4`))
    .on("finish", () => {
      console.log("Baixado Com sucesso!");
    })
    .on("ready", () => {
      console.log("Carregando...");
    });
};

module.exports = videoDownloader;
