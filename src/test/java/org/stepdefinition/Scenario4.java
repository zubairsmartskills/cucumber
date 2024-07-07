package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Scenario4 extends UtilityClass{
	
	LoginPOJO l;
	
	
	@When("To pass name data to required field")
	public void toPassNameDataToRequiredField(DataTable d) {
		
		l = new LoginPOJO();
		Map<String, String> m = d.asMap(String.class, String.class);
		passTextToTextBox(l.getEmailTxt(), m.get("phone number"));
	}

	@When("To pass password to required field")
	public void toPassPasswordToRequiredField(DataTable d) {
		
		List<Map<String, String>> m = d.asMaps();
		passTextToTextBox(l.getPassewordTxt(), m.get(1).get("passwordset2"));	
	}
 
	
}
