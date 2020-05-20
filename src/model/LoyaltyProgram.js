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
 * The LoyaltyProgram model module.
 * @module model/LoyaltyProgram
 * @version 4.1.0
 */
class LoyaltyProgram {
    /**
     * Constructs a new <code>LoyaltyProgram</code>.
     * A Loyalty Program
     * @alias module:model/LoyaltyProgram
     * @param id {Number} The ID of loyalty program.
     * @param accountID {Number} The ID of the Talon.One account that owns this program.
     * @param name {String} The internal name for the Loyalty Program.
     * @param title {String} The display title for the Loyalty Program.
     * @param description {String} Description of our Loyalty Program.
     * @param subscribedApplications {Array.<Number>} A list containing the IDs of all applications that are subscribed to this Loyalty Program.
     * @param defaultValidity {String} Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
     * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program
     */
    constructor(id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger) { 
        
        LoyaltyProgram.initialize(this, id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger) { 
        obj['id'] = id;
        obj['accountID'] = accountID;
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
        obj['subscribedApplications'] = subscribedApplications;
        obj['defaultValidity'] = defaultValidity;
        obj['allowSubledger'] = allowSubledger;
    }

    /**
     * Constructs a <code>LoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgram} The populated <code>LoyaltyProgram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyProgram();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplications')) {
                obj['subscribedApplications'] = ApiClient.convertToType(data['subscribedApplications'], ['Number']);
            }
            if (data.hasOwnProperty('defaultValidity')) {
                obj['defaultValidity'] = ApiClient.convertToType(data['defaultValidity'], 'String');
            }
            if (data.hasOwnProperty('allowSubledger')) {
                obj['allowSubledger'] = ApiClient.convertToType(data['allowSubledger'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The ID of loyalty program.
 * @member {Number} id
 */
LoyaltyProgram.prototype['id'] = undefined;

/**
 * The ID of the Talon.One account that owns this program.
 * @member {Number} accountID
 */
LoyaltyProgram.prototype['accountID'] = undefined;

/**
 * The internal name for the Loyalty Program.
 * @member {String} name
 */
LoyaltyProgram.prototype['name'] = undefined;

/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */
LoyaltyProgram.prototype['title'] = undefined;

/**
 * Description of our Loyalty Program.
 * @member {String} description
 */
LoyaltyProgram.prototype['description'] = undefined;

/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */
LoyaltyProgram.prototype['subscribedApplications'] = undefined;

/**
 * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
 * @member {String} defaultValidity
 */
LoyaltyProgram.prototype['defaultValidity'] = undefined;

/**
 * Indicates if this program supports subledgers inside the program
 * @member {Boolean} allowSubledger
 */
LoyaltyProgram.prototype['allowSubledger'] = undefined;






export default LoyaltyProgram;

