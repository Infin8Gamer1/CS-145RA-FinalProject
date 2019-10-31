var header =  '<header>' +
                    '<h1>PI <span class="colorRed">Services</span></h1>' +
                    //  '<img id="logo" src="images/pi-services-logo.png"/>'+
                 '</header>' + 

                '<div id="navbar">' +
                    '<ul id="navbar-inner">' +
                        '<li><a href="index.html"><img class="logo" src="images/pi-services-logo-emblem-only.png"/></a></li>' +
                        '<li><a href="jacob.html">Jacob</a></li>' +
                        '<li><a href="jameson.html">Jameson</a></li>' +
                        '<li><a href="news.html">News</a></li>' +
                        '<li><a href="contact.html">Contact</a></li>' +
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
                    '<h1>This is the footer</h1>' +
                '</div>';

function includeFooter() {

    document.write(footer);

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}