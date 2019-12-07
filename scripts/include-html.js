var header =  '<header>' +
                    '<h1>PI <span class="colorRed">Services</span></h1>' +
                    //  '<img id="logo" src="images/pi-services-logo.png"/>'+
                 '</header>' + 

                '<div id="navbar">' +
                    '<ul id="navbar-inner">' +
                        '<li><a href="index.html"><img class="logo" src="images/pi-services-logo-emblem-only.png"/></a></li>' +
                        '<li><a href="famous_cases.html">Famous Cases</a></li>' +
                        '<li><a href="PrivateInvestigation.html">Private Investigation</a></li>' +
                        '<li><a href="BugSweep.html">Bug Sweeps</a></li>' +
                        '<li><a href="BackgroundChecks.html">Backgorund Checks</a></li>' +
                        '<li><a href="LocationServices.html">Location Services</a></li>' +
                    '</ul>' +
                '</div>';

function includeHeader() {

    document.write(header);

    //set the corect tab to active
    //alert(document.baseURI);

    var uri = document.baseURI.split("/");
    var file = uri[uri.length - 1];

    var navbar = document.getElementById("navbar-inner");

    for (let i = 0; i < navbar.children.length; i++) {
        var element = navbar.children[i];
        
        var page = element.children[0].getAttribute("href");

        if(page){
            if(page == file){
                element.children[0].setAttribute("class", "active");
                break;
            }
        }
    }

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}

var footer = '<div id="footer">' +
                    '<p>Jacob Holyfield, Jameson Vetter &copy; 2019</p>' +
                    // '<div class="socialPanel">' +
                    //     '<p>Follow Pi Services : </p>' +
                    //     '<a href="#" class="fa fa-facebook"></a>' +
                    //     '<a href="#" class="fa fa-twitter"></a>' +
                    //     '<a href="#" class="fa fa-linkedin"></a>' +
                    // '</div>' +
                '</div>';

function includeFooter() {

    document.write(footer);

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}