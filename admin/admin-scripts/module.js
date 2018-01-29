    (function(window,$){
    window.addEventListener('formLoaded', function () {
    var fileButton=document.getElementById('fileButton');
    var submit=document.getElementById('formSubmit');
    var add=document.getElementById('add');
        var delet=document.getElementById('delete');
        /*var adminusername =document.getElementById('username');
        var adminpwd = document.getElementById('password');
        var login = document.getElementById('loginbtn');
        
        login.addEventListener('click', e=> {
            var email = adminusername.value;
            console.log(email);
            var pwd = adminpwd.value;
            
            firebase.auth().signInWithEmailAndPassword(email, pwd)
                    .catch(e => console.log(e.message)) ;
            
        });*/
    fileButton.addEventListener('change',function(e){
        imageupload(e);
    
    });
    submit.onclick=function(){
       save(); 
    };
    add.onclick=function(){
        addNew();
    };
        delet.onclick=function(){
            deleteItem();
        };
    initadminForm();
    });

    function initadminForm(){
    $("#splitter").kendoSplitter({
    orientation: "horizontal",
    panes: [{size: '30%', resizable: true}, {size: '70%', resizable: true}]
    });
    eventsddl=$("#eventsddl").kendoDropDownList({
    dataTextField: "Name",
    dataValueField: "Name",
    change: function(e) {
    eventsChange();
    // Use the value of the widget
    }
    }).data('kendoDropDownList');
    specificList=$("#specificList").kendoListView({
    dataSource: { data: [] },
    selectable:true,
    template:"<div style='height:30px;line-height: 30px;padding-left:5px;cursor:pointer;' node-id=#: ID #>#: Name #</div>",
    change: function() {
        itemSelected();
    }
    }).data('kendoListView');
    window.api.getData('Events',function(events){

    eventsddl.dataSource.data(events);
        eventsddl.select(0);
        eventsddl.trigger('change');
    

    });

    }
        function eventsChange(){
            
            window.api.getEventdetails(eventsddl.value(),function(details){
                console.log(details);
                specificList.dataSource.data(details);
                specificList.select(specificList.element.children().first());
                var di=specificList.dataItem(specificList.select());
            if(!di)
                {
                    addNew();
                }
            });
        }
        function itemSelected(){
            var di=specificList.dataItem(specificList.select());
            if(di)
                {
                    $("#formSubmit").html('Update');
                    newitem=false;
            $('#name').val(di.Name);
            $('#price').val(di.Price);
            $('#details').val(di.Details);
            document.getElementById('eventimg').src=di.imgURL;
                   $('#fileButton').hide();
                }
            else
                {
                    addNew();
                }
        }
        function imageupload(e){
            imgfile=e.target.files[0];
            
            document.getElementById('eventimg').src = window.URL.createObjectURL(imgfile);
            
        }
        
        function save(){
            if(newitem)
                {
        var storageRef=window.firebase.storage().ref(eventsddl.value()+'_images/'+imgfile.name);
        var task=storageRef.put(imgfile);
        task.on('state_changed',function progress(snapshot){

        },function(err){
            console.log(err);
        },function complete(){
            newitem=false;
            var downloadURL=task.snapshot.downloadURL;
            console.log(downloadURL);
            document.getElementById('eventimg').src = downloadURL;
            var obj_data={Name:$('#name').val(),Price:$('#price').val(),Details:$('#details').val(),imgURL:downloadURL};
            console.log(obj_data);
            var tblObj=window.dbRef.child(eventsddl.value());
            tblObj.push(obj_data);
            eventsddl.trigger('change');
        });
                }
            else
                {
                    var di=specificList.dataItem(specificList.select());
                    if(di)
                        {
                    window.dbRef.child(eventsddl.value()+'/'+di.ID).update({Name:$('#name').val(),Price:$('#price').val(),
                                                                            Details:$('#details').val()});
                            eventsddl.trigger('change');
                        }
                }
        }
        function addNew(){
            newitem=true;
            $("#formSubmit").html('Insert');
            $('#fileButton').show();
            $('#name').val('');
            $('#price').val('');
            $('#details').val('');
            document.getElementById('eventimg').src ="https://firebasestorage.googleapis.com/v0/b/eventmanagement-5e0a4.appspot.com/o/base_images%2Fnophoto-icon.png?alt=media&token=33448e69-34e0-4ede-bc0b-1f9d6230a893"
        }
        function deleteItem(){
            var di=specificList.dataItem(specificList.select());
            if(di && confirm('Are you sure you want to delete selected item?'))
                {
            var imgRef = window.firebase.storage().refFromURL(di.imgURL);
            
            var ref=window.dbRef.child(eventsddl.value());
            ref.child(di.ID).remove();
            imgRef.delete();
             eventsddl.trigger('change');      
                }
            else
                {
                    if(!di)
                        {
                    alert('Select an item to delete');
                        }
                }
        }
    
    })(window,jQuery);