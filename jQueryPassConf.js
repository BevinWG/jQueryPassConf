//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;

}
function arePasswordsMatching() {
    $password.val()=== $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    if($password.val()) {
        $password.next().hide();
    }else{
        $password.next().show();
    }
    
}

function confirmPasswordEvent(){
    
}

//find out if password and confirmation match
if(arePasswordsMatching()) {
    //hide hint if matched
    $confirmPassword.next().hide();
}else {
    $confirmPassword.next().show(); 
}

function enableSubmitEvent() {
    
    $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
  
//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

//else show the hint

