const router = require("express").Router();
const { BlogPost } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("dashboard", {
      title: "Dashboard",
      logged_in: req.session.logged_in,
      view: true,
      create: false,
      edit: false,
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  try {
    res.render("dashboard", {
      title: "Dashboard",
      logged_in: req.session.logged_in,
      view: false,
      create: true,
      edit: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
