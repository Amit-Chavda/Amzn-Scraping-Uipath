function() {

    let titles = "";
    let links = "";
    for (let i = 1; i < document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children.length; i++) {

        var val = checkRegex(document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[i].innerText);

        if (val) {
            var link = document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[i].getElementsByClassName("a-link-normal s-link-style a-text-normal")[0];
            if (link != undefined) {
                title = link.innerText;

                links += link + "#";
                titles += title + "=";
            }
        }
    }
    return titles + "~" + links;
}

function checkRegex(str) {
    var words = ["Delivery", "Get it by", "stock", "out of", "starts"];
    return new RegExp(words.join('|')).test(str);
}