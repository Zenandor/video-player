var play = document.getElementsByClassName("play");
var mute = document.getElementById("mute");
var dash = document.getElementById("dash");
var volume = document.getElementById("volume");

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

mute.addEventListener("mouseover", function(){
	volume.style.visibility = "visible";
})

mute.addEventListener("mouseout", function(){
	volume.style.visibility = "hidden";
})
