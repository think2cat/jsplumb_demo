let itemArr = ["Red", "Blue", "Yellow", "Green"];

var connectorStyle = {
    //端点样式
    paintStyle: { fill: "#7AB02C", radius: 7 },
    //连线类型
    connector: ["Flowchart", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }],
    //连线样式
    connectorStyle: {
        strokeWidth: 3,
        stroke: "#9C9DA9",
        joinstyle: "round",
        outlineStroke: "none"
    },
    //鼠标移上样式
    hoverPaintStyle: {
        fill: "#216477",
        stroke: "#216477"
    },
    connectorOverlays: [
        ["Arrow", { location: 1, id: "arrow" }]
    ]
};

let pointArr = [];
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
            pointArr.push(jsPlumb.addEndpoint(newDom, {
                isTarget: true,
                anchor: "Left"
            }, connectorStyle));
            pointArr.push(jsPlumb.addEndpoint(newDom, {
                isSource: true,
                anchor: "Right",
                paintStyle: {
                    stroke: "#7AB02C",
                    fill: "transparent",
                    radius: 7,
                    strokeWidth: 2
                }
                //overlays: [
                //    ["Label", { label: "source", id: "label", location:[3, 0.5], cssClass: "endpointLabel"}]
                //]
            }, connectorStyle));

        }

    });
    $(".source").find("li").draggable({
        helper: "clone"
    });
};
/*
jsPlumb.importDefaults({
    ConnectionOverlays: [
        ["Arrow", { location: 1
            //foldback: 0.618, ///0.618： 普通箭头，1：平底箭头，2：钻石箭头
        }]
    ]
});
*/
$(document).ready(init);

