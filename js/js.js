// This function reads the JSON data file for processing
function requestSourceData(sourceJson){
	var request = new XMLHttpRequest();
	var jsonData = {};
	request.open("GET", sourceJson, true);
	request.send(null);
	request.onreadystatechange = function(){
		// Render JSON once loaded
		if (request.readyState === 4 && request.status === 200){
			jsonData = cleanJson(request.responseText);
			renderJson(jsonData);
		}
	}
}

// This function strips HTML tags and their content from the supplied JSON
function cleanJson(booksJson){
	booksJson = booksJson.replace(/(<(.*)>)/ig, '');
	booksJson = JSON.parse(booksJson);
	return booksJson;
}

// This function converts the JSON into readable HTML
function renderJson(booksJson){
	document.getElementById("books").innerHTML = "";
	var booksHtml = "";
	
	// Loop through each book's data and create HTML for each one
	for (var i = 0; i < booksJson.length; i++) {
		
		// We could implement some more robust URL checking here if required, to catch things like the "12345.html" link
		if(booksJson[i].url){
		   validUrl = true;
		   }
		
		// Build the HTML for a single book
		booksHtml += "<div class='book'>";
		if(validUrl){ booksHtml += "<a href='"+ booksJson[i].url +"'>"; }
		// If no cover image found, display default cover image
		if(booksJson[i].image){ booksHtml += "<img src='source/"+ booksJson[i].image +"'>"; } else { booksHtml += "<img src='img/missing.png'>"; }
		if(validUrl){ booksHtml += "</a>"; }
		if(booksJson[i].title){ booksHtml += "<p class='title'>"+ booksJson[i].title +"</p>"; }
		if(booksJson[i].author){ booksHtml += "<p class='author'>"+ booksJson[i].author +"</p>"; }
		booksHtml += "</div>";
	}
	
	// Render HTML to the page
	document.getElementById("books").innerHTML = booksHtml;
}

// Wait for page to load before calling JSON data
window.onload = function(){
	requestSourceData("./source/data.json");
}