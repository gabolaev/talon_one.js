/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OutgoingIntegrationWebhookTemplate model module.
 * @module model/OutgoingIntegrationWebhookTemplate
 * @version 5.0.0
 */
class OutgoingIntegrationWebhookTemplate {
    /**
     * Constructs a new <code>OutgoingIntegrationWebhookTemplate</code>.
     * @alias module:model/OutgoingIntegrationWebhookTemplate
     * @param id {Number} Unique Id for this entity.
     * @param integrationType {Number} Unique Id of outgoing integration type.
     * @param title {String} Title of the webhook template.
     * @param description {String} General description for the specific outgoing integration webhook template.
     * @param payload {String} API payload (supports templating using parameters) for this webhook template.
     * @param method {module:model/OutgoingIntegrationWebhookTemplate.MethodEnum} API method for this webhook.
     */
    constructor(id, integrationType, title, description, payload, method) { 
        
        OutgoingIntegrationWebhookTemplate.initialize(this, id, integrationType, title, description, payload, method);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, integrationType, title, description, payload, method) { 
        obj['id'] = id;
        obj['integrationType'] = integrationType;
        obj['title'] = title;
        obj['description'] = description;
        obj['payload'] = payload;
        obj['method'] = method;
    }

    /**
     * Constructs a <code>OutgoingIntegrationWebhookTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutgoingIntegrationWebhookTemplate} obj Optional instance to populate.
     * @return {module:model/OutgoingIntegrationWebhookTemplate} The populated <code>OutgoingIntegrationWebhookTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutgoingIntegrationWebhookTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique Id for this entity.
 * @member {Number} id
 */
OutgoingIntegrationWebhookTemplate.prototype['id'] = undefined;

/**
 * Unique Id of outgoing integration type.
 * @member {Number} integrationType
 */
OutgoingIntegrationWebhookTemplate.prototype['integrationType'] = undefined;

/**
 * Title of the webhook template.
 * @member {String} title
 */
OutgoingIntegrationWebhookTemplate.prototype['title'] = undefined;

/**
 * General description for the specific outgoing integration webhook template.
 * @member {String} description
 */
OutgoingIntegrationWebhookTemplate.prototype['description'] = undefined;

/**
 * API payload (supports templating using parameters) for this webhook template.
 * @member {String} payload
 */
OutgoingIntegrationWebhookTemplate.prototype['payload'] = undefined;

/**
 * API method for this webhook.
 * @member {module:model/OutgoingIntegrationWebhookTemplate.MethodEnum} method
 */
OutgoingIntegrationWebhookTemplate.prototype['method'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
OutgoingIntegrationWebhookTemplate['MethodEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH"
};



export default OutgoingIntegrationWebhookTemplate;
