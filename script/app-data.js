(function (window,$){
    

     window.onload = function()
  {

                base();
             
  }
   
function base(){
    var fi=this;
    var config = {
    apiKey: "AIzaSyA-ywelA_R9aWPsuAoXOZ0qyqP57wZWtuQ",
    authDomain: "eventmanagement-5e0a4.firebaseapp.com",
    databaseURL: "https://eventmanagement-5e0a4.firebaseio.com",
    projectId: "eventmanagement-5e0a4",
    storageBucket: "eventmanagement-5e0a4.appspot.com",
    messagingSenderId: "683568190151"
  };
  firebase.initializeApp(config);
  window.dbRef=fi.firebase.database().ref('EVENTDB');
     var frmLoad = new CustomEvent('formLoaded');
     window.dispatchEvent(frmLoad);
};
    window.api={
        
    getData:function(node,success){
    var fi=this,menus=[],value=[];
    var menuRef=window.dbRef.child(node);
    menuRef.on('value',snap=>{
      snap.val().forEach(function(v){
          if(v.Name)
              {
                  menus.push(v);
              }
      });
      if(success)success(menus);
  });   
},
        getEventdetails:function(event,success){
            succ=[];
            var obj;
            window.dbRef.child(event).once('value').then(function(snapshot){
               var dtObj=snapshot.val();
                snapshot.forEach(function(v){
                    obj=v.val();
                    obj.ID=v.key;
                    succ.push(obj);
                });
                if(success)success(succ);
            });
            
        },
        getCookie:function(cname){
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
                }
                return "";
        }
        //window.api.getCookie('username');
};
  
})(window,jQuery);