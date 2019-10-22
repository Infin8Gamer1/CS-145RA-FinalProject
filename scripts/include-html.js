var header = '<div class="header">' +
                    '<h2>Scroll Down</h2>' +
                    '<p>Scroll down to see the sticky effect.</p>' +
                '</div>' +

                '<div id="navbar">' +
                    '<a href="index.html">Home</a>' +
                    '<a href="javascript:void(0)">News</a>' +
                    '<a href="javascript:void(0)">Contact</a>' +
                '</div>';

function includeHeader() {

    document.write(header);

    //set the corect tab to active
    //alert(document.baseURI);

    var uri = document.baseURI.split("/");
    var file = uri[uri.length - 1];

    var navbar = document.getElementById("navbar");

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

var footer = '<div class="footer">' +
                    '<h1>This is the footer</h1>' +
                '</div>';

function includeFooter() {

    document.write(footer);

    /* note that this could be done much better if using a webserver however to avoid breaking the quantam timeline I wont do that */

}