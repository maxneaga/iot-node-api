# IoT Sensor API
Lightweight API endpoint for collecting and retrieving sensor data written in Express.js 
and distributed as a micro-service Docker container.

Example data point looks like
```json
   {
        "record_id": 5,
        "date": "2018-03-26T03:13:50.000Z",
        "device": "Chamber1",
        "sensor": "temp",
        "value": "98.8"
    }
```

## Usage
### Get the last 500 data points
`GET http://<ip>:3000/sensors`

For "pretty" output use `http://<ip>:3000/sensors?pretty=true`

### Add a data point
`POST http://<ip>:3000/sensors/`

Expects
* Header: `Content-Type - application/x-www-form-urlencoded`
* Three key-value pairs in body:
  * `device`
  * `sensor`
  * `value`
