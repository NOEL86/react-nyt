var request = require("request");
var cheerio = require("cheerio");
var db = require('../client/src/Models');

//routes endpoints handlers

module.exports = {

    scrapeData: function (req, res) {

        request("https://www.nytimes.com/", function (err, response, html) {

            if (err) {

                console.log(err);
            }
            var $ = cheerio.load(html);
            var results = [];
            var id = 0;

            $("div.css-6p6lnl").each(function (i, element) {

                var title = $(element).text();
                var summary = $(element).find("p").text();
                var url = $(element).children().attr("href");
                id++;

                results = {
                    title: title,
                    url,
                    summary,
                    id
                };
                db.Headline.create(results).then(function (response) {
                    console.log(response);
                })
            });
            console.log("+++++++++++++++++++");

            res.send(response);
        });
    },

    saveScraped: function (req, res) {

        var thisId = req.params.id;

        db.Headline.findOneAndUpdate(
            {
                _id: thisId
            },
            {
                $set: {
                    saved: true
                }
            },
            {
                new: true
            },
            function (err, saved) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(saved);
                    res.send(saved);
                }
            }
        );
    },

    getSaved: function (req, res) {
        db.Headline.find({ saved: true }).then(function (response, err) {
            if (err) throw err;

            else {
                console.log(response);
                res.render("saved", {
                    articles: response
                });
            }
        })
    },
    //this is creating a Note and adding it to the headlines and note dbs
    addNote: function (req, res) {

        db.Note.create(req.body).then(function (notes) {
            var note = req.body
            return db.Headline.findOneAndUpdate({}, { $push: { comments: note._id } }, { new: true });
        })
            .then(function (Headline) {
                res.send(Headline);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    },

    remove: function (req, res) {
        db.Headline.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: {
                    saved: false
                }
            },
            {
                new: true
            },
            function (err, removed) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(removed);
                    res.send(removed);
                }
            }
        );
    }

}


//this doesn't work :(
// router.get("/notes", function (req, res) {
//     db.Headline.find({})
//         .populate("comments")
//         .then(function (notes) {
//             console.log(notes);
//             res.send(notes);

//         })
//         .catch(function (err) {
//             // If an error occurs, send it back to the client
//             res.json(err);
//         });
// })

// module.exports = router;