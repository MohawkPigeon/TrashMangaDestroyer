if(document.cookie.split(";").some((item) => item.trim().startsWith("rating="))){

    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("rating="))
    ?.split("=")[1];

    const mangas = document.querySelectorAll('div.content-genres-item');
    for(inc=0; inc<mangas.length; inc++){
    if(mangas.item(inc).childNodes.item(1).lastChild.previousSibling.firstChild.nodeValue < cookieValue){
        mangas.item(inc).remove();
    }
    }
}
else{
var minRating = prompt("Enter minimum rating:","");
if (minRating != null){
    document.cookie = "rating=" + minRating + "; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    alert("Your minimum rating was saved!")
}
}
