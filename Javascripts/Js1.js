function() {
    let len = document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children.length - 5

    let title = "";
    let link = "";
    for (let x = 1; x <= len; x++) {
        let isAd = document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[x].children[0].children[0].children[0].children[0].innerText.includes("Sponsored")


        if (isAd) {
            let val = document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[10].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[1];
            if (val != undefined) {
                title = +document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[x].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[1].innerText + "*";
                link = +document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[x].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[2].children[0].children[0].children[0].children[1].children[0].children[0].children[0].innerText + "*";
            }
        } else {
            title = +document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[1].innerText + "*";
            link = +document.getElementsByClassName("s-main-slot s-result-list s-search-results sg-row")[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[1].children[0].href + "*";
        }
    }
    return title + "=" + link;
}