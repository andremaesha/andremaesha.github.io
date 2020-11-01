document.onreadystatechange = function(){
    const state = document.readyState;
    if (state === "interactive"){
        document.getElementById("body-content").style.visibility = "hidden";
    } else if (state === "complete"){
        setTimeout(function(){
            document.getElementById("interactive");
            document.getElementById("load").style.visibility = "hidden";
            document.getElementById("body-content").style.visibility = "visible";
        }, 1000);
    }
}