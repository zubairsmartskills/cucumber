package org.stepdefinition;

import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario3 extends UtilityClass{
	
	LoginPOJO l;
	

	@When("To pass test datas to email {string} and password {string} field")
	public void toPassTestDatasToEmailAndPasswordField(String emailData, String passwordData) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), emailData);
		passTextToTextBox(l.getPassewordTxt(), passwordData);
	}

	@When("To click login button")
	public void toClickLoginButton() {
	     
		clickWebElement(l.getLoginBtn());
	}

	@Then("To verify i should see an error message")
	public void toVerifyIShouldSeeAnErrorMessage() {
	   
		
	}

	
}
