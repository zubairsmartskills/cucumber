package org.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.reusable.UtilityClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends UtilityClass {
	
	@Before(order = 7)
	public void preCondition2() {

		System.out.println("2. Url Launch");
		launchUrl("https://www.facebook.com/");
	}
	
	@Before(order = 12)
	public void preCondition1() {

		System.out.println("3. Waits activated");
		implitWait();
	}
	
	@Before(order = 3)
	public void preCondition3() {
		
		System.out.println("1. Browser Launch");
		launchBrowser("Edge");
	}
	
	
	// Each scenario will be executed which is presented in all feature file
	
	
	@After(order = 14)
	public void postCondition2(Scenario s) {

		if (s.isFailed()) {
			
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] sc = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(sc, "image/png");
		}
		
	}
	
	@After(order = 8)
	public void postCondition1() {
		
		System.out.println("5. Browser closed");
		closeBrowser();
	}
	
}
