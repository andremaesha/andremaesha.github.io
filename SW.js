const CACHE_NAME = "submission-kedua-v1";
const urlsToCache = [
    "/",
    //========================
    "/index.html",
    "/nav.html",
    "/pages/home.html",
    "/pages/events.html",
    "/pages/teams.html",
    "/pages/detailTeam.html",
    "/pages/ListAllPlayers.html",
    "/pages/saved.html",

    //========================

    "/css/materialize.min.css",
    "/css/iconLoad.css",

    //========================

    "/js/materialize.min.js",
    "/js/nav.js",
    "/js/RegisterSW/RegisterSW.js",
    "/js/API.js",
    "/js/RegisterSW/RegisterSWDetailTeam.js",
    "/js/RegisterSW/RegisterSWEvents.js",
    "/js/RegisterSW/RegisterSWPlayersList.js",
    "/js/iconLoad/iconLoad-DetailTeam.js",
    "/js/iconLoad/iconLoad-index.js",
    "/js/iconLoad/iconLoad-ListAllPlayers.js",
    "/js/IDB/ButtonForIDB/ButtonSaveAndDelete.js",
    "/js/IDB/DataBase.js",
    "/js/IDB/idb.js",

    
    "/js/Notification/ForSaveIDB.js",

    //========================

    "/images/icon/72.png",
    "/images/icon/96.png",
    "/images/icon/128.png",
    "/images/icon/144.png",
    "/images/icon/192.png",
    "/images/icon/256.png",
    "/images/icon/384.png",
    "/images/icon/512.png",

    "/images/dicoding.jpg",
    "/images/icon-load.gif",


    //=======================
    "/manifest.json",
    "/notificationAPI.json",

    //=======================
    //"https://fonts.googleapis.com/icon?family=Material+Icons" 
];

self.addEventListener("install", event => {
    console.log("ServiceWorker: Menginstall");

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("ServiceWorker: Membuka Cahce");

            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(event){
    const base_url = "https://api.football-data.org/";
    const online = self.navigator.onLine;

    if (event.request.url.indexOf(base_url) > -1 && online){
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return fetch(event.request).then(response => {
                    cache.put(event.request.url, response.clone());
                    
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request, {ignoreSearch: true}).then(response => {
                return response || fetch(event.request);
            })
        )
    }
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME){
                        console.log(`ServiceWorker: cache ${cacheName} Dihapus`);
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})

self.addEventListener("push", event => {
    let body;
    if (event.data){
        body = event.data.text();
    } else {
        body = "Push message no payload";
    }

    const options = {
        body: body,
        vibrate: [100, 50, 100],
    };
    event.waitUntil(
        self.registration.showNotification("Push Notification", options)
    )
})