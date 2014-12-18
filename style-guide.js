$.SyntaxHighlighter.init();

//find all blocks to source
$('[data-showsource]').each(function(index){
	var src = $(this).html(); //scrape HTML
	var block = $('<pre class="language-html"/>').text(src); //inject into a code block
	$(this).after(block); //inject on page
});

//wait a bit to avoid FOUC
//would be better if SyntaxHighlighter had an onComplete callback
setTimeout(function(){
	$('body').addClass('loaded');
}, 1500);