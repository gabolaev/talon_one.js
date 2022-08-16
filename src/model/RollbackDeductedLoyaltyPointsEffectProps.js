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
 * The RollbackDeductedLoyaltyPointsEffectProps model module.
 * @module model/RollbackDeductedLoyaltyPointsEffectProps
 * @version 4.6.0
 */
class RollbackDeductedLoyaltyPointsEffectProps {
    /**
     * Constructs a new <code>RollbackDeductedLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;rollbackDeductedLoyaltyPoints\&quot; effect. This effect is triggered whenever a previously closed session is cancelled and a deductLoyaltyPoints effect was revoked.
     * @alias module:model/RollbackDeductedLoyaltyPointsEffectProps
     * @param programId {Number} The ID of the loyalty program where these points were reimbursed.
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were reimbursed.
     * @param value {Number} The amount of reimbursed points that were added.
     * @param recipientIntegrationId {String} The user for whom these points were reimbursed.
     * @param transactionUUID {String} The identifier of 'addition' entries added to the ledger as the `deductLoyaltyPoints` effect is rolled back.
     */
    constructor(programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        
        RollbackDeductedLoyaltyPointsEffectProps.initialize(this, programId, subLedgerId, value, recipientIntegrationId, transactionUUID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, programId, subLedgerId, value, recipientIntegrationId, transactionUUID) { 
        obj['programId'] = programId;
        obj['subLedgerId'] = subLedgerId;
        obj['value'] = value;
        obj['recipientIntegrationId'] = recipientIntegrationId;
        obj['transactionUUID'] = transactionUUID;
    }

    /**
     * Constructs a <code>RollbackDeductedLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackDeductedLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackDeductedLoyaltyPointsEffectProps} The populated <code>RollbackDeductedLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RollbackDeductedLoyaltyPointsEffectProps();

            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('subLedgerId')) {
                obj['subLedgerId'] = ApiClient.convertToType(data['subLedgerId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('transactionUUID')) {
                obj['transactionUUID'] = ApiClient.convertToType(data['transactionUUID'], 'String');
            }
            if (data.hasOwnProperty('cardIdentifier')) {
                obj['cardIdentifier'] = ApiClient.convertToType(data['cardIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the loyalty program where these points were reimbursed.
 * @member {Number} programId
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['programId'] = undefined;

/**
 * The ID of the subledger within the loyalty program where these points were reimbursed.
 * @member {String} subLedgerId
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;

/**
 * The amount of reimbursed points that were added.
 * @member {Number} value
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['value'] = undefined;

/**
 * The user for whom these points were reimbursed.
 * @member {String} recipientIntegrationId
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['recipientIntegrationId'] = undefined;

/**
 * Date after which the reimbursed points will be valid.
 * @member {Date} startDate
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['startDate'] = undefined;

/**
 * Date after which the reimbursed points will expire.
 * @member {Date} expiryDate
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['expiryDate'] = undefined;

/**
 * The identifier of 'addition' entries added to the ledger as the `deductLoyaltyPoints` effect is rolled back.
 * @member {String} transactionUUID
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['transactionUUID'] = undefined;

/**
 * The card on which these points were added.
 * @member {String} cardIdentifier
 */
RollbackDeductedLoyaltyPointsEffectProps.prototype['cardIdentifier'] = undefined;






export default RollbackDeductedLoyaltyPointsEffectProps;

