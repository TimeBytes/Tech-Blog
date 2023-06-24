const deleteBtn = document.querySelectorAll("#delete-post-btn");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("data-id");
    fetch("/api/blogpost/delete/" + id, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "/dashboard";
      } else {
        alert("Failed to delete post");
      }
    });
  });
});
