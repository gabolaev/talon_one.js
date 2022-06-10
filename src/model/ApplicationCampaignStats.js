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
 * The ApplicationCampaignStats model module.
 * @module model/ApplicationCampaignStats
 * @version 4.5.0
 */
class ApplicationCampaignStats {
    /**
     * Constructs a new <code>ApplicationCampaignStats</code>.
     * Provides statistics regarding an application&#39;s campaigns
     * @alias module:model/ApplicationCampaignStats
     * @param draft {Number} Number of draft campaigns
     * @param disabled {Number} Number of disabled campaigns
     * @param scheduled {Number} Number of scheduled campaigns
     * @param running {Number} Number of running campaigns
     * @param expired {Number} Number of expired campaigns
     * @param archived {Number} Number of archived campaigns
     */
    constructor(draft, disabled, scheduled, running, expired, archived) { 
        
        ApplicationCampaignStats.initialize(this, draft, disabled, scheduled, running, expired, archived);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, draft, disabled, scheduled, running, expired, archived) { 
        obj['draft'] = draft;
        obj['disabled'] = disabled;
        obj['scheduled'] = scheduled;
        obj['running'] = running;
        obj['expired'] = expired;
        obj['archived'] = archived;
    }

    /**
     * Constructs a <code>ApplicationCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCampaignStats} obj Optional instance to populate.
     * @return {module:model/ApplicationCampaignStats} The populated <code>ApplicationCampaignStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCampaignStats();

            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Number');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Number');
            }
            if (data.hasOwnProperty('scheduled')) {
                obj['scheduled'] = ApiClient.convertToType(data['scheduled'], 'Number');
            }
            if (data.hasOwnProperty('running')) {
                obj['running'] = ApiClient.convertToType(data['running'], 'Number');
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiClient.convertToType(data['expired'], 'Number');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of draft campaigns
 * @member {Number} draft
 */
ApplicationCampaignStats.prototype['draft'] = undefined;

/**
 * Number of disabled campaigns
 * @member {Number} disabled
 */
ApplicationCampaignStats.prototype['disabled'] = undefined;

/**
 * Number of scheduled campaigns
 * @member {Number} scheduled
 */
ApplicationCampaignStats.prototype['scheduled'] = undefined;

/**
 * Number of running campaigns
 * @member {Number} running
 */
ApplicationCampaignStats.prototype['running'] = undefined;

/**
 * Number of expired campaigns
 * @member {Number} expired
 */
ApplicationCampaignStats.prototype['expired'] = undefined;

/**
 * Number of archived campaigns
 * @member {Number} archived
 */
ApplicationCampaignStats.prototype['archived'] = undefined;






export default ApplicationCampaignStats;
