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

/**
 * The NewEventType model module.
 * @module model/NewEventType
 * @version 4.0.0
 */
class NewEventType {
    /**
     * Constructs a new <code>NewEventType</code>.
     * 
     * @alias module:model/NewEventType
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
     * @param title {String} The human-friendly display name for this event type. Use a short, past-tense, description of the event.
     * @param name {String} The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created.
     * @param description {String} An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  > The \"Payment Accepted\" event is triggered after successful processing of a payment by our payment gateway. 
     * @param mimeType {module:model/NewEventType.MimeTypeEnum} This defines how the request payload will be parsed before your handler code is run.
     * @param handler {String} Code that will be run after successful parsing & validation of the payload for this event. This code _may_ choose to evaluate campaign rules. 
     * @param version {Number} The version of this event type. When updating an existing event type this must be **exactly** `currentVersion + 1`. 
     */
    constructor(applicationIds, title, name, description, mimeType, handler, version) { 
        
        NewEventType.initialize(this, applicationIds, title, name, description, mimeType, handler, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationIds, title, name, description, mimeType, handler, version) { 
        obj['applicationIds'] = applicationIds;
        obj['title'] = title;
        obj['name'] = name;
        obj['description'] = description;
        obj['mimeType'] = mimeType;
        obj['handler'] = handler;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>NewEventType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewEventType} obj Optional instance to populate.
     * @return {module:model/NewEventType} The populated <code>NewEventType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewEventType();

            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('examplePayload')) {
                obj['examplePayload'] = ApiClient.convertToType(data['examplePayload'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], Object);
            }
            if (data.hasOwnProperty('handlerLanguage')) {
                obj['handlerLanguage'] = ApiClient.convertToType(data['handlerLanguage'], 'String');
            }
            if (data.hasOwnProperty('handler')) {
                obj['handler'] = ApiClient.convertToType(data['handler'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */
NewEventType.prototype['applicationIds'] = undefined;

/**
 * The human-friendly display name for this event type. Use a short, past-tense, description of the event.
 * @member {String} title
 */
NewEventType.prototype['title'] = undefined;

/**
 * The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created.
 * @member {String} name
 */
NewEventType.prototype['name'] = undefined;

/**
 * An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  > The \"Payment Accepted\" event is triggered after successful processing of a payment by our payment gateway. 
 * @member {String} description
 */
NewEventType.prototype['description'] = undefined;

/**
 * This defines how the request payload will be parsed before your handler code is run.
 * @member {module:model/NewEventType.MimeTypeEnum} mimeType
 */
NewEventType.prototype['mimeType'] = undefined;

/**
 * It is often helpful to include an example payload with the event type definition for documentation purposes.
 * @member {String} examplePayload
 */
NewEventType.prototype['examplePayload'] = undefined;

/**
 * It is strongly recommended to define a JSON schema that will be used to perform structural validation of request payloads after parsing. 
 * @member {Object} schema
 */
NewEventType.prototype['schema'] = undefined;

/**
 * The language of the handler code. Currently only `\"talang\"` is supported.
 * @member {module:model/NewEventType.HandlerLanguageEnum} handlerLanguage
 */
NewEventType.prototype['handlerLanguage'] = undefined;

/**
 * Code that will be run after successful parsing & validation of the payload for this event. This code _may_ choose to evaluate campaign rules. 
 * @member {String} handler
 */
NewEventType.prototype['handler'] = undefined;

/**
 * The version of this event type. When updating an existing event type this must be **exactly** `currentVersion + 1`. 
 * @member {Number} version
 */
NewEventType.prototype['version'] = undefined;





/**
 * Allowed values for the <code>mimeType</code> property.
 * @enum {String}
 * @readonly
 */
NewEventType['MimeTypeEnum'] = {

    /**
     * value: "application/json"
     * @const
     */
    "application/json": "application/json",

    /**
     * value: "application/x-www-form-urlencoded"
     * @const
     */
    "application/x-www-form-urlencoded": "application/x-www-form-urlencoded",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>handlerLanguage</code> property.
 * @enum {String}
 * @readonly
 */
NewEventType['HandlerLanguageEnum'] = {

    /**
     * value: "talang"
     * @const
     */
    "talang": "talang"
};



export default NewEventType;

