var express = require('express')
var router = express.Router()
var db = require('../db')

/*
 * GET last 500 entries of sensor data
 */
router.get('/', function(req, res, next) {
  var dbconn = db.connect()
  dbconn.query('SELECT * FROM sensor_data ORDER BY date DESC LIMIT 500', function (err, rows, fields) {
    if (err) throw err

    // See if pretty output was requested (?pretty=true), then format
    if (req.query.pretty) {
      res.send('<pre>'+JSON.stringify(rows, null, 4)+'</pre>')
    } else {
      // Otherwise dump plain JSON
      res.status(200).json(rows)
    }
  })
  db.close(dbconn)

  console.log('GET /sensors/')
});

/*
 * POST new sensor data entry
 */
router.post('/', function(req, res, next) {
  // See how many pieces of data we received
  var data_keys = Object.keys(req.body)
  if (data_keys.length > 0) {
    // Make sure we received all "device", "sensor" and "value"
    if (data_keys.indexOf('device') != -1 &&
        data_keys.indexOf('sensor') != -1 &&
        data_keys.indexOf('value') != -1) {
          // Report all values to console
          console.log('POST /sensors/ :')
          console.log(req.body)

          // Record the values in the DB
          var dbconn = db.connect()
          dbconn.query({
            sql: 'INSERT INTO sensor_data (date, device, sensor, value) VALUES (now(), ?, ?, ?)',
            timeout: 40000, // 40s
          },
          [req.body.device, req.body.sensor, req.body.value],
          function (error, results, fields) {
            if (error) throw error

            // If no error, INSERT successful
            console.log(results)
          }
          );
          db.close(dbconn)
        }
        else {
          // Do not record anything
          console.log('Sensors Received POST, but "device" or "sensor" or ')
          console.log('"value" is not present in request. Received only '+data_keys)
        }
  }

  res.status(200).json({status:"ok"})
});

module.exports = router;
