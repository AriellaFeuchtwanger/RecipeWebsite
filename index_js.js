$(document).ready(function() {
	$.get("navigation.html", function(data) {
		$("#nav-placeholder").replaceWith(data);
	});
}); 