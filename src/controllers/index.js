const videoDownloader = {};
const { log } = require("console");
const fs = require("fs");
const ytdl = require("ytdl-core");

let videoInfo = undefined;
let status = undefined;

videoDownloader.pageRender = (req, res) => {
  res.render("index", { videoInfo: videoInfo, status: status });
};

videoDownloader.simpleUrl = async (req, res) => {
  const { url } = req.body;
  const info = await ytdl.getInfo(url);
  const { title, thumbnails } = info.videoDetails;
  videoInfo = {
    url: url,
    title,
    image: thumbnails[0].url,
  };
  res.redirect("/");
};

videoDownloader.download = async (req, res) => {
  ytdl(videoInfo.url)
    .pipe(fs.createWriteStream(`${process.cwd()}/video.mp4`))
    .on("finish", () => {
      status = "Download Finish";
    })
    .on("ready", () => {
      status = "Loading";
    });
  res.redirect("/");
};

module.exports = videoDownloader;
