/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The CampaignTemplateParams model module.
 * @module model/CampaignTemplateParams
 * @version 4.6.0
 */
class CampaignTemplateParams {
    /**
     * Constructs a new <code>CampaignTemplateParams</code>.
     * @alias module:model/CampaignTemplateParams
     * @param name {String} Name of the campaign template parameter.
     * @param type {module:model/CampaignTemplateParams.TypeEnum} Defines the type of parameter value.
     * @param description {String} Explains the meaning of this template parameter and the placeholder value that will define it. It is used on campaign creation from this template.
     */
    constructor(name, type, description) { 
        
        CampaignTemplateParams.initialize(this, name, type, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, description) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>CampaignTemplateParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignTemplateParams} obj Optional instance to populate.
     * @return {module:model/CampaignTemplateParams} The populated <code>CampaignTemplateParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignTemplateParams();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attributeId')) {
                obj['attributeId'] = ApiClient.convertToType(data['attributeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of the campaign template parameter.
 * @member {String} name
 */
CampaignTemplateParams.prototype['name'] = undefined;

/**
 * Defines the type of parameter value.
 * @member {module:model/CampaignTemplateParams.TypeEnum} type
 */
CampaignTemplateParams.prototype['type'] = undefined;

/**
 * Explains the meaning of this template parameter and the placeholder value that will define it. It is used on campaign creation from this template.
 * @member {String} description
 */
CampaignTemplateParams.prototype['description'] = undefined;

/**
 * ID of the corresponding attribute.
 * @member {Number} attributeId
 */
CampaignTemplateParams.prototype['attributeId'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignTemplateParams['TypeEnum'] = {

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
     * value: "percent"
     * @const
     */
    "percent": "percent",

    /**
     * value: "(list string)"
     * @const
     */
    "(list string)": "(list string)",

    /**
     * value: "time"
     * @const
     */
    "time": "time"
};



export default CampaignTemplateParams;

