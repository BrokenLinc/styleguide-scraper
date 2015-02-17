$.SyntaxHighlighter.init();

//duplicate repeating blocks
$('[data-repeat]').each(function(index){
	var num = Number($(this).data('repeat')) - 1;
	$(this).removeAttr('data-repeat');
	for(var i=0;i<num;i++) {
		$(this).after($(this).clone());
	}
});

//find all blocks to source
$('[data-showsource]').each(function(index){
	var src = $(this).html();
	var block = $('<pre class="language-html"/>').text(src);
	$(this).after(block);
});

// Generate a quick navigation menu
(function() {
	var $quickNav = $('.js-quick-nav');
	
	$('.js-quick-nav-anchor').each(function(index){
		var $this = $(this),
			anchorName = $this.prop('id') || 'quick-nav-anchor-' + index;
		$this.prop('id', anchorName);
		
		$quickNav.append('<li><a href="#' + anchorName + '">' + $this.text() + '</a></li>');
		
        $this.append(' <a href="#top">Top</a>');
	});
}());

//wait a bit to avoid FOUC
//would be better if SyntaxHighlighter had an onComplete callback
setTimeout(function(){
	$('body').addClass('loaded');
}, 1500);