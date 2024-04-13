var unread = document.querySelectorAll('.unread');
var markAllButton = document.querySelector("button");
var unreadMessageCount = document.querySelector(".unread-messages-count");
markAllButton.addEventListener("click", function () {
    unread.forEach(function (message) { return message.classList.remove("unread"); });
    unreadMessageCount.innerText = "0";
});
