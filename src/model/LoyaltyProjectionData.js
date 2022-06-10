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
 * The LoyaltyProjectionData model module.
 * @module model/LoyaltyProjectionData
 * @version 4.5.0
 */
class LoyaltyProjectionData {
    /**
     * Constructs a new <code>LoyaltyProjectionData</code>.
     * @alias module:model/LoyaltyProjectionData
     * @param _date {Date} Specific date of projection.
     * @param expiringPoints {Number} Points that will be expired by the specified date.
     * @param activatingPoints {Number} Points that will be active by the specified date.
     * @param projectedBalance {Number} Current balance plus projected active points, minus expiring points.
     */
    constructor(_date, expiringPoints, activatingPoints, projectedBalance) { 
        
        LoyaltyProjectionData.initialize(this, _date, expiringPoints, activatingPoints, projectedBalance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _date, expiringPoints, activatingPoints, projectedBalance) { 
        obj['date'] = _date;
        obj['expiringPoints'] = expiringPoints;
        obj['activatingPoints'] = activatingPoints;
        obj['projectedBalance'] = projectedBalance;
    }

    /**
     * Constructs a <code>LoyaltyProjectionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProjectionData} obj Optional instance to populate.
     * @return {module:model/LoyaltyProjectionData} The populated <code>LoyaltyProjectionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyProjectionData();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('expiringPoints')) {
                obj['expiringPoints'] = ApiClient.convertToType(data['expiringPoints'], 'Number');
            }
            if (data.hasOwnProperty('activatingPoints')) {
                obj['activatingPoints'] = ApiClient.convertToType(data['activatingPoints'], 'Number');
            }
            if (data.hasOwnProperty('projectedBalance')) {
                obj['projectedBalance'] = ApiClient.convertToType(data['projectedBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Specific date of projection.
 * @member {Date} date
 */
LoyaltyProjectionData.prototype['date'] = undefined;

/**
 * Points that will be expired by the specified date.
 * @member {Number} expiringPoints
 */
LoyaltyProjectionData.prototype['expiringPoints'] = undefined;

/**
 * Points that will be active by the specified date.
 * @member {Number} activatingPoints
 */
LoyaltyProjectionData.prototype['activatingPoints'] = undefined;

/**
 * Current balance plus projected active points, minus expiring points.
 * @member {Number} projectedBalance
 */
LoyaltyProjectionData.prototype['projectedBalance'] = undefined;






export default LoyaltyProjectionData;
