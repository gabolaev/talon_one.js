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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalonOne);
  }
}(this, function(expect, TalonOne) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalonOne.ManagementApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ManagementApi', function() {
    describe('addLoyaltyPoints', function() {
      it('should call addLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test addLoyaltyPoints
        //instance.addLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyCampaignToApplications', function() {
      it('should call copyCampaignToApplications successfully', function(done) {
        //uncomment below and update the code to test copyCampaignToApplications
        //instance.copyCampaignToApplications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAdditionalCost', function() {
      it('should call createAdditionalCost successfully', function(done) {
        //uncomment below and update the code to test createAdditionalCost
        //instance.createAdditionalCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAttribute', function() {
      it('should call createAttribute successfully', function(done) {
        //uncomment below and update the code to test createAttribute
        //instance.createAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCampaign', function() {
      it('should call createCampaign successfully', function(done) {
        //uncomment below and update the code to test createCampaign
        //instance.createCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCoupons', function() {
      it('should call createCoupons successfully', function(done) {
        //uncomment below and update the code to test createCoupons
        //instance.createCoupons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCouponsForMultipleRecipients', function() {
      it('should call createCouponsForMultipleRecipients successfully', function(done) {
        //uncomment below and update the code to test createCouponsForMultipleRecipients
        //instance.createCouponsForMultipleRecipients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPasswordRecoveryEmail', function() {
      it('should call createPasswordRecoveryEmail successfully', function(done) {
        //uncomment below and update the code to test createPasswordRecoveryEmail
        //instance.createPasswordRecoveryEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRuleset', function() {
      it('should call createRuleset successfully', function(done) {
        //uncomment below and update the code to test createRuleset
        //instance.createRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSession', function() {
      it('should call createSession successfully', function(done) {
        //uncomment below and update the code to test createSession
        //instance.createSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCampaign', function() {
      it('should call deleteCampaign successfully', function(done) {
        //uncomment below and update the code to test deleteCampaign
        //instance.deleteCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCoupon', function() {
      it('should call deleteCoupon successfully', function(done) {
        //uncomment below and update the code to test deleteCoupon
        //instance.deleteCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCoupons', function() {
      it('should call deleteCoupons successfully', function(done) {
        //uncomment below and update the code to test deleteCoupons
        //instance.deleteCoupons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReferral', function() {
      it('should call deleteReferral successfully', function(done) {
        //uncomment below and update the code to test deleteReferral
        //instance.deleteReferral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroySession', function() {
      it('should call destroySession successfully', function(done) {
        //uncomment below and update the code to test destroySession
        //instance.destroySession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportCoupons', function() {
      it('should call exportCoupons successfully', function(done) {
        //uncomment below and update the code to test exportCoupons
        //instance.exportCoupons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportCustomerSessions', function() {
      it('should call exportCustomerSessions successfully', function(done) {
        //uncomment below and update the code to test exportCustomerSessions
        //instance.exportCustomerSessions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportEffects', function() {
      it('should call exportEffects successfully', function(done) {
        //uncomment below and update the code to test exportEffects
        //instance.exportEffects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportLoyaltyBalance', function() {
      it('should call exportLoyaltyBalance successfully', function(done) {
        //uncomment below and update the code to test exportLoyaltyBalance
        //instance.exportLoyaltyBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportLoyaltyLedger', function() {
      it('should call exportLoyaltyLedger successfully', function(done) {
        //uncomment below and update the code to test exportLoyaltyLedger
        //instance.exportLoyaltyLedger(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportReferrals', function() {
      it('should call exportReferrals successfully', function(done) {
        //uncomment below and update the code to test exportReferrals
        //instance.exportReferrals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccessLogsWithoutTotalCount', function() {
      it('should call getAccessLogsWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test getAccessLogsWithoutTotalCount
        //instance.getAccessLogsWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccount', function() {
      it('should call getAccount successfully', function(done) {
        //uncomment below and update the code to test getAccount
        //instance.getAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountAnalytics', function() {
      it('should call getAccountAnalytics successfully', function(done) {
        //uncomment below and update the code to test getAccountAnalytics
        //instance.getAccountAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdditionalCost', function() {
      it('should call getAdditionalCost successfully', function(done) {
        //uncomment below and update the code to test getAdditionalCost
        //instance.getAdditionalCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdditionalCosts', function() {
      it('should call getAdditionalCosts successfully', function(done) {
        //uncomment below and update the code to test getAdditionalCosts
        //instance.getAdditionalCosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAccessLogs', function() {
      it('should call getAllAccessLogs successfully', function(done) {
        //uncomment below and update the code to test getAllAccessLogs
        //instance.getAllAccessLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllRoles', function() {
      it('should call getAllRoles successfully', function(done) {
        //uncomment below and update the code to test getAllRoles
        //instance.getAllRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplication', function() {
      it('should call getApplication successfully', function(done) {
        //uncomment below and update the code to test getApplication
        //instance.getApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationApiHealth', function() {
      it('should call getApplicationApiHealth successfully', function(done) {
        //uncomment below and update the code to test getApplicationApiHealth
        //instance.getApplicationApiHealth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCustomer', function() {
      it('should call getApplicationCustomer successfully', function(done) {
        //uncomment below and update the code to test getApplicationCustomer
        //instance.getApplicationCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCustomerFriends', function() {
      it('should call getApplicationCustomerFriends successfully', function(done) {
        //uncomment below and update the code to test getApplicationCustomerFriends
        //instance.getApplicationCustomerFriends(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCustomers', function() {
      it('should call getApplicationCustomers successfully', function(done) {
        //uncomment below and update the code to test getApplicationCustomers
        //instance.getApplicationCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationCustomersByAttributes', function() {
      it('should call getApplicationCustomersByAttributes successfully', function(done) {
        //uncomment below and update the code to test getApplicationCustomersByAttributes
        //instance.getApplicationCustomersByAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationEventTypes', function() {
      it('should call getApplicationEventTypes successfully', function(done) {
        //uncomment below and update the code to test getApplicationEventTypes
        //instance.getApplicationEventTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationEventsWithoutTotalCount', function() {
      it('should call getApplicationEventsWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test getApplicationEventsWithoutTotalCount
        //instance.getApplicationEventsWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationSession', function() {
      it('should call getApplicationSession successfully', function(done) {
        //uncomment below and update the code to test getApplicationSession
        //instance.getApplicationSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationSessions', function() {
      it('should call getApplicationSessions successfully', function(done) {
        //uncomment below and update the code to test getApplicationSessions
        //instance.getApplicationSessions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplications', function() {
      it('should call getApplications successfully', function(done) {
        //uncomment below and update the code to test getApplications
        //instance.getApplications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttribute', function() {
      it('should call getAttribute successfully', function(done) {
        //uncomment below and update the code to test getAttribute
        //instance.getAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttributes', function() {
      it('should call getAttributes successfully', function(done) {
        //uncomment below and update the code to test getAttributes
        //instance.getAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAudiences', function() {
      it('should call getAudiences successfully', function(done) {
        //uncomment below and update the code to test getAudiences
        //instance.getAudiences(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaign', function() {
      it('should call getCampaign successfully', function(done) {
        //uncomment below and update the code to test getCampaign
        //instance.getCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignAnalytics', function() {
      it('should call getCampaignAnalytics successfully', function(done) {
        //uncomment below and update the code to test getCampaignAnalytics
        //instance.getCampaignAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignByAttributes', function() {
      it('should call getCampaignByAttributes successfully', function(done) {
        //uncomment below and update the code to test getCampaignByAttributes
        //instance.getCampaignByAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaigns', function() {
      it('should call getCampaigns successfully', function(done) {
        //uncomment below and update the code to test getCampaigns
        //instance.getCampaigns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChanges', function() {
      it('should call getChanges successfully', function(done) {
        //uncomment below and update the code to test getChanges
        //instance.getChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCouponsByAttributes', function() {
      it('should call getCouponsByAttributes successfully', function(done) {
        //uncomment below and update the code to test getCouponsByAttributes
        //instance.getCouponsByAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCouponsWithoutTotalCount', function() {
      it('should call getCouponsWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test getCouponsWithoutTotalCount
        //instance.getCouponsWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerActivityReport', function() {
      it('should call getCustomerActivityReport successfully', function(done) {
        //uncomment below and update the code to test getCustomerActivityReport
        //instance.getCustomerActivityReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerActivityReportsWithoutTotalCount', function() {
      it('should call getCustomerActivityReportsWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test getCustomerActivityReportsWithoutTotalCount
        //instance.getCustomerActivityReportsWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAnalytics', function() {
      it('should call getCustomerAnalytics successfully', function(done) {
        //uncomment below and update the code to test getCustomerAnalytics
        //instance.getCustomerAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerProfile', function() {
      it('should call getCustomerProfile successfully', function(done) {
        //uncomment below and update the code to test getCustomerProfile
        //instance.getCustomerProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerProfiles', function() {
      it('should call getCustomerProfiles successfully', function(done) {
        //uncomment below and update the code to test getCustomerProfiles
        //instance.getCustomerProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomersByAttributes', function() {
      it('should call getCustomersByAttributes successfully', function(done) {
        //uncomment below and update the code to test getCustomersByAttributes
        //instance.getCustomersByAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventTypes', function() {
      it('should call getEventTypes successfully', function(done) {
        //uncomment below and update the code to test getEventTypes
        //instance.getEventTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExports', function() {
      it('should call getExports successfully', function(done) {
        //uncomment below and update the code to test getExports
        //instance.getExports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyPoints', function() {
      it('should call getLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyPoints
        //instance.getLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyProgram', function() {
      it('should call getLoyaltyProgram successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyProgram
        //instance.getLoyaltyProgram(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyPrograms', function() {
      it('should call getLoyaltyPrograms successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyPrograms
        //instance.getLoyaltyPrograms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyStatistics', function() {
      it('should call getLoyaltyStatistics successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyStatistics
        //instance.getLoyaltyStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReferralsWithoutTotalCount', function() {
      it('should call getReferralsWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test getReferralsWithoutTotalCount
        //instance.getReferralsWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRole', function() {
      it('should call getRole successfully', function(done) {
        //uncomment below and update the code to test getRole
        //instance.getRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRuleset', function() {
      it('should call getRuleset successfully', function(done) {
        //uncomment below and update the code to test getRuleset
        //instance.getRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRulesets', function() {
      it('should call getRulesets successfully', function(done) {
        //uncomment below and update the code to test getRulesets
        //instance.getRulesets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhook', function() {
      it('should call getWebhook successfully', function(done) {
        //uncomment below and update the code to test getWebhook
        //instance.getWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookActivationLogs', function() {
      it('should call getWebhookActivationLogs successfully', function(done) {
        //uncomment below and update the code to test getWebhookActivationLogs
        //instance.getWebhookActivationLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookLogs', function() {
      it('should call getWebhookLogs successfully', function(done) {
        //uncomment below and update the code to test getWebhookLogs
        //instance.getWebhookLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhooks', function() {
      it('should call getWebhooks successfully', function(done) {
        //uncomment below and update the code to test getWebhooks
        //instance.getWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importCollection', function() {
      it('should call importCollection successfully', function(done) {
        //uncomment below and update the code to test importCollection
        //instance.importCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importCoupons', function() {
      it('should call importCoupons successfully', function(done) {
        //uncomment below and update the code to test importCoupons
        //instance.importCoupons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importLoyaltyPoints', function() {
      it('should call importLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test importLoyaltyPoints
        //instance.importLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importPoolGiveaways', function() {
      it('should call importPoolGiveaways successfully', function(done) {
        //uncomment below and update the code to test importPoolGiveaways
        //instance.importPoolGiveaways(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importReferrals', function() {
      it('should call importReferrals successfully', function(done) {
        //uncomment below and update the code to test importReferrals
        //instance.importReferrals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeLoyaltyPoints', function() {
      it('should call removeLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test removeLoyaltyPoints
        //instance.removeLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetPassword', function() {
      it('should call resetPassword successfully', function(done) {
        //uncomment below and update the code to test resetPassword
        //instance.resetPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCouponsAdvancedApplicationWideWithoutTotalCount', function() {
      it('should call searchCouponsAdvancedApplicationWideWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test searchCouponsAdvancedApplicationWideWithoutTotalCount
        //instance.searchCouponsAdvancedApplicationWideWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCouponsAdvancedWithoutTotalCount', function() {
      it('should call searchCouponsAdvancedWithoutTotalCount successfully', function(done) {
        //uncomment below and update the code to test searchCouponsAdvancedWithoutTotalCount
        //instance.searchCouponsAdvancedWithoutTotalCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAdditionalCost', function() {
      it('should call updateAdditionalCost successfully', function(done) {
        //uncomment below and update the code to test updateAdditionalCost
        //instance.updateAdditionalCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAttribute', function() {
      it('should call updateAttribute successfully', function(done) {
        //uncomment below and update the code to test updateAttribute
        //instance.updateAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaign', function() {
      it('should call updateCampaign successfully', function(done) {
        //uncomment below and update the code to test updateCampaign
        //instance.updateCampaign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCoupon', function() {
      it('should call updateCoupon successfully', function(done) {
        //uncomment below and update the code to test updateCoupon
        //instance.updateCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCouponBatch', function() {
      it('should call updateCouponBatch successfully', function(done) {
        //uncomment below and update the code to test updateCouponBatch
        //instance.updateCouponBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReferral', function() {
      it('should call updateReferral successfully', function(done) {
        //uncomment below and update the code to test updateReferral
        //instance.updateReferral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRuleset', function() {
      it('should call updateRuleset successfully', function(done) {
        //uncomment below and update the code to test updateRuleset
        //instance.updateRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
