package org.jvm.report;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class GenerateJvm {
	
	public static void report(String addJsonReport) {

		// Steps for generating JVMReport
		
		// 1.Mention the target folder location
		File target = new File("src//test//resources");
		
		// 2.Add details to the report using Configuration class
		Configuration c = new Configuration(target, "Facebook");
		c.addClassifications("Browser Name", "Edge");
		c.addClassifications("Browser Version", "82.39");
		c.addClassifications("Platform Name", "Windows");
		c.addClassifications("Platform Version", "11");
		c.addClassifications("Sprint No", "2");
		
		// 3.Add json file paths into List<String>
		List<String> l = new LinkedList<>();
		l.add(addJsonReport);
				
		// 4. To Generate Report
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();
		
	}
} 
