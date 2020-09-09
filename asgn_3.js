/*****************************************
File: asgn_3_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 3
Create Date: 7/3/2019
Last Modified: 7/6/2019
****************************************/

var $ = function (id) 
{
    return document.getElementById(id);
}

//Initialize variable isValid to false
var isValid = false;

function validateItems ()
{
	//get value from user
	var myFirstName = $("firstname").value;
    var myLastName = $("lastname").value;
    var myEmail = $("email").value;
    var myCity = $("city").value;
    var myDonation = $("donation").value;

	//Initialize variable to "N"
   	var errorFoundFlag = "N"; 

	
	//check if myFirstName value is empty or not
	if (myFirstName == "")
	{
		$("firstnameerror").innerHTML = "Enter First Name";
		errorFoundFlag = "Y"; 
		
	}
	else
	{
		$("firstnameerror").innerHTML = "";
		errorFoundFlag = "N"; 
	}
	
	//check if myLastName value is empty or not	
	if (myLastName == "")
	{
		$("lastnameerror").innerHTML = "Enter Last Name";
		errorFoundFlag = "Y"; 
	}
	else
	{
		$("lastnameerror").innerHTML = "";
		errorFoundFlag = "N"; 
	}
	
	//check if myEmail value is empty or not	
	if (myEmail == "")
	{
		$("emailerror").innerHTML = "Enter Email";
		errorFoundFlag = "Y"; 
	}
	else
	{
		$("emailerror").innerHTML = "";
		errorFoundFlag = "N"; 
	}
	
	//check if myCity value is empty or not	
	if (myCity == "-")
	{
		$("cityerror").innerHTML = "Select a City from the list";
		errorFoundFlag = "Y"; 
	}
	else
	{
		$("cityerror").innerHTML = "";
		errorFoundFlag = "N"; 
	}
	
	//check if myDonation value is empty or not OR it is a valid number or not
	if (myDonation == "" || isNaN(myDonation))
	{
		if (isNaN(myDonation))
		{
			$("donationerror").innerHTML = "Amount must be numeric";
			errorFoundFlag = "Y"; 
		}
		else
		{
			$("donationerror").innerHTML = "Enter Donation Amount";
			errorFoundFlag = "Y"; 
		}
	}
    else
	{
		$("donationerror").innerHTML = "";
		errorFoundFlag = "N"; 
	}

	
    //return isValid boolean value by checking if error are found or not
	if(errorFoundFlag == "N" && myFirstName != "" && myLastName != "" && myEmail != "" && myCity != "-")
	
	{
	   return isValid = true;
	}
	
	else 
	   return isValid = false;

}

var addPatron = function ()
{
	//call validateItems() function and store it to variable isValid	
	isValid = validateItems();
	
	//check isValid is true or not
	if(isValid)
	{
		$("myform").submit();
	}
	else 
	{
		$("endmessage").innerHTML = "Patron Not Added!";
				
	}
}

var clearFields = function ()
{
	//reset all values and error messages in the form
	$("firstname").value = "";
	$("lastname").value = "";
	$("email").value = "";
	$("city").value = "-";
	$("donation").value = "";
	
	$("firstnameerror").innerHTML = "";
	$("lastnameerror").innerHTML = "";
	$("emailerror").innerHTML = "";
	$("cityerror").innerHTML = "";
    $("donationerror").innerHTML = ""; 
	$("endmessage").innerHTML = ""
}

window.onload = function () 
{
  	//handle onclick event
	$("addpatron").onclick = addPatron;
	$("clearfields").onclick = clearFields;
	
	//puts cursor on firstname field
 	$("firstname").focus();
}
