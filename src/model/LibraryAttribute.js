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
    root.TalonOne.LibraryAttribute = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LibraryAttribute model module.
   * @module model/LibraryAttribute
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>LibraryAttribute</code>.
   * 
   * @alias module:model/LibraryAttribute
   * @class
   * @param entity {module:model/LibraryAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
   * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
   * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
   * @param type {module:model/LibraryAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
   * @param description {String} A description of the attribute.
   * @param presets {Array.<String>} The presets that indicate to which industry the attribute applies to.
   * @param suggestions {Array.<String>} Short suggestions that are used to group attributes.
   */
  var exports = function(entity, name, title, type, description, presets, suggestions) {
    var _this = this;

    _this['entity'] = entity;
    _this['name'] = name;
    _this['title'] = title;
    _this['type'] = type;
    _this['description'] = description;
    _this['presets'] = presets;
    _this['suggestions'] = suggestions;
  };

  /**
   * Constructs a <code>LibraryAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LibraryAttribute} obj Optional instance to populate.
   * @return {module:model/LibraryAttribute} The populated <code>LibraryAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entity')) {
        obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('presets')) {
        obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
      }
      if (data.hasOwnProperty('suggestions')) {
        obj['suggestions'] = ApiClient.convertToType(data['suggestions'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
   * @member {module:model/LibraryAttribute.EntityEnum} entity
   */
  exports.prototype['entity'] = undefined;
  /**
   * The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
   * @member {module:model/LibraryAttribute.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A description of the attribute.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The presets that indicate to which industry the attribute applies to.
   * @member {Array.<String>} presets
   */
  exports.prototype['presets'] = undefined;
  /**
   * Short suggestions that are used to group attributes.
   * @member {Array.<String>} suggestions
   */
  exports.prototype['suggestions'] = undefined;


  /**
   * Allowed values for the <code>entity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityEnum = {
    /**
     * value: "Application"
     * @const
     */
    "Application": "Application",
    /**
     * value: "Campaign"
     * @const
     */
    "Campaign": "Campaign",
    /**
     * value: "CustomerProfile"
     * @const
     */
    "CustomerProfile": "CustomerProfile",
    /**
     * value: "CustomerSession"
     * @const
     */
    "CustomerSession": "CustomerSession",
    /**
     * value: "CartItem"
     * @const
     */
    "CartItem": "CartItem",
    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",
    /**
     * value: "Event"
     * @const
     */
    "Event": "Event"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "time"
     * @const
     */
    "time": "time"  };


  return exports;
}));


