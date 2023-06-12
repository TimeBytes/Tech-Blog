const router = require("express").Router();
const blogpostRoutes = require("./blogpost");
const commentRoutes = require("./comment");
const userRoutes = require("./user");

router.use("/blogpost", blogpostRoutes);
router.use("/comment", commentRoutes);
router.use("/login", userRoutes);

module.exports = router;
