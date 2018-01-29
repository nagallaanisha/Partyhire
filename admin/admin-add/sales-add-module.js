(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#salesformSubmit').on('click', function(){
        submit();
        });
});
function submit(){
    var event= $('#event').val();
    var date= $('#date').val();
    var price= $('#price').val();
  
    var dataObj = {
        Event: event, Date: date, Price: price
    }
    
    window.dbRef.child('Sales').push(dataObj);
}
})(window,jQuery);