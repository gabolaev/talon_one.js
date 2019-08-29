/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
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
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.LimitConfig = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LimitConfig model module.
   * @module model/LimitConfig
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>LimitConfig</code>.
   * @alias module:model/LimitConfig
   * @class
   * @param action {module:model/LimitConfig.ActionEnum} The limitable action to which this limit will be applied
   * @param limit {Number} The value to set for the limit
   * @param entities {Array.<module:model/LimitConfig.EntitiesEnum>} The entities that make the address of this limit
   */
  var exports = function(action, limit, entities) {
    var _this = this;

    _this['action'] = action;
    _this['limit'] = limit;
    _this['entities'] = entities;
  };

  /**
   * Constructs a <code>LimitConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimitConfig} obj Optional instance to populate.
   * @return {module:model/LimitConfig} The populated <code>LimitConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('entities')) {
        obj['entities'] = ApiClient.convertToType(data['entities'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The limitable action to which this limit will be applied
   * @member {module:model/LimitConfig.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * The value to set for the limit
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The entities that make the address of this limit
   * @member {Array.<module:model/LimitConfig.EntitiesEnum>} entities
   */
  exports.prototype['entities'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "redeemCoupon"
     * @const
     */
    "redeemCoupon": "redeemCoupon",
    /**
     * value: "redeemReferral"
     * @const
     */
    "redeemReferral": "redeemReferral",
    /**
     * value: "setDiscount"
     * @const
     */
    "setDiscount": "setDiscount",
    /**
     * value: "createCoupon"
     * @const
     */
    "createCoupon": "createCoupon"  };

  /**
   * Allowed values for the <code>entities</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntitiesEnum = {
    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",
    /**
     * value: "Referral"
     * @const
     */
    "Referral": "Referral",
    /**
     * value: "Profile"
     * @const
     */
    "Profile": "Profile",
    /**
     * value: "Identifier"
     * @const
     */
    "Identifier": "Identifier"  };


  return exports;
}));


