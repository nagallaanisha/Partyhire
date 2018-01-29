(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#businesspartnersFormSubmit').on('click', function(){
        submit();
        });
});
function submit(){
    var name= $('#bpname').val();
    var cno= $('#bpcno').val();
    var email= $('#bpemail').val();
    var cname= $('#bpcompanyname').val();
    var website= $('#bpwebsite').val();
    var address= $('#bpaddress').val();
  
    var dataObj = {
        Name: name, ContactNumber: cno, Email: email, CompanyName: cname, Website: website, Address: address
    }
    
    window.dbRef.child('BusinessPartners').push(dataObj);
}
})(window,jQuery);
