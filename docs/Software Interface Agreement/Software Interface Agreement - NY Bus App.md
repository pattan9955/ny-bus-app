# Overview

## Introduction

This API fetches bus routes and trips based on either vehicle reference numbers (which each refer to a singular bus) or the public line name for which said trips are servicing. It is also able to list all available public line names as well as all available buses (through the use of vehicle reference numbers).

## Base URL

https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/

# API Endpoints

## API Readiness

| Get API Readiness |  |
| :---- | :---- |
| Description | Retrieves the status of the API i.e. if the API is ready to service requests or not Status returned is either ‘ready’ or ‘waiting’ |
| Endpoint | /ready  |
| Path Parameters | \- |
| HTTP Method | GET |
| Sample Request | https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/ready |
| HTTP Response Codes | 200 OK |
| Sample Response | Response 1 (API is ready) {     "status": "Ready" } Response 2 (API is not ready) {     "status": "Wait" } |

## Vehicle Reference Numbers

| Get List of Vehicle Reference Numbers |  |
| :---- | :---- |
| Description | Retrieves a list of vehicle reference numbers for buses in New York City |
| Endpoint | /getVehRef  |
| Path Parameters | \- |
| HTTP Method | GET |
| Sample Request | https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/getVehRef |
| HTTP Response Codes | 200 OK |
| Sample Response | \[     "NYCT\_4858",     "NYCT\_4856",     "NYCT\_4857",      …     "NYCT\_4480",     "NYCT\_7563",     "NYCT\_7562" \] |

## 

## 

| Get List of Bus Trips by Vehicle Reference Number |  |
| :---- | :---- |
| Description | Retrieves all bus trips undertaken by a given bus with the specified vehicle reference number in GeoJSON format |
| Endpoint | /getBusTripByVehRef/{VehRefNum}  |
| Path Parameters | VehRefNum (required): A valid vehicle reference number  |
| HTTP Method | GET |
| Sample Request | https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/getBusTripByVehRef/NYCT\_1200 |
| HTTP Response Codes | 200 OK (Success) 404 Not Found (Failure) |
| Sample Response | {   "type": "FeatureCollection",   "features": \[     {       "type": "Feature",       "geometry": {         "type": "LineString",         "coordinates": \[           \[             \-73.892465,             40.882495           \],           …         \]       },       "properties": {         "VehicleRef": "NYCT\_1200",         "PublishedLineName": "Bx2",         "DirectionRef": "1",         …       }     },     …   \] } |

## 

## Published Line Names

| Get List of Published Line Names |  |
| :---- | :---- |
| Description | Retrieves a list of published line names  |
| Endpoint | /getPubLineName  |
| Path Parameters | \- |
| HTTP Method | GET |
| Sample Request | https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/getPubLineName |
| HTTP Response Codes | 200 OK |
| Sample Response | \[     "B20",     "Q1",     "Q2",     "Q3",     "Q4",     "Q5",      …     "Bx41-SBS",     "B46-SBS" \] |

## 

## 

| Get List of Bus Trips by Public Line Name |  |
| :---- | :---- |
| Description | Retrieves all bus trips undertaken in service of the specified public line name |
| Endpoint | /getBusTripByPubLineName/{PubLineName}  |
| Path Parameters | PubLineName (required): A valid public line name |
| HTTP Method | GET |
| Sample Request | https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus\_trip/getBusTripByPubLineName/B1 |
| HTTP Response Codes | 200 OK (Success) 404 Not Found (Failure) |
| Sample Response | {   "type": "FeatureCollection",   "features": \[     {       "type": "Feature",       "geometry": {         "type": "Point",         "coordinates": \[           \-74.023862,           40.620082         \]       },       "properties": {         "VehicleRef": "NYCT\_4865",         "PublishedLineName": "B1",         "DirectionRef": "1",         …       }     },     …   \] }  |

