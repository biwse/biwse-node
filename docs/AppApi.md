# biwse.AppApi

All URIs are relative to *https://api.biwse.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddress**](AppApi.md#createAddress) | **POST** /app/{appId}/{coin}/address | Create new address
[**createInvoice**](AppApi.md#createInvoice) | **POST** /app/{appId}/invoice | Create invoice
[**createWalletInvoice**](AppApi.md#createWalletInvoice) | **POST** /app/{appId}/{coin}/invoice | Create wallet invoice
[**getBalance**](AppApi.md#getBalance) | **GET** /app/{appId}/{coin}/balance | Retrieve wallet balance
[**getInvoice**](AppApi.md#getInvoice) | **GET** /app/{appId}/invoice/{invoiceId} | Retreive invoice info
[**sendOnePayment**](AppApi.md#sendOnePayment) | **POST** /app/{appId}/{coin}/send | Send one payment
[**sendPayments**](AppApi.md#sendPayments) | **POST** /app/{appId}/{coin}/multi_send | Send payments



## createAddress

> Address createAddress(appId, coin)

Create new address

Create new receive address for yor wallet. 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let coin = "coin_example"; // String | The wallet identidier
apiInstance.createAddress(appId, coin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **coin** | **String**| The wallet identidier | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createInvoice

> AppInvoiceCreated createInvoice(appId, appInvoice)

Create invoice

Create new invoice. In response you get url of invoice page 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let appInvoice = new biwse.AppInvoice(); // AppInvoice | 
apiInstance.createInvoice(appId, appInvoice).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **appInvoice** | [**AppInvoice**](AppInvoice.md)|  | 

### Return type

[**AppInvoiceCreated**](AppInvoiceCreated.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWalletInvoice

> WalletInvoiceCreated createWalletInvoice(appId, coin, walletInvoice)

Create wallet invoice

Create new invoice for specific wallet. In response you get url of invoice page. 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let coin = "coin_example"; // String | The wallet identidier
let walletInvoice = new biwse.WalletInvoice(); // WalletInvoice | 
apiInstance.createWalletInvoice(appId, coin, walletInvoice).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **coin** | **String**| The wallet identidier | 
 **walletInvoice** | [**WalletInvoice**](WalletInvoice.md)|  | 

### Return type

[**WalletInvoiceCreated**](WalletInvoiceCreated.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBalance

> WalletBalance getBalance(appId, coin)

Retrieve wallet balance

Retrieve wallet confirmed and total balance  

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let coin = "coin_example"; // String | The wallet identidier
apiInstance.getBalance(appId, coin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **coin** | **String**| The wallet identidier | 

### Return type

[**WalletBalance**](WalletBalance.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInvoice

> InvoiceStatus getInvoice(appId, invoiceId)

Retreive invoice info

Retrieve invoice with specified identifier string 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let invoiceId = "invoiceId_example"; // String | Invoice ID
apiInstance.getInvoice(appId, invoiceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **invoiceId** | **String**| Invoice ID | 

### Return type

[**InvoiceStatus**](InvoiceStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendOnePayment

> Transaction sendOnePayment(appId, coin, payment)

Send one payment

Send one payments from wallet to one recipient 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let coin = "coin_example"; // String | The wallet identidier
let payment = new biwse.Payment(); // Payment | 
apiInstance.sendOnePayment(appId, coin, payment).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **coin** | **String**| The wallet identidier | 
 **payment** | [**Payment**](Payment.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendPayments

> Transaction sendPayments(appId, coin, payments)

Send payments

Send payments from wallet to one or many recipents 

### Example

```javascript
import biwse from 'biwse';
let defaultClient = biwse.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new biwse.AppApi();
let appId = "appId_example"; // String | The application identidier
let coin = "coin_example"; // String | The wallet identidier
let payments = new biwse.Payments(); // Payments | 
apiInstance.sendPayments(appId, coin, payments).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The application identidier | 
 **coin** | **String**| The wallet identidier | 
 **payments** | [**Payments**](Payments.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

