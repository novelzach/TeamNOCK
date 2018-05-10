function initXHR(x, value){
    console.log(x);
    
/*    
    if (x == 'home'){

        document.getElementById("home").style.display = "block";
        document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "none";


    }
    else if (x == 'coupons'){

        //      retrievecouponsFromServer('/app/json/coupons.json');
        retrievecouponsFromServer('/app/coupons/', 'coupons');

        document.getElementById("home").style.display = "none";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "none";

    }
  */
  
  if(x == 'user'){

        retrieveUserFromServer('/app/user/' + value, 'users');

        document.getElementById("home").style.display = "none";
        //document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "block";

    }
    else{
	retrieveCouponsFromServer('/app/coupons/', null);

        document.getElementById("home").style.display = "block";
        //document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "none";
    }
}

function retrieveCouponsFromServer(url, operation){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnValues = JSON.parse(xmlhttp.responseText);
            populateCouponsView('coupons', returnValues);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}





function retrieveUserFromServer(url, operation){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
	    var returnValues = JSON.parse(xmlhttp.responseText);
	    populateUserView('users', returnValues);
	}
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function populateUserView(elementID, user){
    var element = document.getElementById(elementID);
    var newElement = "<div class='container'>";
    newElement += "<div class='row'>";
    newElement += "<div class='col-lg-12' align='center'>";
    newElement += "<div class='col-lg-10 col sm-6 text-center mb-4'>";
    newElement += "<h3>" + user.fname + " " + user.lname + "</h3>";
    newElement += "<img class='rounded-circle img-fluid d-block mx-auto'";
    newElement += "src='http://placehold.it/200x200' alt=''>";
    newElement += "<h4>" + user.user + "</h4>";
    newElement += "<h4>" + "Tokens: " + user.tokens + "</h4>";
    newElement += "</div></div></div>";
    newElement += "</div>";

    element.innerHTML = newElement;
}

//DOM based function
function populateCouponsView(elementId, coupons) {
    var element = document.getElementById(elementId);
    var newElement = "";

    for (var i = 0; i < coupons.length; i++) {
	for(var j = 0; j < coupons.coupons.length; j++){

	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	    newElement += 
	}
    }

    element.innerHTML = newElement;
}




