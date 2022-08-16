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
 * The MultiApplicationEntity model module.
 * @module model/MultiApplicationEntity
 * @version 4.6.0
 */
class MultiApplicationEntity {
    /**
     * Constructs a new <code>MultiApplicationEntity</code>.
     * @alias module:model/MultiApplicationEntity
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
     */
    constructor(applicationIds) { 
        
        MultiApplicationEntity.initialize(this, applicationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationIds) { 
        obj['applicationIds'] = applicationIds;
    }

    /**
     * Constructs a <code>MultiApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiApplicationEntity} obj Optional instance to populate.
     * @return {module:model/MultiApplicationEntity} The populated <code>MultiApplicationEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiApplicationEntity();

            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */
MultiApplicationEntity.prototype['applicationIds'] = undefined;






export default MultiApplicationEntity;

