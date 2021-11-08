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
import CouponRejectionReason from './CouponRejectionReason';
import ReferralRejectionReason from './ReferralRejectionReason';

/**
 * The Meta model module.
 * @module model/Meta
 * @version 4.4.0
 */
class Meta {
    /**
     * Constructs a new <code>Meta</code>.
     * @alias module:model/Meta
     */
    constructor() { 
        
        Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meta();

            if (data.hasOwnProperty('campaigns')) {
                obj['campaigns'] = ApiClient.convertToType(data['campaigns'], Object);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], Object);
            }
            if (data.hasOwnProperty('couponRejectionReason')) {
                obj['couponRejectionReason'] = CouponRejectionReason.constructFromObject(data['couponRejectionReason']);
            }
            if (data.hasOwnProperty('referralRejectionReason')) {
                obj['referralRejectionReason'] = ReferralRejectionReason.constructFromObject(data['referralRejectionReason']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], Object);
            }
        }
        return obj;
    }


}

/**
 * Maps each evaluated campaign ID to a key-value list of that campaigns attributes. Campaigns without attributes will be omitted.
 * @member {Object} campaigns
 */
Meta.prototype['campaigns'] = undefined;

/**
 * Maps the coupon value to a key-value list of that coupons attributes.
 * @member {Object} coupons
 */
Meta.prototype['coupons'] = undefined;

/**
 * @member {module:model/CouponRejectionReason} couponRejectionReason
 */
Meta.prototype['couponRejectionReason'] = undefined;

/**
 * @member {module:model/ReferralRejectionReason} referralRejectionReason
 */
Meta.prototype['referralRejectionReason'] = undefined;

/**
 * Contains warnings about possible misuse.
 * @member {Object} warnings
 */
Meta.prototype['warnings'] = undefined;






export default Meta;

