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
 * The LimitCounter model module.
 * @module model/LimitCounter
 * @version 4.5.0
 */
class LimitCounter {
    /**
     * Constructs a new <code>LimitCounter</code>.
     * 
     * @alias module:model/LimitCounter
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param id {Number} Unique ID for this entity.
     * @param action {String} The limitable action of the limit counter.
     * @param limit {Number} The highest possible value for this limit counter.
     * @param counter {Number} The current value for this limit counter.
     */
    constructor(campaignId, applicationId, accountId, id, action, limit, counter) { 
        
        LimitCounter.initialize(this, campaignId, applicationId, accountId, id, action, limit, counter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, applicationId, accountId, id, action, limit, counter) { 
        obj['campaignId'] = campaignId;
        obj['applicationId'] = applicationId;
        obj['accountId'] = accountId;
        obj['id'] = id;
        obj['action'] = action;
        obj['limit'] = limit;
        obj['counter'] = counter;
    }

    /**
     * Constructs a <code>LimitCounter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitCounter} obj Optional instance to populate.
     * @return {module:model/LimitCounter} The populated <code>LimitCounter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LimitCounter();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
            if (data.hasOwnProperty('profileIntegrationId')) {
                obj['profileIntegrationId'] = ApiClient.convertToType(data['profileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('couponId')) {
                obj['couponId'] = ApiClient.convertToType(data['couponId'], 'Number');
            }
            if (data.hasOwnProperty('couponValue')) {
                obj['couponValue'] = ApiClient.convertToType(data['couponValue'], 'String');
            }
            if (data.hasOwnProperty('referralId')) {
                obj['referralId'] = ApiClient.convertToType(data['referralId'], 'Number');
            }
            if (data.hasOwnProperty('referralValue')) {
                obj['referralValue'] = ApiClient.convertToType(data['referralValue'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('counter')) {
                obj['counter'] = ApiClient.convertToType(data['counter'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */
LimitCounter.prototype['campaignId'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
LimitCounter.prototype['applicationId'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
LimitCounter.prototype['accountId'] = undefined;

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
LimitCounter.prototype['id'] = undefined;

/**
 * The limitable action of the limit counter.
 * @member {String} action
 */
LimitCounter.prototype['action'] = undefined;

/**
 * The profile ID for which this limit counter is used.
 * @member {Number} profileId
 */
LimitCounter.prototype['profileId'] = undefined;

/**
 * The profile integration ID for which this limit counter is used.
 * @member {String} profileIntegrationId
 */
LimitCounter.prototype['profileIntegrationId'] = undefined;

/**
 * The coupon ID for which this limit counter is used.
 * @member {Number} couponId
 */
LimitCounter.prototype['couponId'] = undefined;

/**
 * The coupon value for which this limit counter is used.
 * @member {String} couponValue
 */
LimitCounter.prototype['couponValue'] = undefined;

/**
 * The referral ID for which this limit counter is used.
 * @member {Number} referralId
 */
LimitCounter.prototype['referralId'] = undefined;

/**
 * The referral value for which this limit counter is used.
 * @member {String} referralValue
 */
LimitCounter.prototype['referralValue'] = undefined;

/**
 * The arbitrary identifier for which this limit counter is used.
 * @member {Number} identifier
 */
LimitCounter.prototype['identifier'] = undefined;

/**
 * The time period for which this limit counter is used.
 * @member {String} period
 */
LimitCounter.prototype['period'] = undefined;

/**
 * The highest possible value for this limit counter.
 * @member {Number} limit
 */
LimitCounter.prototype['limit'] = undefined;

/**
 * The current value for this limit counter.
 * @member {Number} counter
 */
LimitCounter.prototype['counter'] = undefined;






export default LimitCounter;
