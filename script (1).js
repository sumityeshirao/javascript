
// **** APPLYING FUNCTIONS --------------------------------****

function validate() {
    var names = document.getElementById('uname').value;
    var user_email = document.getElementById('email').value;
    var user_phone = document.getElementById('number').value;
    var user_others = document.getElementById('other_messages').value;
    var others = document.getElementById('messages').value;


               // ****CREATE REGULAR EXPRESSION****
    var check_names = /^[A-Za-z. ]{3,12}$/;
    let check_email = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let check_phonenumber = /^[789][0-9]{9}$/;

           //  **** APPLYING LOGICAL  ****
  if(check_names.test(names))
   {
      document.getElementById('user_error').innerHTML = " ";
    }
   else
  {
      document.getElementById('user_error').innerHTML = "****User names is Invalid ";
      return false;
  }

   if(check_email.test(user_email))
   {
     document.getElementById('email_error').innerHTML = " ";
  }
   else
     {
      document.getElementById('email_error').innerHTML = "*****Email Address  is Invalid ";
      return false;
    }

   if(check_phonenumber.test(user_phone))
    {
       document.getElementById('number_error').innerHTML = " ";
    }
    else     
    {
            document.getElementById('number_error').innerHTML = "*****Number  is Invalid ";
         return false;
    }


   if(user_others.replace(/\s/g, " ").length <= 0)
      {
       document.getElementById('msg_error').innerHTML = "*****No white space and empty fields are allowed";
       return false;
   }
   if(others.replace(/\s/g, " ").length <= 0)
   {
      document.getElementById('messsage_error').innerHTML = " *****No white space and empty fields are allowed";
      return false;
   }

}