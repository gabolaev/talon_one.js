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
    root.TalonOne.AttributesMandatory = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AttributesMandatory model module.
   * @module model/AttributesMandatory
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>AttributesMandatory</code>.
   * Arbitrary settings associated with attributes.
   * @alias module:model/AttributesMandatory
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AttributesMandatory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttributesMandatory} obj Optional instance to populate.
   * @return {module:model/AttributesMandatory} The populated <code>AttributesMandatory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ApiClient.convertToType(data['campaigns'], ['String']);
      }
      if (data.hasOwnProperty('coupons')) {
        obj['coupons'] = ApiClient.convertToType(data['coupons'], ['String']);
      }
    }
    return obj;
  }

  /**
   * List of mandatory attributes for campaigns.
   * @member {Array.<String>} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * List of mandatory attributes for campaigns.
   * @member {Array.<String>} coupons
   */
  exports.prototype['coupons'] = undefined;



  return exports;
}));

