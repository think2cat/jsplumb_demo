let itemArr = ["Red", "Blue", "Yellow", "Green"];

let init = () => {
    let t = [];
    for (let i = 0; i < itemArr.length; i++) {
        t.push("<li style='border-color:" + itemArr[i] + "'>" + itemArr[i] + "</li>");
    }
    $(".source").append("<ul>" + t.join("") + "</ul>");
    $(".container").droppable({
        drop: (event,ui)=>{
            console.log(event, ui);
        }
    });
	$(".source").find("li").draggable({
		helper: "clone"
	});
};
$(document).ready(init);