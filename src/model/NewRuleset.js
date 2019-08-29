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
    define(['ApiClient', 'model/Binding', 'model/Rule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Binding'), require('./Rule'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.NewRuleset = factory(root.TalonOne.ApiClient, root.TalonOne.Binding, root.TalonOne.Rule);
  }
}(this, function(ApiClient, Binding, Rule) {
  'use strict';




  /**
   * The NewRuleset model module.
   * @module model/NewRuleset
   * @version 3.1.0
   */

  /**
   * Constructs a new <code>NewRuleset</code>.
   * @alias module:model/NewRuleset
   * @class
   * @param rules {Array.<module:model/Rule>} Set of rules to apply.
   * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   */
  var exports = function(rules, bindings) {
    var _this = this;

    _this['rules'] = rules;
    _this['bindings'] = bindings;


  };

  /**
   * Constructs a <code>NewRuleset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewRuleset} obj Optional instance to populate.
   * @return {module:model/NewRuleset} The populated <code>NewRuleset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
      }
      if (data.hasOwnProperty('bindings')) {
        obj['bindings'] = ApiClient.convertToType(data['bindings'], [Binding]);
      }
      if (data.hasOwnProperty('rbVersion')) {
        obj['rbVersion'] = ApiClient.convertToType(data['rbVersion'], 'String');
      }
      if (data.hasOwnProperty('activate')) {
        obj['activate'] = ApiClient.convertToType(data['activate'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Set of rules to apply.
   * @member {Array.<module:model/Rule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   * @member {Array.<module:model/Binding>} bindings
   */
  exports.prototype['bindings'] = undefined;
  /**
   * A string indicating which version of the rulebuilder was used to create this ruleset.
   * @member {String} rbVersion
   */
  exports.prototype['rbVersion'] = undefined;
  /**
   * A boolean indicating whether this newly created ruleset should also be activated for the campaign owns it
   * @member {Boolean} activate
   */
  exports.prototype['activate'] = undefined;



  return exports;
}));


