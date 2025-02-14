/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
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
    instance = new TalonOne.AccountAnalytics();
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

  describe('AccountAnalytics', function() {
    it('should create an instance of AccountAnalytics', function() {
      // uncomment below and update the code to test AccountAnalytics
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be.a(TalonOne.AccountAnalytics);
    });

    it('should have the property applications (base name: "applications")', function() {
      // uncomment below and update the code to test the property applications
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property liveApplications (base name: "liveApplications")', function() {
      // uncomment below and update the code to test the property liveApplications
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property sandboxApplications (base name: "sandboxApplications")', function() {
      // uncomment below and update the code to test the property sandboxApplications
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaigns (base name: "campaigns")', function() {
      // uncomment below and update the code to test the property campaigns
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property activeCampaigns (base name: "activeCampaigns")', function() {
      // uncomment below and update the code to test the property activeCampaigns
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property liveActiveCampaigns (base name: "liveActiveCampaigns")', function() {
      // uncomment below and update the code to test the property liveActiveCampaigns
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property activeCoupons (base name: "activeCoupons")', function() {
      // uncomment below and update the code to test the property activeCoupons
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property expiredCoupons (base name: "expiredCoupons")', function() {
      // uncomment below and update the code to test the property expiredCoupons
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property referralCodes (base name: "referralCodes")', function() {
      // uncomment below and update the code to test the property referralCodes
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property activeReferralCodes (base name: "activeReferralCodes")', function() {
      // uncomment below and update the code to test the property activeReferralCodes
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property expiredReferralCodes (base name: "expiredReferralCodes")', function() {
      // uncomment below and update the code to test the property expiredReferralCodes
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property activeRules (base name: "activeRules")', function() {
      // uncomment below and update the code to test the property activeRules
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property customAttributes (base name: "customAttributes")', function() {
      // uncomment below and update the code to test the property customAttributes
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property webhooks (base name: "webhooks")', function() {
      // uncomment below and update the code to test the property webhooks
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property loyaltyPrograms (base name: "loyaltyPrograms")', function() {
      // uncomment below and update the code to test the property loyaltyPrograms
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property liveLoyaltyPrograms (base name: "liveLoyaltyPrograms")', function() {
      // uncomment below and update the code to test the property liveLoyaltyPrograms
      //var instane = new TalonOne.AccountAnalytics();
      //expect(instance).to.be();
    });

  });

}));
