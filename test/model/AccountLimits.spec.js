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
    instance = new TalonOne.AccountLimits();
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

  describe('AccountLimits', function() {
    it('should create an instance of AccountLimits', function() {
      // uncomment below and update the code to test AccountLimits
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be.a(TalonOne.AccountLimits);
    });

    it('should have the property liveApplications (base name: "liveApplications")', function() {
      // uncomment below and update the code to test the property liveApplications
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property sandboxApplications (base name: "sandboxApplications")', function() {
      // uncomment below and update the code to test the property sandboxApplications
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property activeCampaigns (base name: "activeCampaigns")', function() {
      // uncomment below and update the code to test the property activeCampaigns
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property referralCodes (base name: "referralCodes")', function() {
      // uncomment below and update the code to test the property referralCodes
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property activeRules (base name: "activeRules")', function() {
      // uncomment below and update the code to test the property activeRules
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property liveLoyaltyPrograms (base name: "liveLoyaltyPrograms")', function() {
      // uncomment below and update the code to test the property liveLoyaltyPrograms
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property sandboxLoyaltyPrograms (base name: "sandboxLoyaltyPrograms")', function() {
      // uncomment below and update the code to test the property sandboxLoyaltyPrograms
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property webhooks (base name: "webhooks")', function() {
      // uncomment below and update the code to test the property webhooks
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property apiVolume (base name: "apiVolume")', function() {
      // uncomment below and update the code to test the property apiVolume
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

    it('should have the property promotionTypes (base name: "promotionTypes")', function() {
      // uncomment below and update the code to test the property promotionTypes
      //var instane = new TalonOne.AccountLimits();
      //expect(instance).to.be();
    });

  });

}));
