package org.rerun.failedscenario;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\VISHAL\\eclipse-workspace\\CucumberSample\\src\\test\\resources\\Failed Scenarios\\failed.txt",
                 glue="org.stepdefinition",
                 monochrome=true)
public class TestRerunnerClass {

	
	
	
}
