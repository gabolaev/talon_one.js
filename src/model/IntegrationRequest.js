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
import NewCustomerSessionV2 from './NewCustomerSessionV2';

/**
 * The IntegrationRequest model module.
 * @module model/IntegrationRequest
 * @version 4.1.0
 */
class IntegrationRequest {
    /**
     * Constructs a new <code>IntegrationRequest</code>.
     * The body of a V2 integration API request (customer session update). Next to the customer session details, this contains an optional listing of extra properties that should be returned in the response.
     * @alias module:model/IntegrationRequest
     * @param customerSession {module:model/NewCustomerSessionV2} 
     */
    constructor(customerSession) { 
        
        IntegrationRequest.initialize(this, customerSession);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customerSession) { 
        obj['customerSession'] = customerSession;
    }

    /**
     * Constructs a <code>IntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationRequest} obj Optional instance to populate.
     * @return {module:model/IntegrationRequest} The populated <code>IntegrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationRequest();

            if (data.hasOwnProperty('customerSession')) {
                obj['customerSession'] = NewCustomerSessionV2.constructFromObject(data['customerSession']);
            }
            if (data.hasOwnProperty('responseContent')) {
                obj['responseContent'] = ApiClient.convertToType(data['responseContent'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewCustomerSessionV2} customerSession
 */
IntegrationRequest.prototype['customerSession'] = undefined;

/**
 * Optional list of requested information to be present on the response related to the customer session update. Currently supported: \"customerSession\", \"customerProfile\", \"coupons\", \"triggeredCampaigns\", \"referral\", \"loyalty\" and \"event\". 
 * @member {Array.<module:model/IntegrationRequest.ResponseContentEnum>} responseContent
 */
IntegrationRequest.prototype['responseContent'] = undefined;





/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */
IntegrationRequest['ResponseContentEnum'] = {

    /**
     * value: "customerSession"
     * @const
     */
    "customerSession": "customerSession",

    /**
     * value: "customerProfile"
     * @const
     */
    "customerProfile": "customerProfile",

    /**
     * value: "coupons"
     * @const
     */
    "coupons": "coupons",

    /**
     * value: "triggeredCampaigns"
     * @const
     */
    "triggeredCampaigns": "triggeredCampaigns",

    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",

    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",

    /**
     * value: "event"
     * @const
     */
    "event": "event"
};



export default IntegrationRequest;

