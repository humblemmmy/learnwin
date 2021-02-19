
    var bars = '<div id="bars">
	<div class="n"></div>
	<div class="n">
	</div><div class="m">
	</div><div class="m"></div>
	<div class="m"></div>
	<div class="c"></div>
	</div>'
	$('#container').prepend(bars).css({paddingTop: 0}); $('body').prepend('<div id="shadow" />')  
	
	$('#blog').bind('toggle', function()   
{  
    var $blog = $(this);  
    if ($blog.is(':visible')) $blog.trigger('hide');  
    else $blog.trigger('show')  
})  
    .bind('show', function()  
    {  
    $(this).slideDown('show');  
})  
    .bind('hide', function()   
    {  
    $(this).slideUp('hide');  
});  
$('#blogbutton').removeAttr('href').  
click(function()   
{  
    $('#blog').trigger('toggle');  
}); 
