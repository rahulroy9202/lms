var Waterline = require('waterline');

var Holiday = Waterline.Collection.extend({

  identity: 'holiday',
  connection: 'mysqlos',

  attributes: {
	date: 'datetime',
	occasion: 'string'
  }
  
});

module.exports = Holiday;