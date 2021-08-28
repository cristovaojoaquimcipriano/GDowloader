const router = require("express").Router();
const { pageRender, simpleUrl } = require("../controllers");

router.get("/", pageRender);
router.post("/simpleUrl", simpleUrl);

module.exports = router;
