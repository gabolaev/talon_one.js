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
 * The CouponConstraints model module.
 * @module model/CouponConstraints
 * @version 4.0.0
 */
class CouponConstraints {
    /**
     * Constructs a new <code>CouponConstraints</code>.
     * @alias module:model/CouponConstraints
     */
    constructor() { 
        
        CouponConstraints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponConstraints} obj Optional instance to populate.
     * @return {module:model/CouponConstraints} The populated <code>CouponConstraints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponConstraints();

            if (data.hasOwnProperty('usageLimit')) {
                obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
CouponConstraints.prototype['usageLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
CouponConstraints.prototype['startDate'] = undefined;

/**
 * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
CouponConstraints.prototype['expiryDate'] = undefined;






export default CouponConstraints;

