/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdatePicklist model module.
 * @module model/UpdatePicklist
 * @version 5.0.1
 */
class UpdatePicklist {
    /**
     * Constructs a new <code>UpdatePicklist</code>.
     * 
     * @alias module:model/UpdatePicklist
     * @param type {module:model/UpdatePicklist.TypeEnum} The type of allowed values in the picklist. If type time is chosen, it must be an RFC3339 timestamp string.
     * @param values {Array.<String>} The list of allowed values provided by this picklist.
     */
    constructor(type, values) { 
        
        UpdatePicklist.initialize(this, type, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, values) { 
        obj['type'] = type;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>UpdatePicklist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePicklist} obj Optional instance to populate.
     * @return {module:model/UpdatePicklist} The populated <code>UpdatePicklist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePicklist();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The type of allowed values in the picklist. If type time is chosen, it must be an RFC3339 timestamp string.
 * @member {module:model/UpdatePicklist.TypeEnum} type
 */
UpdatePicklist.prototype['type'] = undefined;

/**
 * The list of allowed values provided by this picklist.
 * @member {Array.<String>} values
 */
UpdatePicklist.prototype['values'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UpdatePicklist['TypeEnum'] = {

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "time"
     * @const
     */
    "time": "time"
};



export default UpdatePicklist;
