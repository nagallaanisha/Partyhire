(function(window,$){
    
    window.addEventListener('formLoaded', function () {
        window.api.getEventdetails('Authentication',function(details){
            userDetails=details;
        $('#loginbtn').on('click', function(){
            authentication();
        });
        });
    });
    function authentication(){
          var form = document.getElementById("loginform");
            var success = false;
             var username= $('#username').val();
             var password=$('#password').val();
                 userDetails.forEach(function(v){
                     if(v.username == username && v.password == password){
                         success= true;
                         setCookie('username',username,1);
                     }
                 });
                if(!success){
                    alert("Invalid credentials");
                    $("#loginform").attr("action","../admin-login/admin-login.html");                    
                }
                else{
                     sessionStorage.setItem("userName",username);
                    $("#loginform").attr("action","/admin/index.html");
                }
          form.submit();
             
    }
    function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
    
})(window,jQuery);
