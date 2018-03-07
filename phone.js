$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#content_contact").hide();
	  $("#content_gestures").hide();
});


function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab_content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function moveNumbers(num) {
    var txt=document.getElementById("phonenumber").value;
    txt=txt + num;
    document.getElementById("phonenumber").value=txt;
    }
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
})

$("#clear").click(function(){
	$("#phonenumber").val("");
});

$("#reset").click(function(){
	$("#gesture_out").text("");
});



$( "#gesture_input" ).mousedown(function() {
	$("#gesture_out").text("Mouse Down");
	downX = event.pageX;
		downY = event.pageY;
});

$( "#gesture_input" ).mouseup(function() {

upX = event.pageX;
	upY = event.pageY;
	splitX = upX - downX;
	splitY = downY - upY;
	angle = Math.abs(splitY+1)/Math.abs(splitX+1);
	if (splitX > 0 && angle < 1) {
		$("#gesture_out").text("Swipe Right");
	}
	else if (splitX < 0 && angle < 1) {
		$("#gesture_out").text("Swipe Left");
	}
	else {
		if(splitY > 0) {
			$("#gesture_out").text("Swipe Up");
		}
		else if (splitY < 0) {
			$("#gesture_out").text("Swipe Down");
		}
		else {
			$("#gesture_out").text("Mouse Up");
		}
	}


});
