/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The NewAccount model module.
 * @module model/NewAccount
 * @version 4.6.0
 */
class NewAccount {
    /**
     * Constructs a new <code>NewAccount</code>.
     * @alias module:model/NewAccount
     * @param companyName {String} 
     */
    constructor(companyName) { 
        
        NewAccount.initialize(this, companyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, companyName) { 
        obj['companyName'] = companyName;
    }

    /**
     * Constructs a <code>NewAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccount} obj Optional instance to populate.
     * @return {module:model/NewAccount} The populated <code>NewAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAccount();

            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} companyName
 */
NewAccount.prototype['companyName'] = undefined;






export default NewAccount;

