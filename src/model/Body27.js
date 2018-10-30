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
    root.TalononeApi.Body27 = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body27 model module.
   * @module model/Body27
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body27</code>.
   * @alias module:model/Body27
   * @class
   * @param companyName {String} Name of your company.
   * @param billingEmail {String} The billing email address associated with your company account.
   */
  var exports = function(companyName, billingEmail) {
    var _this = this;

    _this['companyName'] = companyName;
    _this['billingEmail'] = billingEmail;
  };

  /**
   * Constructs a <code>Body27</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body27} obj Optional instance to populate.
   * @return {module:model/Body27} The populated <code>Body27</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('billingEmail')) {
        obj['billingEmail'] = ApiClient.convertToType(data['billingEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of your company.
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * The billing email address associated with your company account.
   * @member {String} billingEmail
   */
  exports.prototype['billingEmail'] = undefined;



  return exports;
}));


