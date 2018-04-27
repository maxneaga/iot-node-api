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

## Pre-requisites
The following need to be installed on your machine or VM:
* NodeJS
* NPM
* Git
* Docker
* Docker-compose

## Installation
1. Start MySQL server: `docker-compose up -d`
1. Source database shcema from the db-schema.sql file
1. `cd api`
1. Install dependencies: `npm install`
1. Start the API server: `DEBUG=api:* npm start`


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
