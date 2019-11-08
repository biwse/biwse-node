# Biwse Node.js Library

This API client generated from OpenAPI specification.

## Installation

```shell
npm install --save biwse
```


## Example


```javascript
const biwse = require('biwse');

const defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
const bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

const api = new biwse.AppApi()
const appId = "YOUR APP ID"; // {String} The application identidier
const coin = "btc"; // {String} The wallet identidier
api.createAddress(appId, coin).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.biwse.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*biwse.AppApi* | [**createAddress**](docs/AppApi.md#createAddress) | **POST** /app/{appId}/{coin}/address | Create new address
*biwse.AppApi* | [**createInvoice**](docs/AppApi.md#createInvoice) | **POST** /app/{appId}/invoice | Create invoice
*biwse.AppApi* | [**createWalletInvoice**](docs/AppApi.md#createWalletInvoice) | **POST** /app/{appId}/{coin}/invoice | Create wallet invoice
*biwse.AppApi* | [**getBalance**](docs/AppApi.md#getBalance) | **GET** /app/{appId}/{coin}/balance | Retrieve wallet balance
*biwse.AppApi* | [**getInvoice**](docs/AppApi.md#getInvoice) | **GET** /app/{appId}/invoice/{invoiceId} | Retreive invoice info
*biwse.AppApi* | [**sendOnePayment**](docs/AppApi.md#sendOnePayment) | **POST** /app/{appId}/{coin}/send | Send one payment
*biwse.AppApi* | [**sendPayments**](docs/AppApi.md#sendPayments) | **POST** /app/{appId}/{coin}/multi_send | Send payments




