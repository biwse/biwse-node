/**
 * Biwse API V1 Reference
 * This API documentation generated from OpenAPI specification. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Address from '../model/Address';
import AppInvoice from '../model/AppInvoice';
import AppInvoiceCreated from '../model/AppInvoiceCreated';
import InvoiceStatus from '../model/InvoiceStatus';
import Payment from '../model/Payment';
import Payments from '../model/Payments';
import Transaction from '../model/Transaction';
import WalletBalance from '../model/WalletBalance';
import WalletInvoice from '../model/WalletInvoice';
import WalletInvoiceCreated from '../model/WalletInvoiceCreated';

/**
* App service.
* @module api/AppApi
* @version 1.0.0
*/
export default class AppApi {

    /**
    * Constructs a new AppApi. 
    * @alias module:api/AppApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create new address
     * Create new receive address for yor wallet. 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
    createAddressWithHttpInfo(appId, coin) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createAddress");
      }
      // verify the required parameter 'coin' is set
      if (coin === undefined || coin === null) {
        throw new Error("Missing the required parameter 'coin' when calling createAddress");
      }

      let pathParams = {
        'appId': appId,
        'coin': coin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Address;
      return this.apiClient.callApi(
        '/app/{appId}/{coin}/address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create new address
     * Create new receive address for yor wallet. 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    createAddress(appId, coin) {
      return this.createAddressWithHttpInfo(appId, coin)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create invoice
     * Create new invoice. In response you get url of invoice page 
     * @param {String} appId The application identidier
     * @param {module:model/AppInvoice} appInvoice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppInvoiceCreated} and HTTP response
     */
    createInvoiceWithHttpInfo(appId, appInvoice) {
      let postBody = appInvoice;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createInvoice");
      }
      // verify the required parameter 'appInvoice' is set
      if (appInvoice === undefined || appInvoice === null) {
        throw new Error("Missing the required parameter 'appInvoice' when calling createInvoice");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppInvoiceCreated;
      return this.apiClient.callApi(
        '/app/{appId}/invoice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create invoice
     * Create new invoice. In response you get url of invoice page 
     * @param {String} appId The application identidier
     * @param {module:model/AppInvoice} appInvoice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppInvoiceCreated}
     */
    createInvoice(appId, appInvoice) {
      return this.createInvoiceWithHttpInfo(appId, appInvoice)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create wallet invoice
     * Create new invoice for specific wallet. In response you get url of invoice page. 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/WalletInvoice} walletInvoice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletInvoiceCreated} and HTTP response
     */
    createWalletInvoiceWithHttpInfo(appId, coin, walletInvoice) {
      let postBody = walletInvoice;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createWalletInvoice");
      }
      // verify the required parameter 'coin' is set
      if (coin === undefined || coin === null) {
        throw new Error("Missing the required parameter 'coin' when calling createWalletInvoice");
      }
      // verify the required parameter 'walletInvoice' is set
      if (walletInvoice === undefined || walletInvoice === null) {
        throw new Error("Missing the required parameter 'walletInvoice' when calling createWalletInvoice");
      }

      let pathParams = {
        'appId': appId,
        'coin': coin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WalletInvoiceCreated;
      return this.apiClient.callApi(
        '/app/{appId}/{coin}/invoice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create wallet invoice
     * Create new invoice for specific wallet. In response you get url of invoice page. 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/WalletInvoice} walletInvoice 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletInvoiceCreated}
     */
    createWalletInvoice(appId, coin, walletInvoice) {
      return this.createWalletInvoiceWithHttpInfo(appId, coin, walletInvoice)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve wallet balance
     * Retrieve wallet confirmed and total balance  
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletBalance} and HTTP response
     */
    getBalanceWithHttpInfo(appId, coin) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getBalance");
      }
      // verify the required parameter 'coin' is set
      if (coin === undefined || coin === null) {
        throw new Error("Missing the required parameter 'coin' when calling getBalance");
      }

      let pathParams = {
        'appId': appId,
        'coin': coin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WalletBalance;
      return this.apiClient.callApi(
        '/app/{appId}/{coin}/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve wallet balance
     * Retrieve wallet confirmed and total balance  
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletBalance}
     */
    getBalance(appId, coin) {
      return this.getBalanceWithHttpInfo(appId, coin)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retreive invoice info
     * Retrieve invoice with specified identifier string 
     * @param {String} appId The application identidier
     * @param {String} invoiceId Invoice ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceStatus} and HTTP response
     */
    getInvoiceWithHttpInfo(appId, invoiceId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getInvoice");
      }
      // verify the required parameter 'invoiceId' is set
      if (invoiceId === undefined || invoiceId === null) {
        throw new Error("Missing the required parameter 'invoiceId' when calling getInvoice");
      }

      let pathParams = {
        'appId': appId,
        'invoiceId': invoiceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceStatus;
      return this.apiClient.callApi(
        '/app/{appId}/invoice/{invoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retreive invoice info
     * Retrieve invoice with specified identifier string 
     * @param {String} appId The application identidier
     * @param {String} invoiceId Invoice ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceStatus}
     */
    getInvoice(appId, invoiceId) {
      return this.getInvoiceWithHttpInfo(appId, invoiceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send one payment
     * Send one payments from wallet to one recipient 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    sendOnePaymentWithHttpInfo(appId, coin, payment) {
      let postBody = payment;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling sendOnePayment");
      }
      // verify the required parameter 'coin' is set
      if (coin === undefined || coin === null) {
        throw new Error("Missing the required parameter 'coin' when calling sendOnePayment");
      }
      // verify the required parameter 'payment' is set
      if (payment === undefined || payment === null) {
        throw new Error("Missing the required parameter 'payment' when calling sendOnePayment");
      }

      let pathParams = {
        'appId': appId,
        'coin': coin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Transaction;
      return this.apiClient.callApi(
        '/app/{appId}/{coin}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send one payment
     * Send one payments from wallet to one recipient 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    sendOnePayment(appId, coin, payment) {
      return this.sendOnePaymentWithHttpInfo(appId, coin, payment)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send payments
     * Send payments from wallet to one or many recipents 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/Payments} payments 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    sendPaymentsWithHttpInfo(appId, coin, payments) {
      let postBody = payments;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling sendPayments");
      }
      // verify the required parameter 'coin' is set
      if (coin === undefined || coin === null) {
        throw new Error("Missing the required parameter 'coin' when calling sendPayments");
      }
      // verify the required parameter 'payments' is set
      if (payments === undefined || payments === null) {
        throw new Error("Missing the required parameter 'payments' when calling sendPayments");
      }

      let pathParams = {
        'appId': appId,
        'coin': coin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Transaction;
      return this.apiClient.callApi(
        '/app/{appId}/{coin}/multi_send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send payments
     * Send payments from wallet to one or many recipents 
     * @param {String} appId The application identidier
     * @param {String} coin The wallet identidier
     * @param {module:model/Payments} payments 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    sendPayments(appId, coin, payments) {
      return this.sendPaymentsWithHttpInfo(appId, coin, payments)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
