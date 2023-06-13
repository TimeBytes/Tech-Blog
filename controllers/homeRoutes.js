const router = require("express").Router();
const { BlogPost } = require("../models");
const formatDate = require("../utils/helpers");
router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    // blogposts.forEach((blogpost) => {
    //   blogpost.createdAt = formatDate(blogpost.createdAt);
    // });

    res.render("homepage", {
      title: "The Tech Blog",
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
