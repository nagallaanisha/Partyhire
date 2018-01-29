 $(document).ready(function(){
     $("#customerTable").hide();
    $("#businesspartnerTable").hide();
    $("#employeeTable").hide();
     $("#salesViewForm").hide();
     $("#salesTable").hide();
     $("#eventsTable").hide();
     
     $("#monthlyFrom").hide();
     $("#monthlyTo").hide();
     $("#day").hide();
     $("#fromLabel").hide();
      $("#toLabel").hide();
      $("#dayLabel").hide();
     $("#yearlyLabel").hide();
     $("#yearly").hide();
        $("#goButton").hide();
     
     $("input[name=sales]").on("click",function(){
         var selectedValue = $("input[name=sales]:checked").val();
         
         if(selectedValue == "monthly"){
              $("#monthlyFrom").show();
             $("#monthlyTo").show();
              $("#fromLabel").show();
                $("#toLabel").show();
              $("#goButton").show();
             $("#day").hide();
             $("#dayLabel").hide();
              $("#yearlyLabel").hide();
            $("#yearly").hide();
            
         } else if(selectedValue == "day"){
             $("#day").show();
             $("#dayLabel").show();
             $("#goButton").show();
             $("#monthlyFrom").hide();
             $("#monthlyTo").hide();
              $("#fromLabel").hide();
                $("#toLabel").hide();
              $("#yearlyLabel").hide();
            $("#yearly").hide();
             
         } else if(selectedValue == "yearly"){
             $("#day").hide();
             $("#dayLabel").hide();
             $("#goButton").show();
             $("#monthlyFrom").hide();
             $("#monthlyTo").hide();
              $("#fromLabel").hide();
                $("#toLabel").hide();
              $("#yearlyLabel").show();
            $("#yearly").show();
         }
     });
});


function eventChangeFunc($i) {
    
     if($i == "Customers"){
         $("#customerTable").show();
         $("#businesspartnerTable").hide();
         $("#employeeTable").hide();
         $("#salesTable").hide();
          $("#salesViewForm").hide();
        $("#eventsTable").hide();
         
          $('#businesspartnerTable td').parent().remove();
          $('#employeeTable td').parent().remove();
          $('#salesTable td').parent().remove();
          $('#eventsTable td').parent().remove();
         
         window.api.getEventdetails('Customers',function(details){
            //console.log(details);
              
             details.forEach(function(v){
                  tr = $('<tr/>');
                    tr.append("<td>" + v.Name+ "</td>");
                    tr.append("<td>" + v.Email + "</td>");
                    tr.append("<td>" + v.ContactNumber + "</td>");
                     tr.append("<td>" + v.Address + "</td>");
                    $('#customerTable').append(tr);
                 
             });
             
        });
        
     } else if($i == "Employees"){
           $("#customerTable").hide();
            $("#businesspartnerTable").hide();
            $("#employeeTable").show();
         $("#salesTable").hide();
          $("#salesViewForm").hide();
         $("#eventsTable").hide();
         
         $('#customerTable td').parent().remove();
         $('#businesspartnerTable td').parent().remove();
         $('#salesTable td').parent().remove();
          $('#eventsTable td').parent().remove();
         
         window.api.getEventdetails('Employees',function(details){
            //console.log(details);
              details.forEach(function(v){
                  tr = $('<tr/>');
                    tr.append("<td>" + v.Name+ "</td>");
                    tr.append("<td>" + v.Password + "</td>");
                    tr.append("<td>" + v.Email + "</td>");
                    tr.append("<td>" + v.ContactNumber + "</td>");
                  tr.append("<td>" + v.SSN + "</td>");
                     tr.append("<td>" + v.Address + "</td>");
                    $('#employeeTable').append(tr);
             });
        });

     } else if($i == "Business Partners"){
         $("#businesspartnerTable").show();
          $("#customerTable").hide();
         $("#employeeTable").hide();
         $("#salesTable").hide();
          $("#salesViewForm").hide();
         $("#eventsTable").hide();
         
         $('#customerTable td').parent().remove();
           $('#employeeTable td').parent().remove();
          $('#salesTable td').parent().remove();
          $('#eventsTable td').parent().remove();
         
          window.api.getEventdetails('BusinessPartners',function(details){
             details.forEach(function(v){
                  tr = $('<tr/>');
                    tr.append("<td>" + v.Name+ "</td>");
                    tr.append("<td>" + v.Email + "</td>");
                    tr.append("<td>" + v.ContactNumber + "</td>");
                 tr.append("<td>" + v.CompanyName + "</td>");
                 tr.append("<td>" + v.Website + "</td>");
                     tr.append("<td>" + v.Address + "</td>");
                    $('#businesspartnerTable').append(tr);
             });
        });

     }else if($i == "Sales"){
         $("#businesspartnerTable").hide();
          $("#customerTable").hide();
         $("#employeeTable").hide();
          $("#salesViewForm").show();
         $("#salesTable").hide();
         $("#eventsTable").hide();
         
         $('#customerTable td').parent().remove();
           $('#employeeTable td').parent().remove();
          $('#businesspartnerTable td').parent().remove();
         $('#eventsTable td').parent().remove();
         
         $(".sale").on("click",function(){
             var from,to,yearly,finalData,day;
             
              window.api.getEventdetails('Sales',function(details){
              //console.log(details);
                  
                  if($("input[name='sales']:checked").val() == 'monthly')
                 {
                
                      $('#salesTable td').parent().remove();
                     
                     from=new Date($('#monthlyFrom').val());
                     to=new Date($('#monthlyTo').val());
                     finalData=details.filter(function(v){
                        var srcDate=new Date(v.Date);
                        return (srcDate>=from && srcDate<=to)
                    });
                     $("#salesTable").show();
                     //console.log(finalData);
                     finalData.forEach(function(e){
                          tr = $('<tr/>');
                    tr.append("<td>" + e.Date+ "</td>");
                    tr.append("<td>" + e.Event + "</td>");
                    tr.append("<td>" + e.Price + "</td>");
                    $('#salesTable').append(tr);
                      
                     });
                 }
                  else if($("input[name='sales']:checked").val() == 'yearly'){
                      
                       $('#salesTable td').parent().remove();
                      
                        yearly=$("#yearly").val();
                       finalData=details.filter(function(v){
                           var srcDate = new Date(v.Date);
                           return (srcDate.getFullYear = yearly)
                           
                       });
                      $("#salesTable").show();
                     console.log(finalData);
                     finalData.forEach(function(e){
                         tr = $('<tr/>');
                    tr.append("<td>" + e.Date+ "</td>");
                    tr.append("<td>" + e.Event + "</td>");
                    tr.append("<td>" + e.Price + "</td>");
                    $('#salesTable').append(tr);
                     });
                }
                 else if($("input[name='sales']:checked").val() == 'day'){
                     
                     $('#salesTable td').parent().remove();
                     
                     
                   day=new Date($('#day').val());
                     finalData=details.filter(function(v){
                        var srcDate=new Date(v.Date);
                        return (srcDate.getTime() === day.getTime())
                    });
                     $("#salesTable").show();
                    //console.log(finalData);
                     finalData.forEach(function(e){
                         tr = $('<tr/>');
                    tr.append("<td>" + e.Date+ "</td>");
                    tr.append("<td>" + e.Event + "</td>");
                    tr.append("<td>" + e.Price + "</td>");
                    $('#salesTable').append(tr);
                     });
                     
                 }
             
        });
         });
         
     } else if($i == "Events"){
         console.log(window.location.href);
        $("#customerTable").hide();
         $("#businesspartnerTable").hide();
         $("#employeeTable").hide();
         $("#salesTable").hide();
          $("#salesViewForm").hide();
        $("#eventsTable").show();
         
          $('#businesspartnerTable td').parent().remove();
          $('#employeeTable td').parent().remove();
          $('#salesTable td').parent().remove();
          $('#customerTable td').parent().remove();
         
         window.api.getEventdetails('EventScheduler',function(details){
             details.forEach(function(v){
                  tr = $('<tr/>');
                    tr.append("<td>" + v.Name+ "</td>");
                    tr.append("<td>" + v.Email + "</td>");
                    tr.append("<td>" + v.ContactNumber + "</td>");
                     tr.append("<td>" + v.Address + "</td>");
                    tr.append("<td>" + v.EventDate + "</td>");
                 tr.append("<td>" + v.EventName + "</td>");
                    tr.append("<td>" + v.Bookingdate + "</td>");
                    $('#eventsTable').append(tr);
             });
        });
     }
   
 }
