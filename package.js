Package.describe({
	summary: "Latest version of jquery.maskedinput"
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.add_files('lib/jquery.maskedinput/dist/jquery.maskedinput.js', 'client');
});