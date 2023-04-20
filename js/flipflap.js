/*!
 * flipflap.js - version locale
 * http://www.micetf.fr/
 * Copyright 2011, Frédéric Misery
 * Date: Dimanche 24 avril 2011
 */
$(document).ready(function(){
	/* Activer le changement de bande. */
	$('.bande').each(function() {
		$(this).find('div:first').show();
		$(this).find('div').click(function(){
			if ($(this).next().length!=0) {
				$(this)
					.hide('slow')
					.next().show('slow')
					.parent().append($(this));
			}
		});
	});
	$('#flipflap').corner();
	$('#contact').contact();
});
