if ("serviceWorker" in navigator){
    window.addEventListener("load", (_) => {
        navigator.serviceWorker.register("/SW.js")
            .then((_) => {
                console.log("Register ServiceWorker is success");
            })
            .catch((_) => {
                console.error("Register ServiceWorker is failed");
            });
    });
} else {
    console.error("Your Browser not support ServiceWorker");
}

document.addEventListener("DOMContentLoaded", function(){
    PlayersById();
});