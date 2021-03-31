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

import ApiClient from '../ApiClient';

/**
 * The AppInvoiceCreated model module.
 * @module model/AppInvoiceCreated
 * @version 1.0.0
 */
class AppInvoiceCreated {
    /**
     * Constructs a new <code>AppInvoiceCreated</code>.
     * @alias module:model/AppInvoiceCreated
     */
    constructor() { 
        
        AppInvoiceCreated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppInvoiceCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppInvoiceCreated} obj Optional instance to populate.
     * @return {module:model/AppInvoiceCreated} The populated <code>AppInvoiceCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppInvoiceCreated();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Invoice ID
 * @member {String} id
 */
AppInvoiceCreated.prototype['id'] = undefined;

/**
 * Invoice page URL
 * @member {String} url
 */
AppInvoiceCreated.prototype['url'] = undefined;






export default AppInvoiceCreated;
