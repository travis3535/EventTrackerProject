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
//	    	displayF1(f1Id);
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

function getDetail(f1) {
	var xhr = new XMLHttpRequest();
	var filterString = "api/results/" + f1.Id;
	xhr.open('GET', filterString, true );
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			displayF1(f1);
		}
	}
}

// UPDATE

function updateF1(f1) {
	var xhr = new XMLHttpRequest();
	var filterString = "api/results/" + f1.id;
	xhr.open('PUT', filterString, true );
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState);
		if(xhr.status === 4){
			if (xhr.status === 200 || xhr.status === 201) {
				var response = xhr.responseText;
				var f1 = JSON.parse(response);
				
			}
		}
	}
	var json = JSON.stringify(f1);
	xhr.send(json);
	
	location.reload(false);
	
}

function updateForm(f1) {
	let f1EditDiv = document.getElementById('editf1DetailDiv');
	f1EditDiv.textContent = '';

}


function deleteF1(f1Id) {
	var xhr = new XMLHttpRequest();
	var filterString = "api/results/" +f1Id;
	xhr.open('DELETE', filterString, true );
	if(xhr.status === 4) {
		if (xhr.status === 200 ) {
			var response = xhr.responseText;
			let f1 = JSON.parse(response);
			
		}
	}
	
	xhr.send();
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
		displayResult(f1);
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
	
	let f1DetailDiv = document.getElementById('f1DetailDiv');
	f1DetailDiv.textContent = '';

	let h1Title = document.createElement('h1');
	h1Title.textContent = f1.grandPrix + " (" + f1.year + ") ";
	f1DetailDiv.appendChild(h1Title);
	
	
	
	
	let h4Driver = document.createElement('h4');
	h4Driver.textContent = "Driver: " +f1.driver;
	f1DetailDiv.appendChild(h4Driver);
	
	let h4Team = document.createElement('h4');
	h4Team.textContent = "Team: " +f1.team;
	f1DetailDiv.appendChild(h4Team);
	
	let h5Laps = document.createElement('h4');
	h5Laps.textContent = "Laps: " +f1.laps;
	f1DetailDiv.appendChild(h5Laps);
	
	let h4Start = document.createElement('h4');
	h4Start.textContent = "Starting Pos: " +f1.startingPosition;
	f1DetailDiv.appendChild(h4Start);
	
	let h4Time = document.createElement('h4');
	h4Time.textContent = "Total Time: " +f1.time;
	f1DetailDiv.appendChild(h4Time);
	
	let h4Points = document.createElement('h4');
	h4Points.textContent = "Points: " +f1.points;
	f1DetailDiv.appendChild(h4Points);
	
	
	
	
	let btnDelete = document.createElement('button');
	btnDelete.textContent = 'Delete';
	
	btnDelete.addEventListener('click', function(e){
		e.preventDefault();
		
		deleteF1(f1.id);
	
	});
	
	let btnEdit = document.createElement('button');
	btnEdit.textContent = 'Edit';
	
	btnEdit.addEventListener('click', function(e){
		e.preventDefault();
		var cForm = document.getElementById('createFormId');
		cForm.setAttribute('hidden', true);
		showEdit(f1);
		console.log(f1);
		

	});
	
	let btnBack = document.createElement('button');
	btnBack.textContent = "Back";
	
	btnBack.addEventListener('click', function(e){
		f1DetailDiv.textContent = '';
		
		var cHidden = document.getElementById('createFormId');
		cHidden.removeAttribute('hidden');
		
	});
	
	
	f1DetailDiv.appendChild(btnBack);
	f1DetailDiv.appendChild(btnEdit);
	f1DetailDiv.appendChild(btnDelete);
	
	
}

function showEdit(f1) {
	
	
	editForm = document.createElement('form');
	editForm.setAttribute('name', 'editForm');
	editForm.setAttribute('id', 'editForm');
	
	var hiddenId = document.createElement('input');
	hiddenId.setAttribute('type', 'hidden');
	hiddenId.setAttribute('value', f1.id);
	hiddenId.setAttribute('name','hiddenId');
	editForm.appendChild(hiddenId);
	
	//YEAR
	var label = document.createElement('label');
	label.textContent = 'Year: ';
	editForm.appendChild(label);
	
	var yearBox = document.createElement('input');
	yearBox.setAttribute('type', 'text');
	yearBox.setAttribute('value', f1.year);
	yearBox.setAttribute('name', 'yearBox');
	editForm.appendChild(yearBox);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//GRAND PRIX
	
	var label = document.createElement('label');
	label.textContent = 'Grand Prix: ';
	editForm.appendChild(label);
	
	var gpLabel = document.createElement('input');
	gpLabel.setAttribute('type', 'text');
	gpLabel.setAttribute('value', f1.grandPrix);
	gpLabel.setAttribute('name', 'gpLabel');
	editForm.appendChild(gpLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//DRIVER
	
	var label = document.createElement('label');
	label.textContent = 'Driver: ';
	editForm.appendChild(label);
	
	var driverLabel = document.createElement('input');
	driverLabel.setAttribute('type', 'text');
	driverLabel.setAttribute('value', f1.driver);
	driverLabel.setAttribute('name', 'driverLabel');
	editForm.appendChild(driverLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//TEAM
	var label = document.createElement('label');
	label.textContent = 'Team: ';
	editForm.appendChild(label);
	
	var teamLabel = document.createElement('input');
	teamLabel.setAttribute('type', 'text');
	teamLabel.setAttribute('value', f1.team);
	teamLabel.setAttribute('name', 'teamLabel');
	editForm.appendChild(teamLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//LAPS
	
	var label = document.createElement('label');
	label.textContent = 'Laps: ';
	editForm.appendChild(label);
	
	var lapsLabel = document.createElement('input');
	lapsLabel.setAttribute('type', 'number');
	lapsLabel.setAttribute('value', f1.laps);
	lapsLabel.setAttribute('name', 'lapsLabel');
	editForm.appendChild(lapsLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	// STARTING POSITION
	
	var label = document.createElement('label');
	label.textContent = 'Starting Position: ';
	editForm.appendChild(label);
	
	var startLabel = document.createElement('input');
	startLabel.setAttribute('type', 'text');
	startLabel.setAttribute('value', f1.startingPosition);
	startLabel.setAttribute('name', 'startLabel');
	editForm.appendChild(startLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//TOTAL TIME
	
	var label = document.createElement('label');
	label.textContent = 'Total Time: ';
	editForm.appendChild(label);
	
	var timeLabel = document.createElement('input');
	timeLabel.setAttribute('type', 'text');
	timeLabel.setAttribute('value', f1.time);
	timeLabel.setAttribute('name', 'timeLabel');
	editForm.appendChild(timeLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	//POINTS
	
	var label = document.createElement('label');
	label.textContent = 'Points: ';
	editForm.appendChild(label);
	
	var pointsLabel = document.createElement('input');
	pointsLabel.setAttribute('type', 'text');
	pointsLabel.setAttribute('value', f1.points);
	pointsLabel.setAttribute('name', 'pointsLabel');
	editForm.appendChild(pointsLabel);
	
	var br = document.createElement('br');
	editForm.appendChild(br);
	
	
	let btnSubmit = document.createElement('button');
	btnSubmit.textContent = 'Submit';
	
	btnSubmit.addEventListener('click', function(e){
		e.preventDefault();
		
		if (typeof game !== 'undefined') {
			hiddenId.setAttribute('value', f1.id);
			yearBox.setAttribute('value', f1.year);
			gpLabel.setAttribute('value', f1.grandPrix);
			driverLabel.setAttribute('value', f1.driver);
			teamLabel.setAttribute('value', f1.team);
			lapsLabel.setAttribute('value', f1.laps);
			startLabel.setAttribute('value', f1.startingPosition);
			timeLabel.setAttribute('value', f1.time);
			pointsLabel.setAttribute('value', f1.points);
		}
		
		
		var form = e.target.parentElement;
		console.log(form);
		var editF1 = {
				id: `${form.hiddenId.value}`,
				year: `${form.yearBox.value}`,
				grandPrix: `${form.gpLabel.value}`,
				driver: `${form.driverLabel.value}`,
				team: `${form.teamLabel.value}`,
				laps: `${form.lapsLabel.value}`,
				startingPosition: `${form.startLabel.value}`,
				time: `${form.timeLabel.value}`,
				points: `${form.pointsLabel.value}`
		}
		
		updateF1(editF1);
		console.log(editF1);
	
	});
	
	
	editForm.appendChild(btnSubmit)
	
	f1DetailDiv.appendChild(editForm);
	
}


