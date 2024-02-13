console.log('!!!');

function showValve() {	
	const valves = document.getElementsByClassName("valve");	
	for (let i = 0; i < valves.length; i++) {
  		valves[i].style.display = "block";
	}

	document.getElementsByClassName("showBt")[0].style.display = "none";
	document.getElementsByClassName("hideBt")[0].style.display = "";
};


function hideValve() {
	const valves = document.getElementsByClassName("valve");	
	for (let i = 0; i < valves.length; i++) {
  		valves[i].style.display = "none";
	}
	
	document.getElementsByClassName("showBt")[0].style.display = "";
	document.getElementsByClassName("hideBt")[0].style.display = "none";
};