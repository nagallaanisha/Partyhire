(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#formSubmit').on('click', function(){
        submit();

    });
});

function submit(){
    var name= $('#name').val();
    var cno= $('#cno').val();
    var email= $('#email').val();
    var message= $('#message').val();
    var cd=new Date();
    var dataObj = {
        Name: name, ContactNumber: cno,Email: email, Message: message, isNew: true,CreatedDate:cd
    }
    
    window.dbRef.child('Enquiries').push(dataObj);
}
})(window,jQuery);
