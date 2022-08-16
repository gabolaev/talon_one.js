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
 * The PatchItemCatalogAction model module.
 * @module model/PatchItemCatalogAction
 * @version 4.6.0
 */
class PatchItemCatalogAction {
    /**
     * Constructs a new <code>PatchItemCatalogAction</code>.
     * The specific properties of the \&quot;PATCH\&quot; catalog sync action.
     * @alias module:model/PatchItemCatalogAction
     * @param sku {String} The unique SKU of the item to patch.
     */
    constructor(sku) { 
        
        PatchItemCatalogAction.initialize(this, sku);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sku) { 
        obj['sku'] = sku;
    }

    /**
     * Constructs a <code>PatchItemCatalogAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchItemCatalogAction} obj Optional instance to populate.
     * @return {module:model/PatchItemCatalogAction} The populated <code>PatchItemCatalogAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchItemCatalogAction();

            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('createIfNotExists')) {
                obj['createIfNotExists'] = ApiClient.convertToType(data['createIfNotExists'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The unique SKU of the item to patch.
 * @member {String} sku
 */
PatchItemCatalogAction.prototype['sku'] = undefined;

/**
 * Price of the item.
 * @member {Number} price
 */
PatchItemCatalogAction.prototype['price'] = undefined;

/**
 * The attributes of the item to patch.
 * @member {Object} attributes
 */
PatchItemCatalogAction.prototype['attributes'] = undefined;

/**
 * Indicates whether to create an item if the SKU does not exist.
 * @member {Boolean} createIfNotExists
 * @default false
 */
PatchItemCatalogAction.prototype['createIfNotExists'] = false;






export default PatchItemCatalogAction;

