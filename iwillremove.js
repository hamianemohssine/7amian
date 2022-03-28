NumOfPost = 7;
hamian = true;
$("#bnmove").mouseover(function() {
    hamian=false;
}).mouseout(function() {
    hamian=true;
});
function Article_loop(){
    NumOfArt = $(".bnone").length;
    WidthOfCon = $('#bnby7amian').width();
    WidthOfTito = $('#tito7').width()
    Widthsource = WidthOfCon;
    goku = 0 - WidthOfTito;
    for (let o = 0; o < NumOfArt; o++) {
        goku =20 + goku + $('.bnone').eq(o).width() ;
    }
    $('#bnmove').css('margin-right',WidthOfCon + "px");
    setInterval(function(){
        if(hamian==true){
            $('#bnmove').css('margin-right', WidthOfCon + "px")
            if(WidthOfCon < goku * (-1)){
                WidthOfCon = Widthsource;
            }
            WidthOfCon = WidthOfCon - 1;
        }
    }, 15);
}
$.ajax({
    type: "get",
    url: "https://www.7amian.com/feeds/posts/default?alt=json-in-script&max-results=" + NumOfPost,
    data: "data",
    dataType: "jsonp",
    success: function (e) {
        NumOfEntry = e.feed["openSearch$itemsPerPage"]["$t"];
        OrderOfLinks = e.feed.entry[0].link.length - 1;
        for (let i = 0; i < NumOfEntry; i++) {
            $('#bnmove').append('<div class="bnone"><a href="'+ e.feed.entry[i].link[OrderOfLinks].href+'">'+e.feed.entry[i].link[OrderOfLinks].title+'</a><div>')
            if(i==NumOfEntry-1){
                $("#bnmove").css("display","flex");
                Article_loop()
            }
        }
        
    }
});

