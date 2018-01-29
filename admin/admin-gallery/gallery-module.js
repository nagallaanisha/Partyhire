function galleryChangeFunc($i){
    if($i == "upload/delete"){
        location.href="../admin-events/admin-events.html";
    } else if($i == "view"){
        initadminForm();
    }
}
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
        window.api.getData('Events',function(events){
    Gallerylist.dataSource.data(events);
    Gallerylist.select(Gallerylist.element.children().first());

    });
}
function itemSelected(){
            GalleryView=$("#GalleryView").kendoListView({
            dataSource: { data: [] },
            template:'<div class="product" title=#: Details #><img src=#: imgURL # alt="#: Name # image" /><h3>#:Name#</h3><p>#:kendo.toString(Price, "c")#</p></div>'
            }).data('kendoListView');
        
            window.api.getEventdetails(Gallerylist.dataItem(Gallerylist.select()).Name,function(details){
                GalleryView.dataSource.data(details);
            });
}