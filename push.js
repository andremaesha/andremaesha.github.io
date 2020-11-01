var  webPush = require("web-push");

const vapidKeys = {
    "publicKey": "BPJct0teXwVEVAFE1mrXSjH3ZckuF00mHmkr3UuyS5O4X3fpoRNn_zRekmc8f3TRNPWsKyvXg2LxOD1hugopAiI",
    "privateKey": "ecOta0NhNcXgFxFpDFSH5ZhdKSoiGeKki9cdxBMjmoU"
};

webPush.setVapidDetails(
    "email: andremaesha@gmail.com",
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fyg5Rvy_AYs:APA91bH3HdarQZp0ciFZlMqPoDbpdzePAcdWKEtMrlNVBqDRbfwNF6dbqhT6m3JrqQeyJnKRZ6C5QC5H2cfZgxF3i9UtNjerc1BS_F-v0fMbx0tNkfpi1r7cDinbC2IM62-Yn1H8yAiy",
    "keys": {
        "p256dh": "BGOdXfvag8dY5Hu4I1RZ3Ni8YTyXa1wSF4DuAcOZYTPhnVa8xJffzgGGXC/qtsRd5L4bdL5FZrh5uq8H8b5Y2ok=",
        "auth": "/mhtn/e7ZjkT5J9z1c+VvA=="
    }
};

const payLoad = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

const options = {
    gcmAPIKey: "975069014418",
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payLoad,
    options
);