const unread = document.querySelectorAll<HTMLElement>('.unread')!;
const markAllButton = document.querySelector<HTMLButtonElement>("button")!;
const unreadMessageCount = document.querySelector<HTMLSpanElement>(".unread-messages-count")!;

markAllButton.addEventListener("click", ()=> {
    unread.forEach(message => message.classList.remove("unread"));
    unreadMessageCount.innerText = "0";
})