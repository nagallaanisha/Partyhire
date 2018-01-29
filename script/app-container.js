
window.addEventListener('formLoaded', function () {
    initForm();
});

function initForm(){
var menu, text, fLen, i;

window.api.getData('Menus',function(menus){
    
    menus.sort( function ( a, b ) { return a.Order - b.Order; } );
    
    append = "<ul class='nav navbar-nav'>";
    menus.forEach(function(v){
        append +="<li link-url="+v.URL+" name="+v.Name+" class='menuList' onclick='onMenuClick(this)'>" + v.Name + "</li>";
    });
    append += "</ul>";
    document.getElementById("demo").innerHTML = append;
    $('li[name="Home"]').trigger('click');
});
}

function onMenuClick(e){
    var url=$(e).attr('link-url');
    $(e).addClass('active').siblings().removeClass('active');
    document.getElementById('mainPage').src=url;
}


