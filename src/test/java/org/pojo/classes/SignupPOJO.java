package org.pojo.classes;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reusable.UtilityClass;

public class SignupPOJO extends UtilityClass{
	
	public SignupPOJO() {

		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//a[text()='Create new account']")
	private WebElement accBtn;
	
	@FindBy(xpath="//div[text()='Sign Up']")
	private WebElement accPage;
	
	@FindBy(xpath="//input[@name='firstname']")
	private WebElement firstName;
	
	@FindBy(xpath="//input[@name='reg_email__']")
	private WebElement phNoOREmail;

	
	
	public WebElement getAccBtn() {
		return accBtn;
	}

	public WebElement getAccPage() {
		return accPage;
	}

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getPhNoOREmail() {
		return phNoOREmail;
	}
	
	
	
	

}
