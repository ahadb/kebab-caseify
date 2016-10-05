
/**
 * Expose `kebabify`
 */

const regex = /\s+/g;

module.exports = exports = function kebabCaseify(str) {
	if (!str || 0 === str.length) {
		throw new TypeError('I expected a string');
	}
	return str.replace(regex, '-').toLowerCase();
};

/**
 * additonaly use with capitalize
 * @param {String} str
 */

exports.capitalize = function(str) {
	return str.replace(regex, '-').toUpperCase();
};

/**
 * additonaly use with an enDash
 * @param {String} str
 */

exports.enDash = function(str) {
	return str.replace(/\s+/g, '–').toLowerCase();
};
