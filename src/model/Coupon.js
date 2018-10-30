/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.Coupon = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Coupon model module.
   * @module model/Coupon
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Coupon</code>.
   * 
   * @alias module:model/Coupon
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param campaignId {Number} The ID of the campaign that owns this entity.
   * @param value {String} The actual coupon code.
   * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @param usageCounter {Number} The number of times this coupon has been successfully used.
   */
  var exports = function(id, created, campaignId, value, usageLimit, usageCounter) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['campaignId'] = campaignId;
    _this['value'] = value;
    _this['usageLimit'] = usageLimit;


    _this['usageCounter'] = usageCounter;





  };

  /**
   * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Coupon} obj Optional instance to populate.
   * @return {module:model/Coupon} The populated <code>Coupon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('usageLimit')) {
        obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('usageCounter')) {
        obj['usageCounter'] = ApiClient.convertToType(data['usageCounter'], 'Number');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('referralId')) {
        obj['referralId'] = ApiClient.convertToType(data['referralId'], 'Number');
      }
      if (data.hasOwnProperty('recipientIntegrationId')) {
        obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
      }
      if (data.hasOwnProperty('importId')) {
        obj['importId'] = ApiClient.convertToType(data['importId'], 'Number');
      }
      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The ID of the campaign that owns this entity.
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * The actual coupon code.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @member {Number} usageLimit
   */
  exports.prototype['usageLimit'] = undefined;
  /**
   * Timestamp at which point the coupon becomes valid.
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * The number of times this coupon has been successfully used.
   * @member {Number} usageCounter
   */
  exports.prototype['usageCounter'] = undefined;
  /**
   * Arbitrary properties associated with this item
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * The integration ID of the referring customer (if any) for whom this coupon was created as an effect.
   * @member {Number} referralId
   */
  exports.prototype['referralId'] = undefined;
  /**
   * The integration ID of a referred customer profile.
   * @member {String} recipientIntegrationId
   */
  exports.prototype['recipientIntegrationId'] = undefined;
  /**
   * The ID of the Import which created this coupon.
   * @member {Number} importId
   */
  exports.prototype['importId'] = undefined;
  /**
   * The id of the batch the coupon belongs to.
   * @member {String} batchId
   */
  exports.prototype['batchId'] = undefined;



  return exports;
}));


