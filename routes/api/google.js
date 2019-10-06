const axios = require("axios");
const router = require("express").Router();

router.get("/items", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.get("/title/:id", (req, res) => { 
  console.log(req.params)
  axios
  .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.id )
  .then( results => {console.log(results.data); res.json(results.data.items)})
  .catch(err => res.status(422).json(err));
})

module.exports = router;