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
    root.TalononeApi.WebhookActivationLogEntry = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebhookActivationLogEntry model module.
   * @module model/WebhookActivationLogEntry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebhookActivationLogEntry</code>.
   * Log of activated webhooks
   * @alias module:model/WebhookActivationLogEntry
   * @class
   * @param integrationRequestUuid {String} UUID reference of the integration request that triggered the effect with the webhook
   * @param webhookId {Number} ID of the webhook that triggered the request
   * @param applicationId {Number} ID of the application that triggered the webhook
   * @param campaignId {Number} ID of the campaign that triggered the webhook
   * @param created {Date} Timestamp of request
   */
  var exports = function(integrationRequestUuid, webhookId, applicationId, campaignId, created) {
    var _this = this;

    _this['integrationRequestUuid'] = integrationRequestUuid;
    _this['webhookId'] = webhookId;
    _this['applicationId'] = applicationId;
    _this['campaignId'] = campaignId;
    _this['created'] = created;
  };

  /**
   * Constructs a <code>WebhookActivationLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookActivationLogEntry} obj Optional instance to populate.
   * @return {module:model/WebhookActivationLogEntry} The populated <code>WebhookActivationLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('integrationRequestUuid')) {
        obj['integrationRequestUuid'] = ApiClient.convertToType(data['integrationRequestUuid'], 'String');
      }
      if (data.hasOwnProperty('webhookId')) {
        obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
    }
    return obj;
  }

  /**
   * UUID reference of the integration request that triggered the effect with the webhook
   * @member {String} integrationRequestUuid
   */
  exports.prototype['integrationRequestUuid'] = undefined;
  /**
   * ID of the webhook that triggered the request
   * @member {Number} webhookId
   */
  exports.prototype['webhookId'] = undefined;
  /**
   * ID of the application that triggered the webhook
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * ID of the campaign that triggered the webhook
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * Timestamp of request
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;



  return exports;
}));


