const envelope = document.getElementById("envelope");
const message = document.getElementById("message");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelope.style.display = "none";
    message.classList.remove("hidden");
  }, 900);
});
