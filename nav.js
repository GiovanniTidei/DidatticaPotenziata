function openNav() {
    document.getElementById("Sidenav").style.width = "50%";
    document.getElementById("mask").style.width = "50%";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("mask").style.width = "0";
}


//interactive nav FadeIn One page

$(document).ready(function() {

    //Hide Elements before fade in when clicked
    $('#photoSection').hide();
    $('#contatti').hide();

    //fadeIn Elements in main Navbar (clicked)

    $("#firstName").click(function() {
        $("#photoSection,#contatti").hide();
        $("#homeSection").fadeIn();
    });

    $("#about").click(function() {
        $("#photoSection,#contatti").hide();
        $("#homeSection").fadeIn();
    });
    $("#work").click(function() {
        $("#homeSection,#contatti").hide();
        $("#photoSection").fadeIn();
    });
    $("#contact").click(function() {
        $("#homeSection,#photoSection").hide();
        $("#contatti").fadeIn();
    });

    //button go to portfolio (home)

    $("#goToPortfolio").click(function() {
        $("#homeSection").hide();
        $("#photoSection").fadeIn();
    });

    //fadeIn Elements in Toggle Navbar (clicked)

    $("#aboutToggle").click(function() {
        $("#photoSection,#contatti").hide();
        $("#homeSection").fadeIn();
    });
    $("#workToggle").click(function() {
        $("#homeSection,#contatti").hide();
        $("#photoSection").fadeIn();
    });
    $("#contactToggle").click(function() {
        $("#homeSection,#photoSection").hide();
        $("#contatti").fadeIn();
    });
});