

  // This function will change the status of the message to read
  function markAsRead(notificationElement) {
    const unreadIcon = notificationElement.querySelector(".un-read-icon");
    if (unreadIcon) {
      unreadIcon.style.display = "none";
      notificationElement.style.backgroundColor = "#FFF";
    }
  }

  // This function will count the number of unread messages
  function countUnreadNotifications() {
    const notifications = document.querySelectorAll(".accounts > div");
    let unreadMessages = 0;
    notifications.forEach((notification) => {
      const unreadIcon = notification.querySelector(".un-read-icon");
      if (unreadIcon) {
        unreadMessages++;
      }
    });
    return unreadMessages;
  }

  //Handle event when notifications are clicked
  document.addEventListener("DOMContentLoaded", function () {
    const notifications = document.querySelectorAll(".accounts > div");
    const notificationCount = document.querySelector(".number .count");
    let unreadMessages = countUnreadNotifications(); // Initial number of unread notifications
    notificationCount.textContent = unreadMessages;

    // Set click event for each notification
    notifications.forEach((notification) => {
      notification.addEventListener("click", function () {
        markAsRead(notification);
        unreadMessages--;
        // Update the number of unread notifications
        notificationCount.textContent = unreadMessages;
      });
    });
  });