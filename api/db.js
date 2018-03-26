var mysql = require('mysql')

module.exports = {
  connect: function() {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'example',
      database : 'iot'
    });

    connection.connect()

    return connection
  },

  // Close the connection to the DB
  close: function(connection) {
    connection.end()
  }
}
