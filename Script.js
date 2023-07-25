const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifes");
const markAll = document.getElementById("mark_all");
unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", (event) => {
    message.classList.remove("unread");
    updateUnreadCount();
  });
});

document.addEventListener("click", (event) => {
  const selectedElement = document.querySelector(".selected");
  if (selectedElement && !selectedElement.contains(event.target)) {
    selectedElement.classList.remove("selected");
  }
});

markAll.addEventListener("click", () => {
  unreadMessages.forEach((message) => {
    message.classList.remove("unread");
  });
  updateUnreadCount();
});

function updateUnreadCount() {
  const newUnreadMessages = document.querySelectorAll(".unread");
  unread.innerText = newUnreadMessages.length;
}
