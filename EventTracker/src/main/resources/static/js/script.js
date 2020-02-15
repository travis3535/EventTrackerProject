window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
  getAllResults();
});




function init() {
	  document.f1Form.lookup.addEventListener('click', function(event) {
	    event.preventDefault();
	    var f1Id = document.f1Form.f1Id.value;
	    if (!isNaN(f1Id) && f1Id > 0) {
	    	getResultById(f1Id);
	    }
	  });
	  
	  document.createForm.create.addEventListener('click', function(e) {
		  e.preventDefault();
		  createF1();
		  console.log("TEST from CREATE");
		  
	  });
	}




//BY ID

function getResultById(f1Id) {
	var xhr = new XMLHttpRequest();
	
	var filterString = "api/results/" + f1Id;
	
	xhr.open('GET', filterString, true);
	
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		if (xhr.readyState === 4 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			displayResult(data);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
			var resultDataDiv = document.getElementById('resultData');
			var errorMessage = document.createElement('p');
			errorMessage.textContent = "Result not found";
			
			resultDataDiv.appendChild(errorMessage);
		}
	};
	xhr.send(null);
}

//FIND ALL

function getAllResults() {
	var xhr = new XMLHttpRequest();
	
	var filterString = "api/results/";
	
	xhr.open('GET', filterString, true);
	
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		if (xhr.readyState === 4 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			displayF1(data);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ": " + xhr.responseText);
			var resultDataDiv = document.getElementById('resultData');
			var errorMessage = document.createElement('p');
			errorMessage.textContent = "Result not found";
			
			resultDataDiv.appendChild(errorMessage);
		}
	};
	xhr.send(null);
}

//Create F1

function createF1(f1) {
	var xhr = new XMLHttpRequest();
	var filterString = "api/results/";
	xhr.open('POST', filterString, true);
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		if(xhr.status === 4){
			if (xhr.status === 200 || xhr.status === 201) {
				var response = xhr.responseText;
				let f1 = JSON.parse(response);
				console.log(f1);
				let newRow = createRow(f1);
				let f1TableBody = document.getElementById('f1TableBody');
//				getAllResults();
				cosole.log(f1);
				f1TableBody.appendChild(newRow);
			}
		}
	};
			let form = document.createForm;
			let newF1 = {
					year: form.year.value,
					grandPrix: form.gp.value,
					driver: form.driver.value,
					team: form.team.value,
					laps: form.laps.value,
					startingPosition: form.start.value,
					time: form.time.value,
					points: form.points.value
			}
	
			
	console.log(newF1);
	let json = JSON.stringify(newF1);
	xhr.send(json);
	
	location.reload(false);
	
}














function displayF1(f1) {
	console.log(f1);
	var table = document.createElement('table');
	table.border = 1;
	table.setAttribute('id', 'f1table');
	
	var tableBody = document.createElement('tbody');
	tableBody.setAttribute('id', 'f1TableBody');
	
	var tableHead = createHead(tableBody);
	
	for(let i = 0; i < f1.length; i++) {
		let f1Row = createRow(f1[i]);
		tableBody.appendChild(f1Row);
	}
	table.appendChild(tableHead);
	table.appendChild(tableBody);
	var tableDiv = document.createElement('div');
	tableDiv.appendChild(table);
	document.body.appendChild(tableDiv);
}





//CREATE HEADER

function createHead(tableBody) {
	
	
	var tRow = document.createElement('tr');
	
	var id = document.createElement('th');
	id.textContent = 'ID';
	tRow.appendChild(id);
	
	var year = document.createElement('th');
	year.textContent = 'Year';
	tRow.appendChild(year);
	
	var grandPrix = document.createElement('th');
	grandPrix.textContent = 'Grand Prix';
	tRow.appendChild(grandPrix);
	
	var driver = document.createElement('th');
	driver.textContent = 'Driver';
	tRow.appendChild(driver);
	
	var team = document.createElement('th');
	team.textContent = 'Team';
	tRow.appendChild(team);
	
	var laps = document.createElement('th');
	laps.textContent = 'Laps';
	tRow.appendChild(laps);
	
	var starting = document.createElement('th');
	starting.textContent = 'Starting Postition';
	tRow.appendChild(starting);
	
	var time = document.createElement('th');
	time.textContent = 'Total Time';
	tRow.appendChild(time);
	
	var points = document.createElement('th');
	points.textContent = 'Points';
	tRow.appendChild(points);
	
	
	return tRow;
	
	
	
	
	
}
//Create Row
function createRow(f1) {
	var newRow = document.createElement('tr');
	newRow.addEventListener('click', function(e) {
		displayResult(f1.id);
	});
	for(var variable in f1){

			var tableData = document.createElement('td');
			newRow.setAttribute('id', f1.id +"");
			tableData.textContent = f1[variable];
			newRow.appendChild(tableData);

	}
	return newRow;
}











//SHOWS RESULTS BY ID


function displayResult(f1) {
	
	
	
}

//var dataDiv = document.getElementById('resultData');
//dataDiv.textContent = '';
//
//
//
//var idRow = document.createElement('tr');
////tableBody.appendChild(idRow);
//
//var resultId = document.createElement('td');
//resultId.textContent = f1.id;
//idRow.appendChild(resultId);
//
//
//
//var resultYear = document.createElement('td');
//resultYear.textContent = f1.year;
//idRow.appendChild(resultYear);
//
//
//
//var resultGP = document.createElement('td');
//resultGP.textContent = f1.grandPrix;
//idRow.appendChild(resultGP);
//
//var resultDriver = document.createElement('td');
//resultDriver.textContent = f1.driver;
//idRow.appendChild(resultDriver);
//
//var resultTeam = document.createElement('td');
//resultTeam.textContent = f1.team;
//idRow.appendChild(resultTeam);
//
//var resultLaps = document.createElement('td');
//resultLaps.textContent = f1.laps;
//idRow.appendChild(resultLaps);
//
//var resultStart = document.createElement('td');
//resultStart.textContent = f1.startingPosition;
//idRow.appendChild(resultStart);
//
//var resultTime = document.createElement('td');
//resultTime.textContent = f1.time;
//idRow.appendChild(resultTime);
//
//var resultPoints = document.createElement('td');
//resultPoints.textContent = f1.points;
//idRow.appendChild(resultPoints);
//
//
//
//
//table.appendChild(tableBody);
//dataDiv.appendChild(table);


