function initXHR(x, value){
    console.log(x);
    if (x == 'home'){

        document.getElementById("home").style.display = "block";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "none";


    }
    else if (x == 'coupons'){

        document.getElementById("home").style.display = "none";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "block";

    }
    else if(x == 'users'){

        document.getElementById("home").style.display = "none";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "block";

    }
    else{

        document.getElementById("home").style.display = "block";
        document.getElementById("coupons").style.display = "block";
        document.getElementById("users").style.display = "none";
    }
}

function retrieveCouponsFromServer(url, operation){
    var xmlhttp = new XMLHttpRequest();

    
