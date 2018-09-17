const router = require("express").Router();
const scraper_controller = require("../controllers/scraper_controller");

router.route("/results")

    .post(scraper_controller.scrapeData);

router.route("/results/:id")
    .post(scraper_controller.saveScraped);

router.route("/saved")
    .get(scraper_controller.getSaved);

router.route("/saved/note")
    .post(scraper_controller.addNote);

router.route("/delete/:id")
    .post(scraper_controller.remove);


module.exports = router;