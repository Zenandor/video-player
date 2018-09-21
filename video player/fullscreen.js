var play = document.getElementsByClassName("play");
var mute = document.getElementById("mute");
var dash = document.getElementById("dash");
var container = document.getElementById("container");
var controls = document.getElementById("controls");

container.style.width = window.innerWidth + "px";
container.style.height = window.innerHeight + "px";

for(var i = 0; i < play.length; i++){
	play[i].addEventListener("click", function(){
		if(this.classList.contains('playing')){
			for(var j = 0; j < play.length; j++){
				play[j].classList.remove('playing');
			}
		}else{
			for(var j = 0; j < play.length; j++){
				play[j].classList.add('playing');
			}
		}

	})
}

mute.addEventListener("click", function(){
	if(this.classList.contains("muted")){
		this.classList.remove("muted");
		dash.style.visibility = 'hidden';
	}else{
		this.classList.add("muted");
		dash.style.visibility = "visible";
	}

});
/*
window.addEventListener("mouseover", function(){
	var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == -30) {
            clearInterval(id);
        } else {
            pos--; 
            controls.style.top = pos + 'px'; 
        }
    }
})

window.addEventListener("mouseout", function(){
	var pos = -30;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++; 
            controls.style.top = pos + 'px'; 
        }
    }
})
*/

$("body").mousemove(function(){
	$('#controls').animate({
		"top": "-30px"
	}, 500);

	setTimeout(function(){
		$('#controls').animate({
		"top": "0px"
		}, 500);
	}, 3000);

});






/*
var pos = 0;
window.addEventListener("mousemove", function(){
	if(pos > -30){
		pos = 0;
	    var id = setInterval(frame, 10);
	    function frame() {
	        if (pos == -30) {
	            clearInterval(id);
	        } else {
	            pos--; 
	            controls.style.top = pos + 'px'; 
	        }
	    }
	

    setTimeout(function(){
    	pos = -30;
    	for(pos; pos <= 0; pos++){
    		setTimeout(function(){
    			controls.style.top = pos + 'px';
    		}, 10);
    		
    	}

    }, 3000)
	}

});
*/

mute.addEventListener("mouseover", function(){
	volume.style.visibility = "visible";
})

mute.addEventListener("mouseout", function(){
	volume.style.visibility = "hidden";
})
