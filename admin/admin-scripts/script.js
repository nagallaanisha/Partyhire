
var menu = ["Home","Gallery","Add","View","Receipts","Events", "Messages"];
var menuLen = menu.length;
append = "<ul class='nav navbar-nav'>";
    for (i = 0; i < menuLen; i++) {
        append +="<li  id="+i+" class='menuLists' onclick='onMenuClick(id)'>" + menu[i] + "</li>";
    }
    append += "</ul>";
document.getElementById("demo").innerHTML = append;

function onMenuClick(e){
    if(e == 0){
        
        document.getElementById('myFrame').src = "admin-home/admin-home.html";
       
    } 
    if(e == 1){
        
        document.getElementById('myFrame').src = "admin-gallery/admin-gallery.html";
       
    } 
    if(e == 2){
        
        document.getElementById('myFrame').src = "admin-add/admin-add.html";
       
    } 
    if(e == 3){
        
        document.getElementById('myFrame').src = "admin-view/admin-view.html";
       
    } 
    if(e == 4){
        
        document.getElementById('myFrame').src = "admin-receipts/admin-receipts.html";
       
    } 
    if(e == 5){
        
        document.getElementById('myFrame').src = "admin-events/admin-events.html";
       
    } if(e == 6){
        
        document.getElementById('myFrame').src = "admin-messages/admin-messages.html";
    }
    
}

