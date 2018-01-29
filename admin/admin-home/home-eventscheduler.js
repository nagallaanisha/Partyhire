(function(window,$){
    window.addEventListener('formLoaded', function () {
        $('#eventSchedulerSubmit').on('click', function(){
        submit();
        });
        upcomingEvents();
});
function submit(){
    var name= $('#name').val();
    var cno= $('#customercno').val();
    var email=$('#email').val();
    var eventname= $('#eventname').val();
    var edate= $('#eventdate').val();
    var bdate= $('#bookingdate').val();
    var address= $('#address').val();
 
    var dataObj = {
       Name:name, ContactNumber: cno, Email: email, EventName: eventname, EventDate: edate, Bookingdate: bdate, Address: address
    }
    
    window.dbRef.child('EventScheduler').push(dataObj);
}
    function upcomingEvents(){
        
         window.api.getEventdetails('EventScheduler',function(details){
                        
             details.forEach(function(v){
                 p = $('<p/>');
                    p.append( "<h3>Event: "+v.EventName+"</h3>");
                     p.append("<h4>EventDate: "+v.EventDate+"</h4>");
                    p.append("<h5>Name: "+v.Name+"</h5>");
                      p.append("<h5>Address: "+v.Address+"</h5><a class='details' href='../admin-view/admin-view.html' style='float:right;'>More Details</a><br><hr/>");
                 $('#eventss').append(p);
             });
             
        });
    }
    $(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});
})(window,jQuery);