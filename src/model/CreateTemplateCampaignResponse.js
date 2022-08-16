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
import Campaign from './Campaign';
import Collection from './Collection';
import Ruleset from './Ruleset';

/**
 * The CreateTemplateCampaignResponse model module.
 * @module model/CreateTemplateCampaignResponse
 * @version 4.6.0
 */
class CreateTemplateCampaignResponse {
    /**
     * Constructs a new <code>CreateTemplateCampaignResponse</code>.
     * @alias module:model/CreateTemplateCampaignResponse
     * @param campaign {module:model/Campaign} 
     * @param ruleset {module:model/Ruleset} 
     */
    constructor(campaign, ruleset) { 
        
        CreateTemplateCampaignResponse.initialize(this, campaign, ruleset);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaign, ruleset) { 
        obj['campaign'] = campaign;
        obj['ruleset'] = ruleset;
    }

    /**
     * Constructs a <code>CreateTemplateCampaignResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTemplateCampaignResponse} obj Optional instance to populate.
     * @return {module:model/CreateTemplateCampaignResponse} The populated <code>CreateTemplateCampaignResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTemplateCampaignResponse();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = Campaign.constructFromObject(data['campaign']);
            }
            if (data.hasOwnProperty('ruleset')) {
                obj['ruleset'] = Ruleset.constructFromObject(data['ruleset']);
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Collection]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Campaign} campaign
 */
CreateTemplateCampaignResponse.prototype['campaign'] = undefined;

/**
 * @member {module:model/Ruleset} ruleset
 */
CreateTemplateCampaignResponse.prototype['ruleset'] = undefined;

/**
 * @member {Array.<module:model/Collection>} collections
 */
CreateTemplateCampaignResponse.prototype['collections'] = undefined;






export default CreateTemplateCampaignResponse;

