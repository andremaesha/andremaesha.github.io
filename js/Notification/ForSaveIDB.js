const save = document.getElementById("save");

save.addEventListener("click", (_) => {
    showNotification();
});

function showNotification(){
    const title = "Save Team Favorite";
    const options = {
        "body": "Berhasil Save Team favorite",
        "icon": "/images/icon/144.png",
        vibrate: [100, 50, 100]
    };
    if (Notification.permission === "granted"){
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, options);
        });
    } else {
        console.error("Fitur Notification tidak di izinkan");
    }
}