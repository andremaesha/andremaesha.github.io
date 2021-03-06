if ("serviceWorker" in navigator){
    window.addEventListener("load", (_) => {
        navigator.serviceWorker.register("/SW.js")
            .then(function(){
                console.log("Register serviceWorker is Success");
            }).catch(function(){
                console.log("Register ServiceWorker is failed");
            });
    });
} else {
    console.log("Your Browser not support ServiceWorker");
}

//==================================================================================================================
// for push notif

//function untuk mengubah string manjadi Uint8array
const urlbase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Fitur Notification
const RequestNotification = (_) => {
    Notification.requestPermission().then(result => {
        if (result === "denied"){
            console.error("Fitur Notification tidak di izinkan");
            return;
        } else if (result === "default"){
            console.error("User Closed kotak dialog permintaan izin");
            return;
        }
        if ("PushManager" in window){
            navigator.serviceWorker.ready.then(reg => {
                reg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlbase64ToUint8Array("BPJct0teXwVEVAFE1mrXSjH3ZckuF00mHmkr3UuyS5O4X3fpoRNn_zRekmc8f3TRNPWsKyvXg2LxOD1hugopAiI"),
                }).then(subscribe => {
                    console.log("Berhasil Melakukan subscribe dengan endPoint: ", subscribe.endpoint);
                    console.log("Berhasil Melakukan subscribe dengan p256dh key: ", btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh')))));
                    console.log("Berhasil melakukan subscribe dengan auth key: ", btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey("auth")))));
                }).catch(e => {
                    console.error("Tidak Dapat melakukan subscribe: ", e.message);
                })
            })
        }
    });
}

if (!("Notification" in window)){
    console.error("Your browser Not support Fitur Notification");
} else {
    RequestNotification();
}