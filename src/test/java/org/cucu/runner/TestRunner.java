package org.cucu.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.report.GenerateJvm;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources", 
                 glue="org.stepdefinition", 
                 monochrome=true,
                 dryRun=false,
                 strict=true,
                 snippets=SnippetType.CAMELCASE,
                 plugin= {"html:target//Html Report", 
                		 "junit:target//Junit Report//JunitRepo.xml",
                		 "json:target//Json Report//JsonRepo.json",
                		 "rerun:src//test//resources//Failed Scenarios//failed.txt"})
public class TestRunner {

	 
	// HooksClass(@Before) --> Scenario(In feature file) --> Step definition file --> HooksClass(@After)
	
	
	@AfterClass
	public static void toGenerateJvmReport() {

		GenerateJvm.report("C:\\Users\\VISHAL\\eclipse-workspace\\CucumberSample\\target\\Json Report\\JsonRepo.json");
	}
	
}




