let itemArr = ["Red", "Blue", "Yellow", "Green"];

let init = () => {
    let t = [];
    for (let i = 0; i < itemArr.length; i++) {
        t.push("<li style='border-color:" + itemArr[i] + "'>" + itemArr[i] + "</li>");
    }
    $(".source").append("<ul>" + t.join("") + "</ul>");
    $(".container").droppable({
        drop: (event, ui) => {
            console.log(event, ui);
            let sourceDom = ui.draggable.first();
			if (sourceDom.parent()[0] == document.getElementsByClassName("container")[0]) {
				//如果拖动的是容器里面的，则重绘
				jsPlumb.repaintEverything();
				return;
			}
            let newDom = $("<div style='border-color:" + sourceDom.text() + "'>" + sourceDom.text() + "</div>");
            $(".container").append(newDom);
            newDom.offset({ "left": ui.offset.left, "top": ui.offset.top }).draggable({
                containment: $(".container")
            });
        }
    });
    $(".source").find("li").draggable({
        helper: "clone"
    });
};
$(document).ready(init);

