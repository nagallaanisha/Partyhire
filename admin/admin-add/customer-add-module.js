(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#customerFormSubmit').on('click', function(){
        submit();
        });
});
    
function submit(){
    var name= $('#customername').val();
    var cno= $('#customercno').val();
    var email= $('#customeremail').val();
    var address= $('#customeraddress').val();
    
    var dataObj = {
        Name: name, ContactNumber: cno, Email: email, Address: address
    }
    
    window.dbRef.child('Customers').push(dataObj);
}
})(window,jQuery);


