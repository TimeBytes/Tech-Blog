const router = require("express").Router();
const { BlogPost } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      title: "The Tech Blog",
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
