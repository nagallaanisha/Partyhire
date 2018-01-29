 function changeFunc($i) {
     
     if($i == "Customers"){
         $("#businessPartnersForm").hide();
        $("#employeeForm").hide();
        $("#customersformData").show();
     }
     if($i == "Business Partners"){
         $("#customersformData").hide();
         $("#employeeForm").hide();
         $("#businessPartnersForm").show();
     }
     if($i == "Employees"){
          $("#customersformData").hide();
        $("#businessPartnersForm").hide();
         $("#employeeForm").show();
     }
    if($i == "Sales"){
          $("#customersformData").hide();
        $("#businessPartnersForm").hide();
         $("#employeeForm").hide();
        $("#salesForm").show();
     }
}

$(document).ready(function(){
     $("#customersformData").hide();
     $("#businessPartnersForm").hide();
     $("#employeeForm").hide();
    $("#salesForm").hide();
});