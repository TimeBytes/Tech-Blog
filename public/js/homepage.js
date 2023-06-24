const addCommentBtn = document.querySelectorAll("#add-comment-btn");


addCommentBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("data-id");
    window.location.href = "/add-comment/"+id;
  });
});

