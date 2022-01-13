function(event, prevData) {


    const obj = JSON.parse(prevData);
    var title = document.getElementById("productTitle").innerText;
    var price = document.getElementsByClassName("a-price-whole")[1].innerText;
    var ratings = document.getElementsByClassName("averageStarRating")[0].innerText;
    var images = "";

    for (let x = 0; x < ; x++) {
        images += document.getElementById("main-image-container").querySelectorAll("ul li img")[x].src;
    }

    obj.push({ "Title": title, "Price": price, "Ratings": ratings, "Images": images });

    return JSON.stringify(obj);
}