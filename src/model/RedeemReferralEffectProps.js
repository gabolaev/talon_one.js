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
 * The RedeemReferralEffectProps model module.
 * @module model/RedeemReferralEffectProps
 * @version 4.2.0
 */
class RedeemReferralEffectProps {
    /**
     * Constructs a new <code>RedeemReferralEffectProps</code>.
     * The properties specific to the \&quot;redeemReferral\&quot; effect. This gets triggered whenever the referral code is valid, and a rule was triggered that contains a \&quot;redeem referral\&quot; effect.
     * @alias module:model/RedeemReferralEffectProps
     * @param id {Number} The id of the referral code that was redeemed
     * @param value {String} The referral code that was redeemed
     */
    constructor(id, value) { 
        
        RedeemReferralEffectProps.initialize(this, id, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, value) { 
        obj['id'] = id;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RedeemReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeemReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RedeemReferralEffectProps} The populated <code>RedeemReferralEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedeemReferralEffectProps();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the referral code that was redeemed
 * @member {Number} id
 */
RedeemReferralEffectProps.prototype['id'] = undefined;

/**
 * The referral code that was redeemed
 * @member {String} value
 */
RedeemReferralEffectProps.prototype['value'] = undefined;






export default RedeemReferralEffectProps;

