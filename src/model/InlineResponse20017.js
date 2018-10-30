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
    define(['ApiClient', 'model/InlineResponse20016Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20016Data'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.InlineResponse20017 = factory(root.TalononeApi.ApiClient, root.TalononeApi.InlineResponse20016Data);
  }
}(this, function(ApiClient, InlineResponse20016Data) {
  'use strict';




  /**
   * The InlineResponse20017 model module.
   * @module model/InlineResponse20017
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * @alias module:model/InlineResponse20017
   * @class
   * @param hasMore {Boolean} 
   * @param data {Array.<module:model/InlineResponse20016Data>} 
   */
  var exports = function(hasMore, data) {
    var _this = this;

    _this['hasMore'] = hasMore;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hasMore')) {
        obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20016Data]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} hasMore
   */
  exports.prototype['hasMore'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse20016Data>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


