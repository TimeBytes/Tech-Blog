const createPostBtn = document.getElementById("create-post-btn");
const submitNewPostBtn = document.getElementById("submit-new-post-btn");

createPostBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/dashboard/create";
});

submitNewPostBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/api/blogpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("create-title").value,
      content: document.getElementById("create-content").value,
    }),
  }).then((response) => {
    if (response.status === 200) {
      window.location.href = "/dashboard";
    } else {
      alert("Failed to create post");
    }
  });
});
