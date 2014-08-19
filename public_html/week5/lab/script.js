/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

 */


function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitform() {
			
        var fname = document.getElementById('fname');

        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
        } else {
                console.log("Fname is good");
        }

}


