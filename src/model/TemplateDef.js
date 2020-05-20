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
import TemplateArgDef from './TemplateArgDef';

/**
 * The TemplateDef model module.
 * @module model/TemplateDef
 * @version 4.1.0
 */
class TemplateDef {
    /**
     * Constructs a new <code>TemplateDef</code>.
     * 
     * @alias module:model/TemplateDef
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
     * @param description {String} A short description of the template that will be shown in the rule editor.
     * @param help {String} Extended help text for the template.
     * @param category {String} Used for grouping templates in the rule editor sidebar.
     * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
     * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
     * @param name {String} The template name used in Talang.
     */
    constructor(id, created, applicationId, title, description, help, category, expr, args, name) { 
        
        TemplateDef.initialize(this, id, created, applicationId, title, description, help, category, expr, args, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, title, description, help, category, expr, args, name) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['title'] = title;
        obj['description'] = description;
        obj['help'] = help;
        obj['category'] = category;
        obj['expr'] = expr;
        obj['args'] = args;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDef} obj Optional instance to populate.
     * @return {module:model/TemplateDef} The populated <code>TemplateDef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateDef();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('expr')) {
                obj['expr'] = ApiClient.convertToType(data['expr'], [Object]);
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [TemplateArgDef]);
            }
            if (data.hasOwnProperty('expose')) {
                obj['expose'] = ApiClient.convertToType(data['expose'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
TemplateDef.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
TemplateDef.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
TemplateDef.prototype['applicationId'] = undefined;

/**
 * Campaigner-friendly name for the template that will be shown in the rule editor.
 * @member {String} title
 */
TemplateDef.prototype['title'] = undefined;

/**
 * A short description of the template that will be shown in the rule editor.
 * @member {String} description
 */
TemplateDef.prototype['description'] = undefined;

/**
 * Extended help text for the template.
 * @member {String} help
 */
TemplateDef.prototype['help'] = undefined;

/**
 * Used for grouping templates in the rule editor sidebar.
 * @member {String} category
 */
TemplateDef.prototype['category'] = undefined;

/**
 * A Talang expression that contains variable bindings referring to args.
 * @member {Array.<Object>} expr
 */
TemplateDef.prototype['expr'] = undefined;

/**
 * An array of argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} args
 */
TemplateDef.prototype['args'] = undefined;

/**
 * A flag to control exposure in Rule Builder.
 * @member {Boolean} expose
 * @default false
 */
TemplateDef.prototype['expose'] = false;

/**
 * The template name used in Talang.
 * @member {String} name
 */
TemplateDef.prototype['name'] = undefined;






export default TemplateDef;

