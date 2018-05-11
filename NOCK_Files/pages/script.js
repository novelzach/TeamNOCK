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
            populateCouponsView('home', returnValues);
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
    var newElement = "<div class='container'>";
    newElement += "<div class='row'>";
    newElement += "<div class='col-lg-10'>";
    newElement += "<for class='example' action='' style='margin:auto;max-width:950px;margin-bottom;30px'>";
    newElement += "<input type='text' placeholder='Search...' name='search'>";
    newElement += "<button type='submit'><iclass='fa fa-search'></i></button>";
    newElement += "</form></div></div></div><br></br>";
    //end searchbar
    newElement += "<div class='container'>";
    newElement += "<div class='row'>";
    newElement += "<div class='col-lg-10'>";
    newElement += "<div class='row'>";

    for (var i = 0; i < coupons.length; i++) {
	for(var j = 0; j < coupons[i].coupons.length; j++){
	    
	    newElement += "<div class='container'>";
	    newElement += "<div class='row'>";
	    newElement += "<div class='col-lg-10'>";
	    newElement += "<div class='col-lg-4 col-md-6 mb-4'>";
	    newElement += "<div class='card h-100'>";
	    newElement += "<a href='#'><img class='card-img-top' src='http://placehold.it/700x400' alt=''></a>";
	    newElement += "<div class='card-body'>";
	    newElement += "<h4 class='card-title'>";
	    newElement += "<h3>" + coupons[i].coupons[j].product;
	    newElement += " -- " + coupons[i].coupons[j].store + "</h3>";
	    newElement += "<h5>T: " + coupons[i].coupons[j].token_cost;
	    newElement += " -- Discount: " + coupons[i].coupons[j].discount + "</h5></div>";
	    newElement += "<div class='text-muted'>&#9733; &#9733; &#9733; &#9734;</small></div>";
	    newElement += "</div></div>";
	}
    }
    
    newElement += "</div></div></div></div>";

    element.innerHTML = newElement;
}




