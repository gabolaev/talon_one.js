/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalononeApi);
  }
}(this, function(expect, TalononeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalononeApi.ManagementApiApi();
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

  describe('ManagementApiApi', function() {
    describe('createAPIKey', function() {
      it('should call createAPIKey successfully', function(done) {
        //uncomment below and update the code to test createAPIKey
        //instance.createAPIKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplication', function() {
      it('should call createApplication successfully', function(done) {
        //uncomment below and update the code to test createApplication
        //instance.createApplication(function(error) {
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
    describe('createEventType', function() {
      it('should call createEventType successfully', function(done) {
        //uncomment below and update the code to test createEventType
        //instance.createEventType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInvite', function() {
      it('should call createInvite successfully', function(done) {
        //uncomment below and update the code to test createInvite
        //instance.createInvite(function(error) {
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
    describe('createRole', function() {
      it('should call createRole successfully', function(done) {
        //uncomment below and update the code to test createRole
        //instance.createRole(function(error) {
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
    describe('createWebhook', function() {
      it('should call createWebhook successfully', function(done) {
        //uncomment below and update the code to test createWebhook
        //instance.createWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAPIKey', function() {
      it('should call deleteAPIKey successfully', function(done) {
        //uncomment below and update the code to test deleteAPIKey
        //instance.deleteAPIKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApplication', function() {
      it('should call deleteApplication successfully', function(done) {
        //uncomment below and update the code to test deleteApplication
        //instance.deleteApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAttribute', function() {
      it('should call deleteAttribute successfully', function(done) {
        //uncomment below and update the code to test deleteAttribute
        //instance.deleteAttribute(function(error) {
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
    describe('deleteEventType', function() {
      it('should call deleteEventType successfully', function(done) {
        //uncomment below and update the code to test deleteEventType
        //instance.deleteEventType(function(error) {
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
    describe('deleteRole', function() {
      it('should call deleteRole successfully', function(done) {
        //uncomment below and update the code to test deleteRole
        //instance.deleteRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRuleset', function() {
      it('should call deleteRuleset successfully', function(done) {
        //uncomment below and update the code to test deleteRuleset
        //instance.deleteRuleset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhook', function() {
      it('should call deleteWebhook successfully', function(done) {
        //uncomment below and update the code to test deleteWebhook
        //instance.deleteWebhook(function(error) {
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
    describe('duplicateCampaignToApplications', function() {
      it('should call duplicateCampaignToApplications successfully', function(done) {
        //uncomment below and update the code to test duplicateCampaignToApplications
        //instance.duplicateCampaignToApplications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIKey', function() {
      it('should call getAPIKey successfully', function(done) {
        //uncomment below and update the code to test getAPIKey
        //instance.getAPIKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIKeys', function() {
      it('should call getAPIKeys successfully', function(done) {
        //uncomment below and update the code to test getAPIKeys
        //instance.getAPIKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccessLogs', function() {
      it('should call getAccessLogs successfully', function(done) {
        //uncomment below and update the code to test getAccessLogs
        //instance.getAccessLogs(function(error) {
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
    describe('getApplicationEvents', function() {
      it('should call getApplicationEvents successfully', function(done) {
        //uncomment below and update the code to test getApplicationEvents
        //instance.getApplicationEvents(function(error) {
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
    describe('getCampaignSet', function() {
      it('should call getCampaignSet successfully', function(done) {
        //uncomment below and update the code to test getCampaignSet
        //instance.getCampaignSet(function(error) {
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
    describe('getCoupons', function() {
      it('should call getCoupons successfully', function(done) {
        //uncomment below and update the code to test getCoupons
        //instance.getCoupons(function(error) {
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
    describe('getCouponsByAttributesApplicationWide', function() {
      it('should call getCouponsByAttributesApplicationWide successfully', function(done) {
        //uncomment below and update the code to test getCouponsByAttributesApplicationWide
        //instance.getCouponsByAttributesApplicationWide(function(error) {
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
    describe('getCustomerActivityReports', function() {
      it('should call getCustomerActivityReports successfully', function(done) {
        //uncomment below and update the code to test getCustomerActivityReports
        //instance.getCustomerActivityReports(function(error) {
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
    describe('getEventType', function() {
      it('should call getEventType successfully', function(done) {
        //uncomment below and update the code to test getEventType
        //instance.getEventType(function(error) {
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
    describe('getFeaturesFeed', function() {
      it('should call getFeaturesFeed successfully', function(done) {
        //uncomment below and update the code to test getFeaturesFeed
        //instance.getFeaturesFeed(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getImports', function() {
      it('should call getImports successfully', function(done) {
        //uncomment below and update the code to test getImports
        //instance.getImports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManagerConfig', function() {
      it('should call getManagerConfig successfully', function(done) {
        //uncomment below and update the code to test getManagerConfig
        //instance.getManagerConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReferrals', function() {
      it('should call getReferrals successfully', function(done) {
        //uncomment below and update the code to test getReferrals
        //instance.getReferrals(function(error) {
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
    describe('getRoles', function() {
      it('should call getRoles successfully', function(done) {
        //uncomment below and update the code to test getRoles
        //instance.getRoles(function(error) {
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
    describe('refreshAnalytics', function() {
      it('should call refreshAnalytics successfully', function(done) {
        //uncomment below and update the code to test refreshAnalytics
        //instance.refreshAnalytics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renewAPIToken', function() {
      it('should call renewAPIToken successfully', function(done) {
        //uncomment below and update the code to test renewAPIToken
        //instance.renewAPIToken(function(error) {
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
    describe('searchCouponsAdvanced', function() {
      it('should call searchCouponsAdvanced successfully', function(done) {
        //uncomment below and update the code to test searchCouponsAdvanced
        //instance.searchCouponsAdvanced(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCouponsAdvancedApplicationWide', function() {
      it('should call searchCouponsAdvancedApplicationWide successfully', function(done) {
        //uncomment below and update the code to test searchCouponsAdvancedApplicationWide
        //instance.searchCouponsAdvancedApplicationWide(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAPIKey', function() {
      it('should call updateAPIKey successfully', function(done) {
        //uncomment below and update the code to test updateAPIKey
        //instance.updateAPIKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccount', function() {
      it('should call updateAccount successfully', function(done) {
        //uncomment below and update the code to test updateAccount
        //instance.updateAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApplication', function() {
      it('should call updateApplication successfully', function(done) {
        //uncomment below and update the code to test updateApplication
        //instance.updateApplication(function(error) {
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
    describe('updateCampaignSet', function() {
      it('should call updateCampaignSet successfully', function(done) {
        //uncomment below and update the code to test updateCampaignSet
        //instance.updateCampaignSet(function(error) {
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
    describe('updateManagerConfig', function() {
      it('should call updateManagerConfig successfully', function(done) {
        //uncomment below and update the code to test updateManagerConfig
        //instance.updateManagerConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRole', function() {
      it('should call updateRole successfully', function(done) {
        //uncomment below and update the code to test updateRole
        //instance.updateRole(function(error) {
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
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserLatestFeature', function() {
      it('should call updateUserLatestFeature successfully', function(done) {
        //uncomment below and update the code to test updateUserLatestFeature
        //instance.updateUserLatestFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhook', function() {
      it('should call updateWebhook successfully', function(done) {
        //uncomment below and update the code to test updateWebhook
        //instance.updateWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
