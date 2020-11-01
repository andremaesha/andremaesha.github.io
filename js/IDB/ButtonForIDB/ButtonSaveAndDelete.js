document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isFromSaved = urlParams.get("saved");
    const btnSave = document.getElementById("save");
    const btnDelete = document.getElementById("delete");
    const identyTeam = new URLSearchParams(window.location.search).get("id");
    const item = getTeamsById();

    if (isFromSaved){
        btnSave.style.display = "none";
        //getSavedFav();
    } else {
        btnDelete.style.display = "none";
        item;
    }

    btnSave.addEventListener("click", () => {
        alert("save");

        item.then(team => {
            saveForLater(team);
        });
    })

    btnDelete.addEventListener("click", (_) => {
        alert("delete");
        DeleteTeam(parseInt(identyTeam));
    })
});