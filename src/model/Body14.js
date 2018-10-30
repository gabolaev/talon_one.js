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
    root.TalononeApi.Body14 = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body14 model module.
   * @module model/Body14
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body14</code>.
   * @alias module:model/Body14
   * @class
   * @param name {String} The name of this API key.
   * @param roleId {Number} ID of the role to be used.
   */
  var exports = function(name, roleId) {
    var _this = this;

    _this['name'] = name;

    _this['roleId'] = roleId;

  };

  /**
   * Constructs a <code>Body14</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body14} obj Optional instance to populate.
   * @return {module:model/Body14} The populated <code>Body14</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('roleId')) {
        obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Number');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name of this API key.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A longer description of the API key.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * ID of the role to be used.
   * @member {Number} roleId
   */
  exports.prototype['roleId'] = undefined;
  /**
   * ID of the application to be used for integration requests.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;



  return exports;
}));


