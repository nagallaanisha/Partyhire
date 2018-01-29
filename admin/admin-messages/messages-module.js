(function(window,$){
    
    window.addEventListener('formLoaded', function () {
        initmsgForm();
        
    });
    function initmsgForm(){
    messageList=$("#messageList").kendoPanelBar({
    dataSource: { data: [] },
        expand:function(e){
            console.log(e);
            var l=e.sender;
            var di=l.dataItem(e.item);
            console.log(di);
            window.dbRef.child('Enquiries'+'/'+di.ID).update({isNew:false});
        }
    }).data('kendoPanelBar');
        loadMessages();
    }
    
    function loadMessages(){
         window.api.getEventdetails('Enquiries',function(details){
                console.log(details);
                details.forEach(function(v){
                    v.text='<strong>'+v.Name+'</strong>';
                    v.encoded=false;
                    v.content='<br>'+'<b>'+'Message:'+'</b>'+' '+'<i>'+v.Message+'</i>'+'<br><br>'+'<b>'+'Contact Number:'+'</b>'+' '+'<i>'+v.ContactNumber +'</i>'+'<br><br>'+'<b>'+'Email:'+'</b>'+' '+'<i>'+v.Email+'</i>'+'<br>';
                    
                });
                messageList.dataSource.data(details);
         });
    }
    
})(window,jQuery);