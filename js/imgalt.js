$(document).ready(function(){
// display image caption on top of image
$("li img").each(function() {
var imageCaption = $(this).attr("alt");
 
if (imageCaption != '') {
var imgWidth = $(this).width();
var imgHeight = $(this).height();
var position = $(this).position();
var positionTop = (position.top + imgHeight - 26)
$("<span class='img-caption'><em>"+imageCaption+"</em></span>")
.css({"position":"absolute","top": positionTop, "left":position.left + 20,  "width":imgWidth +"px"})
.insertAfter(this);
}
 
});
});