if ("serviceWorker" in navigator){
    window.addEventListener("load", (_) => {
        navigator.serviceWorker.register("/SW.js")
            .then((_) => {
                console.log("serviceWorker Kelasemen is success");
            })
            .catch((_) => {
                console.error("serviceWorker kelasemen is failed");
            });
    });
} else {
    console.log("Your Browser not support ServiceWorker");
}

document.addEventListener("DOMContentLoaded", function(){
    getKelasemen();
})