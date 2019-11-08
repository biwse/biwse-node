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
import InvoiceStatusData from './InvoiceStatusData';

/**
 * The InvoiceStatus model module.
 * @module model/InvoiceStatus
 * @version 1.0.0
 */
class InvoiceStatus {
    /**
     * Constructs a new <code>InvoiceStatus</code>.
     * @alias module:model/InvoiceStatus
     */
    constructor() { 
        
        InvoiceStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceStatus} obj Optional instance to populate.
     * @return {module:model/InvoiceStatus} The populated <code>InvoiceStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceStatus();

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InvoiceStatusData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Invoice's amount
 * @member {String} msg
 */
InvoiceStatus.prototype['msg'] = undefined;

/**
 * @member {module:model/InvoiceStatusData} data
 */
InvoiceStatus.prototype['data'] = undefined;






export default InvoiceStatus;

