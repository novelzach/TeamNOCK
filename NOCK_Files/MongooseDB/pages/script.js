function initXHR(x, value){
    console.log(x);
    if (x == 'home'){

        document.getElementById("home").style.display = "block";
        document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "none";


    }
    else if (x == 'coupons'){

        //      retrievecouponsFromServer('/app/json/coupons.json');
        retrieveActiveListsFromServer('/app/coupons/', 'coupons');

        document.getElementById("home").style.display = "none";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "none";

    }
    else if(x == 'users'){

        retrieveActiveListsFromServer('/app/coupons/' + value, 'users');

        document.getElementById("home").style.display = "none";
        document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "block";

    }
    else{

        document.getElementById("home").style.display = "block";
        document.getElementById("coupons").style.display = "none";
        document.getElementById("users").style.display = "none";
    }
}

function retrievecouponsFromServer(url, operation){
    var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnValues = JSON.parse(xmlhttp.responseText);
            if (operation == "coupons") {
                populatecouponsView('coupons', returnValues);
            }
            else if (operation == "users") {
                populatecouponsItems('users', returnValues);               
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//DOM based function
function populatecouponsView(elementId, coupons) {
    var element = document.getElementById(elementId);
    var newElement = "<h3 class=\"panel-heading\">Coupons</h3>";

    for (var i = 0; i < coupons.length; i++) {
        newElement += "<div class=\"panel panel-default\">";
        newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:initXHR('users'," +  (i+1) + ")\">" + (i + 1) + ". " + coupons[i].name + "</a></h4>";
        newElement += "<div class=\"panel-body\">";
        newElement += "<p>" + coupons[i].description  + "</p>";
        newElement += "</div>";
        newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
        newElement += "<tbody>";
        newElement += "<tr>";
        newElement += "<td>Due: <span>" + coupons[i].due + "</span></td>";
        newElement += "<td align=\"right\">Items: <span class=\"badge\">" + coupons[i].items + "</span></td>";
        newElement += "</tr>";
        newElement += "</tbody>";
        newElement += "</table>";
        newElement += "</div>";
    }

    element.innerHTML = newElement;
}




