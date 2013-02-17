meteor-jquery.maskedinput
=========================

jquery.maskedinput packaged for Meteor

Usage:
------

##### Add to your project with meteorite:
	mrt add jquery.maskedinput

##### Add the mask to an input
	Template.YOUR_TEMPLATE.rendered = function () {
		$("input#phone").mask("(999) 999-9999");
	}

#### Additional information
jquery.maskedinput was created by [John Bush](http://digitalbush.com). The documentation for jquery.maskedinput can be found [here](http://digitalbush.com/projects/masked-input-plugin/).