# TalonOne.CardLedgerTransactionLogEntryIntegrationAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** | Date and time the loyalty card transaction occurred. | 
**programId** | **Number** | ID of the loyalty program. | 
**cardIdentifier** | **String** | Identifier of the loyalty card. | 
**customerSessionId** | **String** | ID of the customer session where the transaction occurred. | 
**type** | **String** | Type of transaction. Possible values are:   - &#x60;addition&#x60;: Points were added.   - &#x60;subtraction&#x60;: Points were subtracted.  | 
**name** | **String** | Name or reason of the loyalty ledger transaction. | 
**startDate** | **String** | Date when points become active. Possible values are:   - &#x60;immediate&#x60;: Points are active immediately.   - &#x60;timestamp value&#x60;: Points become active from the given date.  | 
**expiryDate** | **String** | Date when points expire. Possible values are:   - &#x60;unlimited&#x60;: Points have no expiration date.   - &#x60;timestamp value&#x60;: Points expire on the given date.  | 
**subledgerId** | **String** | ID of the subledger. | 
**amount** | **Number** | Amount of loyalty points added or deducted in the transaction. | 
**id** | **Number** | ID of the loyalty ledger transaction. | 
**rulesetId** | **Number** | The ID of the ruleset containing the rule that triggered this effect. | [optional] 
**ruleName** | **String** | The name of the rule that triggered this effect. | [optional] 



## Enum: TypeEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)



