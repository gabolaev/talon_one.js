/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The NewFeatureFlags model module.
 * @module model/NewFeatureFlags
 * @version 4.0.0
 */
class NewFeatureFlags {
    /**
     * Constructs a new <code>NewFeatureFlags</code>.
     * @alias module:model/NewFeatureFlags
     */
    constructor() { 
        
        NewFeatureFlags.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewFeatureFlags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewFeatureFlags} obj Optional instance to populate.
     * @return {module:model/NewFeatureFlags} The populated <code>NewFeatureFlags</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewFeatureFlags();

            if (data.hasOwnProperty('loyalty')) {
                obj['loyalty'] = ApiClient.convertToType(data['loyalty'], 'Boolean');
            }
            if (data.hasOwnProperty('coupons_without_count')) {
                obj['coupons_without_count'] = ApiClient.convertToType(data['coupons_without_count'], 'Boolean');
            }
            if (data.hasOwnProperty('betaEffects')) {
                obj['betaEffects'] = ApiClient.convertToType(data['betaEffects'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Whether the account has access to the loyalty features or not
 * @member {Boolean} loyalty
 */
NewFeatureFlags.prototype['loyalty'] = undefined;

/**
 * Whether the account queries coupons with or without total result size
 * @member {Boolean} coupons_without_count
 */
NewFeatureFlags.prototype['coupons_without_count'] = undefined;

/**
 * Whether the account can test beta effects or not
 * @member {Boolean} betaEffects
 */
NewFeatureFlags.prototype['betaEffects'] = undefined;






export default NewFeatureFlags;

