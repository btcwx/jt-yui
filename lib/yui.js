var yui = require('yuicompressor');
var through = require('through2');

module.exports = function(options, info) {
	return through(function(buffer, encoding, callback) {
		yui.compress(buffer.toString(), function(err, data, extra) {
			if(err) throw err;
			callback(null, data);
		});
	});
};