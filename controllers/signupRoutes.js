const router = require("express").Router();
const { User } = require(".././models");

router.get("/", async (req, res) => {
  try {
    res.render("signup", { title: "Signup" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // res.status(200).json(userData);
      res.redirect("/dashboard");
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
