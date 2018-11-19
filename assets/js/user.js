function openArticle(evt, articleName) {
    // Declare all variables
    var i, content, links;

    // Get all elements with class="tabcontent" and hide them
    content = document.getElementsByClassName("post-body");
    for (i = 0; i < content.length; i++) {
        content[i].className = content[i].className.replace(" in", "");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(articleName).className += " in";
    //evt.currentTarget.className += " active";
}
