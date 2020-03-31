/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttributesSettings from './AttributesSettings';
import LimitConfig from './LimitConfig';

/**
 * The NewApplication model module.
 * @module model/NewApplication
 * @version 4.0.0
 */
class NewApplication {
    /**
     * Constructs a new <code>NewApplication</code>.
     * 
     * @alias module:model/NewApplication
     * @param name {String} The name of this application.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param currency {String} A string describing a default currency for new customer sessions.
     */
    constructor(name, timezone, currency) { 
        
        NewApplication.initialize(this, name, timezone, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, timezone, currency) { 
        obj['name'] = name;
        obj['timezone'] = timezone;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>NewApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplication} obj Optional instance to populate.
     * @return {module:model/NewApplication} The populated <code>NewApplication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApplication();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('caseSensitivity')) {
                obj['caseSensitivity'] = ApiClient.convertToType(data['caseSensitivity'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [LimitConfig]);
            }
            if (data.hasOwnProperty('attributesSettings')) {
                obj['attributesSettings'] = AttributesSettings.constructFromObject(data['attributesSettings']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of this application.
 * @member {String} name
 */
NewApplication.prototype['name'] = undefined;

/**
 * A longer description of the application.
 * @member {String} description
 */
NewApplication.prototype['description'] = undefined;

/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */
NewApplication.prototype['timezone'] = undefined;

/**
 * A string describing a default currency for new customer sessions.
 * @member {String} currency
 */
NewApplication.prototype['currency'] = undefined;

/**
 * A string indicating how should campaigns in this application deal with case sensitivity on coupon codes.
 * @member {module:model/NewApplication.CaseSensitivityEnum} caseSensitivity
 */
NewApplication.prototype['caseSensitivity'] = undefined;

/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */
NewApplication.prototype['attributes'] = undefined;

/**
 * Default limits for campaigns created in this application
 * @member {Array.<module:model/LimitConfig>} limits
 */
NewApplication.prototype['limits'] = undefined;

/**
 * @member {module:model/AttributesSettings} attributesSettings
 */
NewApplication.prototype['attributesSettings'] = undefined;

/**
 * Hex key for HMAC-signing API calls as coming from this application (16 hex digits)
 * @member {String} key
 */
NewApplication.prototype['key'] = undefined;





/**
 * Allowed values for the <code>caseSensitivity</code> property.
 * @enum {String}
 * @readonly
 */
NewApplication['CaseSensitivityEnum'] = {

    /**
     * value: "sensitive"
     * @const
     */
    "sensitive": "sensitive",

    /**
     * value: "insensitive-uppercase"
     * @const
     */
    "insensitive-uppercase": "insensitive-uppercase",

    /**
     * value: "insensitive-lowercase"
     * @const
     */
    "insensitive-lowercase": "insensitive-lowercase"
};



export default NewApplication;

