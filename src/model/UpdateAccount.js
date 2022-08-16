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
 * The UpdateAccount model module.
 * @module model/UpdateAccount
 * @version 4.6.0
 */
class UpdateAccount {
    /**
     * Constructs a new <code>UpdateAccount</code>.
     * @alias module:model/UpdateAccount
     * @param companyName {String} Name of your company.
     * @param billingEmail {String} The billing email address associated with your company account.
     */
    constructor(companyName, billingEmail) { 
        
        UpdateAccount.initialize(this, companyName, billingEmail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, companyName, billingEmail) { 
        obj['companyName'] = companyName;
        obj['billingEmail'] = billingEmail;
    }

    /**
     * Constructs a <code>UpdateAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAccount} obj Optional instance to populate.
     * @return {module:model/UpdateAccount} The populated <code>UpdateAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAccount();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('billingEmail')) {
                obj['billingEmail'] = ApiClient.convertToType(data['billingEmail'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('planExpires')) {
                obj['planExpires'] = ApiClient.convertToType(data['planExpires'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Arbitrary properties associated with this campaign.
 * @member {Object} attributes
 */
UpdateAccount.prototype['attributes'] = undefined;

/**
 * Name of your company.
 * @member {String} companyName
 */
UpdateAccount.prototype['companyName'] = undefined;

/**
 * The billing email address associated with your company account.
 * @member {String} billingEmail
 */
UpdateAccount.prototype['billingEmail'] = undefined;

/**
 * State of the account (active, deactivated).
 * @member {module:model/UpdateAccount.StateEnum} state
 */
UpdateAccount.prototype['state'] = undefined;

/**
 * The point in time at which your current plan expires.
 * @member {Date} planExpires
 */
UpdateAccount.prototype['planExpires'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
UpdateAccount['StateEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "deactivated"
     * @const
     */
    "deactivated": "deactivated"
};



export default UpdateAccount;

