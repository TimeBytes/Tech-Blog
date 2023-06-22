const router = require("express").Router();
const { BlogPost, User} = require("../models");
const formatDate = require("../utils/helpers");

// GET all blogposts for homepage
router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      title: "The Tech Blog",
      logged_in: req.session.logged_in,
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({});
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("dashboard", {
      title: "Dashboard",
      logged_in: req.session.logged_in,
      blogposts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create-post", async (req, res) => {
  try {
    res.render("create-post", {
      title: "Dashboard",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit-post/:id", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id);
    const blogpost = blogpostData.get({ plain: true });
    res.render("edit-post", {
      title: "Edit Post",
      logged_in: req.session.logged_in,
      blogpost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", {
      title: "Login",
  });
  } catch (err) {
    res.status(500).json(err);

  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      title: "Signup",
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
