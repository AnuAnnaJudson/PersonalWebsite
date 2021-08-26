let name1=false
let email1=false
let phnu=false
let msg1=false
$(document).ready(function(){
    $("#name").keyup(function(){
        let name=this.value
        console.log(name)
        let name_regex = /^[A-Za-z ]+$/
        if(name.match(name_regex) && name.length<3){
            console.log("bhjghjgjhg")
            name1=false
            $("#name_error").html("Enter minimum 3 characters")
        }
        else if(name.match(name_regex))
        {
            console.log("jhjg")
            name1=true
            $("#name_error").html("")
        }
        else{
            console.log("bhjghjgjhg")
        }
        })
     
    $("#phone").keyup(function(){
        let phno=this.value
        let phno_regex = /^[0-9]*$/
        if(phno.match(phno_regex)&&phno.length<10){
           
            phnu=false
            $("#phno_error").html("Enter valid number")
        }else if(phno.match(phno_regex)&&phno.length<11){
         
            phnu=true
            $("#phno_error").html("")
        }else if(phno.match(phno_regex)&&phno.length>10){
        
            phnu=false
            $("#phno_error").html("Enter 10 digits")
        }    
    })  

    $("#email").keyup(function(){
        let email=this.value
        let email_regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        if(email.match(email_regex)){
            
            email1=true
            $("#email_error").html("")
        }else{
        
            $("#email_error").html("Enter valid email")
            email1=false
        }
    })  
 
   
    $("#msg").keyup(function(){
        
        let message=this.value;
       
        if(message.length<21){
            
            msg1=false
            
            $("#msg_error").html("Enter minimum 20 characters")
        }
        else{
           
            $("#msg_error").html("")
            
            msg1=true
        }
    })  
})
    

    $("#submit-form").submit((e)=>{
        e.preventDefault()
        console.log(name1,email1,phnu,msg1)
          if(name1&& email1&& phnu&& msg1){
            console.log("submit");
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwvbb7PZ9HpB9YCJTOMY9CaHkiKvPpDeAG9ETINJVGkaotIp1RbkV_veTIpR_LiTwt2/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
             error:function (err){
                    alert("Something Error")
    
                }
          })
         }
          else{
            $("#final_error").html("Enter values for all feilds") 
          }
    })
