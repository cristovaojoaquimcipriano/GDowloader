const router = require("express").Router();
const { pageRender, simpleUrl, download } = require("../controllers");

router.get("/", pageRender);
router.post("/simpleUrl", simpleUrl);
router.post("/download", download);

module.exports = router;
