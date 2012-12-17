define([ "dijit/dijit", "dijit/Calendar", "dojo/date" ], function(dijit,
		Calendar, date) {
	new Calendar({
		value : new Date()
	}, "mycal");
});