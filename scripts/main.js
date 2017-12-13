let itemArr = ["Red", "Blue", "Yellow", "Green"];

let init = () => {
    let t = [];
    for (let i = 0; i < itemArr.length; i++) {
        t.push("<li style='border-color:" + itemArr[i] + "'>" + itemArr[i] + "</li>");
    }
    $(".source").append("<ul>" + t.join("") + "</ul>");
}
$(document).ready(init);