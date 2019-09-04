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
    root.TalonOne.ApplicationSessionEntity = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationSessionEntity model module.
   * @module model/ApplicationSessionEntity
   * @version 3.1.1
   */

  /**
   * Constructs a new <code>ApplicationSessionEntity</code>.
   * @alias module:model/ApplicationSessionEntity
   * @class
   * @param sessionId {Number} The globally unique Talon.One ID of the session where this entity was created.
   */
  var exports = function(sessionId) {
    var _this = this;

    _this['sessionId'] = sessionId;
  };

  /**
   * Constructs a <code>ApplicationSessionEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationSessionEntity} obj Optional instance to populate.
   * @return {module:model/ApplicationSessionEntity} The populated <code>ApplicationSessionEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The globally unique Talon.One ID of the session where this entity was created.
   * @member {Number} sessionId
   */
  exports.prototype['sessionId'] = undefined;



  return exports;
}));


