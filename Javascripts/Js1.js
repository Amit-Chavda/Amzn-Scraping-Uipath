function(event, prevData) {

    const obj = JSON.parse(prevData);

    for (let i = 1; i < document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children.length; i++) {

        var val = checkRegex(document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[i].innerText);

        if (val) {
            var link = document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[i].getElementsByClassName("a-link-normal s-link-style a-text-normal")[0];
            if (link != undefined) {
                title = link.innerText;

                obj.push({ "Description": title, "Link": link + "" });
            }
        }
    }

    return JSON.stringify(obj); //titles + "~" + links;
}

// function clickBtn() {
//     document.getElementsByClassName("celwidget slot=MAIN template=PAGINATION widgetId=pagination-button")[0].children[0].querySelectorAll("li")[document.getElementsByClassName("celwidget slot=MAIN template=PAGINATION widgetId=pagination-button")[0].children[0].querySelectorAll("li").length - 1].children[0].click();
// }

// function getTotalPage() {
//     var len = document.getElementsByClassName("celwidget slot=MAIN template=PAGINATION widgetId=pagination-button")[0].children[0].querySelectorAll("li")[document.getElementsByClassName("celwidget slot=MAIN template=PAGINATION widgetId=pagination-button")[0].children[0].querySelectorAll("li").length - 2].innerText;
//     return len;
// }

function checkRegex(str) {
    var words = ["Delivery", "Get it by", "stock", "out of", "starts"];
    return new RegExp(words.join('|')).test(str);
}