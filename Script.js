const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifes");
const markAll = document.getElementById("mark-all");
unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", (event) => {
    message.classList.remove("unread");
    updateUnreadCount();
  });
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
