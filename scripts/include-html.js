var header =  '<div class="header">' +
                    '<h1>PI <span class="colorRed">Services</span></h1>' +
                    //  '<img id="logo" src="images/pi-services-logo.png"/>'+
                 '</div>' + 

                '<header id="navbar">' +
                    '<div id="navbar-inner">' +
                        '<a href="index.html"><img class="logo" src="images/pi-services-logo-emblem-only.png"/></a>' +
                        '<a href="news.html">News</a>' +
                        '<a href="contact.html">Contact</a>' +
                    '</div>' +
                '</header>';

function includeHeader() {

    document.write(header);

    //set the corect tab to active
    //alert(document.baseURI);

    var uri = document.baseURI.split("/");
    var file = uri[uri.length - 1];

    var navbar = document.getElementById("navbar-inner");

    for (let i = 0; i < navbar.children.length; i++) {
        var element = navbar.children[i];
        
        var page = element.getAttribute("href");

        if(page){
            if(page == file){
                element.setAttribute("class", "active");
                break;
            }
        }
    }

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}

var footer = '<div id="footer">' +
                    '<h1>This is the footer</h1>' +
                '</div>';

function includeFooter() {

    document.write(footer);

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}