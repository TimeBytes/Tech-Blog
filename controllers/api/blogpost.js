const router = require("express").Router();

const { BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  console.log(req.session.user_id);
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateBlogPost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
