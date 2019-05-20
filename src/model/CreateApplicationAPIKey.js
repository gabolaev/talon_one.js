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
    root.TalononeApi.CreateApplicationAPIKey = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateApplicationAPIKey model module.
   * @module model/CreateApplicationAPIKey
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateApplicationAPIKey</code>.
   * @alias module:model/CreateApplicationAPIKey
   * @class
   * @param expires {Date} The date the API key expired
   */
  var exports = function(expires) {
    var _this = this;

    _this['expires'] = expires;
  };

  /**
   * Constructs a <code>CreateApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateApplicationAPIKey} obj Optional instance to populate.
   * @return {module:model/CreateApplicationAPIKey} The populated <code>CreateApplicationAPIKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The date the API key expired
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;



  return exports;
}));

