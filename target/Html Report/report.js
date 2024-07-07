$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/01FbLoginFunctionality.feature");
formatter.feature({
  "name": "To validate login feature in fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "To validate login with invalid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass invalid email and invalid password to required field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_has_to_pass_invalid_email_and_invalid_password_to_required_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To validate that user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.to_validate_that_user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with valid mobile number and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass valid phone number \"9787979697\" and invalid password \"Sink@123\" to required field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario2.user_has_to_pass_valid_phone_number_and_invalid_password_to_required_field(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.Scenario2.user_has_to_pass_valid_phone_number_and_invalid_password_to_required_field(Scenario2.java:21)\r\n\tat ✽.User has to pass valid phone number \"9787979697\" and invalid password \"Sink@123\" to required field(file:src/test/resources/01FbLoginFunctionality.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario2.user_has_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the error message \"The password that you\u0027ve entered is incorrect.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario2.user_should_see_the_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass test datas to email \"\u003cemaildata\u003e\" and password \"\u003cpassworddata\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.step({
  "name": "To verify i should see an error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildata",
        "passworddata"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "validemail@example.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "validpassword@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To pass test datas to email \"\" and password \"\" field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario3.toPassTestDatasToEmailAndPasswordField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.toClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify i should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario3.toVerifyIShouldSeeAnErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To pass test datas to email \"validemail@example.com\" and password \"\" field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario3.toPassTestDatasToEmailAndPasswordField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.toClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify i should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario3.toVerifyIShouldSeeAnErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To pass test datas to email \"\" and password \"validpassword@123\" field",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario3.toPassTestDatasToEmailAndPasswordField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario3.toClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify i should see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario3.toVerifyIShouldSeeAnErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/02AccountCreation.feature");
formatter.feature({
  "name": "To validate that user can create account in facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create account in fb application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To pass name data to required field",
  "rows": [
    {
      "cells": [
        "email",
        "validemail@example.com"
      ]
    },
    {
      "cells": [
        "phone number",
        "9092737724"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Scenario4.toPassNameDataToRequiredField(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass password to required field",
  "rows": [
    {
      "cells": [
        "passwordset1",
        "passwordset2"
      ]
    },
    {
      "cells": [
        "Java@123",
        "Selenium@123"
      ]
    },
    {
      "cells": [
        "45678765",
        "Cucumber@123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Scenario4.toPassPasswordToRequiredField(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});