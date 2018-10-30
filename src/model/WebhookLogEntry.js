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
    root.TalononeApi.WebhookLogEntry = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebhookLogEntry model module.
   * @module model/WebhookLogEntry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebhookLogEntry</code>.
   * Log of webhook api calls
   * @alias module:model/WebhookLogEntry
   * @class
   * @param id {String} UUID reference of the webhook request
   * @param integrationRequestUuid {String} UUID reference of the integration request linked to this webhook request
   * @param webhookId {Number} ID of the webhook that triggered the request
   * @param url {String} Target url of request
   * @param request {String} Request message
   * @param requestTime {Date} Timestamp of request
   */
  var exports = function(id, integrationRequestUuid, webhookId, url, request, requestTime) {
    var _this = this;

    _this['id'] = id;
    _this['integrationRequestUuid'] = integrationRequestUuid;
    _this['webhookId'] = webhookId;

    _this['url'] = url;
    _this['request'] = request;


    _this['requestTime'] = requestTime;

  };

  /**
   * Constructs a <code>WebhookLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookLogEntry} obj Optional instance to populate.
   * @return {module:model/WebhookLogEntry} The populated <code>WebhookLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('integrationRequestUuid')) {
        obj['integrationRequestUuid'] = ApiClient.convertToType(data['integrationRequestUuid'], 'String');
      }
      if (data.hasOwnProperty('webhookId')) {
        obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('request')) {
        obj['request'] = ApiClient.convertToType(data['request'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('requestTime')) {
        obj['requestTime'] = ApiClient.convertToType(data['requestTime'], 'Date');
      }
      if (data.hasOwnProperty('responseTime')) {
        obj['responseTime'] = ApiClient.convertToType(data['responseTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * UUID reference of the webhook request
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * UUID reference of the integration request linked to this webhook request
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
   * Target url of request
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Request message
   * @member {String} request
   */
  exports.prototype['request'] = undefined;
  /**
   * Response message
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * HTTP status code of response
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Timestamp of request
   * @member {Date} requestTime
   */
  exports.prototype['requestTime'] = undefined;
  /**
   * Timestamp of response
   * @member {Date} responseTime
   */
  exports.prototype['responseTime'] = undefined;



  return exports;
}));


