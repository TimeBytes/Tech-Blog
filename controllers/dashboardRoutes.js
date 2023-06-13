const router = require("express").Router();
const { BlogPost } = require("../models");
const formatDate = require("../utils/helpers");

router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("dashboard", {
      title: "Dashboard",
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
