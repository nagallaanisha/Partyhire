(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#employeeformSubmit').on('click', function(){
        submit();
        });
});
function submit(){
    var name= $('#employeename').val();
    var cno= $('#employeecno').val();
    var email= $('#employeeemail').val();
    var ssn= $('#ssn').val();
    var pwd= $('#pwd').val();
    var address= $('#employeeaddress').val();

    var dataObj = {
        Name: name, ContactNumber: cno, Email: email, SSN: ssn, Password: pwd, Address: address
    }
    
    window.dbRef.child('Employees').push(dataObj);
}
})(window,jQuery);
