(function(window,$){
    window.addEventListener('formLoaded', function () {
        initadminForm();
    });


    function initadminForm(){
        $("#splitter").kendoSplitter({
            orientation: "horizontal",
            panes: [{size: '30%', resizable: true}, {size: '70%', resizable: true}]
        });
        Gallerylist=$("#Gallerylist").kendoListView({
        dataSource: { data: [] },
        selectable:true,
        template:"<div style='height:30px;line-height: 30px;padding-left:5px;cursor:pointer;' node-id=#: Name #>#: Name #</div>",
        change: function() {
            itemSelected();
        }
        }).data('kendoListView');
                    GalleryView=$("#GalleryView").kendoListView({
            dataSource: { data: [] },
            template:'<div class="product" title=#: Details #><img class="products" src=#: imgURL # alt="#: Name # image"/><h3>#:Name#</h3><p>#:kendo.toString(Price, "c")#</p></div>',
                change: function(e) {
            eventSelected(e);
        },
                        dataBound: function() {
        $('.products').closest('div').on('click',function(e){
            var x=GalleryView.dataItem(e.currentTarget);
            console.log(x);
           e.preventDefault();
           $('#myModal').modal('show');
            document.getElementById('image').innerHTML="<img src="+x.imgURL+"height='500' width='600'>";
            document.getElementById('name').innerHTML="<h3>Name: "+x.Name+"</h3>";
            document.getElementById('price').innerHTML="<h3>Price: "+x.Price+"</h3>";
            document.getElementById('details').innerHTML="<h3>Details: "+x.Details+"</h3>";
                
        });
    }
            }).data('kendoListView');
            window.api.getData('Events',function(events){
        Gallerylist.dataSource.data(events);
        Gallerylist.select(Gallerylist.element.children().first());

        });
        
    }
function itemSelected(){

        
            window.api.getEventdetails(Gallerylist.dataItem(Gallerylist.select()).Name,function(details){
                GalleryView.dataSource.data(details);
            });
}
    function eventSelected(e){
        console.log(e);
    }

})(window,jQuery);
