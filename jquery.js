/******************* Selecting Nodes by Tag Name *****************/

$(document).ready(function(){
	var list = $('li'); //selects all <li> tags
	alert('Number of list tags are' + ' ' +list.length);
});

$(document).ready(function(){
	$('a').css('color', '#088A08'); //selects all anchor tags
});

$(document).ready(function(){
	$('nav').each(function(){
		alert($(this).html()); //instead of innerHTML 
	});
});

$(document).ready(function(){
	$('li, p').css('background', '#EFEFEF'); //selecting multiple tags 
});

/******************* Selecting Nodes by ID *****************/

$(document).ready(function(){
	$('#h2Tag').css('color', 'blue'); //instead of document.getElementByID('#h2Tag')
});

$(document).ready(function(){
	alert($('#h2Tag').html()); // it alerts text of header 2
});

$(document).ready(function(){
	$('#article p').css({'background-color': 'crimson', 'padding': '10px', 'text-align': 'center'}); //selects paragraph inside an article with article ID 

});
/******************* Selecting Nodes by Class Name *****************/	
// $('.span');  $('p .span');  $('a.secondSpan'); $('')



$(document).ready(function(){
	$('.span').each(function(){   //selects all classes with span 
		$(this).fadeToggle(4000);
	});
});

$(document).ready(function(){
	$('a.span').animate({opacity: 0.50, left: '+=50', height: ['fadeToggle', 'swing'], fontSize: '20px', marginLeft: '0.6in'}, 500).css('border', '1px solid crimson');
});


/******************* Selecting Nodes by Attribute Value & Input Nodes *****************/
// $('a[title]') -> selects all <a> elements that have a title attribute;  $('th[title]'); $('th[title="Sample Title"]') -> searching a specific title; $('th[title="header"]') -> selects all headers with title 'header'

$(document).ready(function(){
	var rows = $('tr[title="row"]');
	$(rows).css('background-color', 'crimson'); 
});

$(document).ready(function(){
	alert("The number of anchor tags is " + " " + $('a[title]').length);
})

$(document).ready(function(){
	var divs = $('div[title="Tables"]'); // case sensitive 
	alert('The number of div elements with "Tables" title is ' + divs.length);
	$(divs).css('border', '2px solid green');
});

$(document).ready(function(){
	var divs = $('div[title="Tables"]'); 
	$(divs).css('background', 'orange');
});

$(document).ready(function(){
	$('input[type="password"], [type="text"]').css({'background': 'crimson', 'fontSize': '1.6em'});
});

$(document).ready(function(){
	var inputText = $('input[type="password"]');
	alert("number of password type inputs: " + " " +inputText.length);
});

$(document).ready(function(){
	var tableHeader = 'th[title="header"]';
	$('th[title="header"]').css('fontSize', '1.6em');
	alert(tableHeader.length);
});

// $(':input') - 'colon input' selects all input elements including: input, select, textarea, button, image, radio and more 
// $(':input[type="radio"]') - targets all radio buttons on the page... but is it the most efficient selector? No, it is not. 

$(document).ready(function(){
	var inputs = $(':input');
	alert(typeof inputs[0]);
	alert('alerts the value of the first input' + ' ' + $(inputs[0]).val());  //in order to get jQuery functions, you have to have a jQuery wrapper around object that's why we wrapped the dollar selector type syntax around the object. 
});

// to easily get all the value of our form input is we could iterate through those. I'll use each for that 
$(document).ready(function(){
	$(':input').each(function(){
		var elem = $(this); //this is wrapped in a jQuery wrapper
		alert(elem.val()); // if I 'set' the value val('Foo') it will loop through each item and try to set that value. Right now it is 'getting' value val(); 
	});
});

$(document).ready(function(){
	$("input[type != 'text']").css('background', 'purple')    //I could do smth. like this: $("input[type != 'text']").next().append("<b>; with no row title </b> ");
});

/******************* Additional Selectors Features *****************/
// :contains() will select elements that match the contents within the contains exception: example $('div:contains("sample")');  -> selects div's that contain the text 'sample' (case sensitive)
$(document).ready(function(){
	$('div:contains("sample")').fadeToggle(9000);
});

// $('tr:odd') and $('tr:even') is the jQuery syntax for selecting odd or even rows respectively. The index is zero based which means the first row in the table is 0.
// Odd rows would return: 1, 3, 5, 7, 9, etc
// Even rows would return: 0, 2, 4, 6, 8, etc
$(document).ready(function(){
	$('#tableBelow tr').css("background-color", "green");
});


$(document).ready(function(){
	$('tr:odd').css('background-color', 'grey');
});

 
// $('element:first-child') -> selects the first child of every element group: $('span:first-child')
/*
	<div>
		<span>First Child, first group</span>
		<span>Second Child, first group</span>
	</div>
	<div>
		<span>First Child, second group</span>
		<span>Second Child, second group</span>
	</div> 		
*/
$(document).ready(function(){
	$('#tableBelow tr:first-child').css('background-color', 'red');
});



// [attribute^="value"] will select all elements with an attribute that begins with stated value:   $('input[value^="Holidays"]') -> selects any input element whose value attribute begins with "Holiday"
/*
<input type="button" value="Holidays of US" />
<input type="button" value="Holidays - National" />
<input type="button" value="Holidays - local" />
*/
$(document).ready(function(){
	$('input[value^="Holidays"]').animate({opacity: "0.30", height: ["easeOutBounce"]}, 3000);
});



// [attribute$="value"] will select all elements with an attribute that ends with stated value:   $('input[value$="Holidays"]') -> selects any input element whose value attribute ends with "Holiday"
/*
<input type="button" value="US Holidays"/>
<input type="button" value="National Holidays"/>
<input type="button" value="Local Holidays"/>
*/



// [attribute*="value"] will select all elements with an attribute that contains the stated value:   $('input[value*="Holidays"]') -> selects any input element whose value attribute contains "Holiday"
/*
<input type="button" value="US Holidays 2015"/>
<input type="button" value="National Holidays 2015"/>
<input type="button" value="Local Holidays 2015"/>
*/
