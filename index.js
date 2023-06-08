// sign up
let signupBtn=document.getElementById("signUp");
let signupForm=document.querySelector(".signForm");
let signupClose=document.getElementById("signupClose");
let submitBtn=document.getElementById("submitBtn");

let nameF=document.getElementById("fname");
let nameL=document.getElementById("lname");
let mobileE=document.getElementById("mobile");
let emailE=document.getElementById("email");
let ageE=document.getElementById("age");
let cityE=document.getElementById("city");
let passE=document.getElementById("pass");

signupBtn.onclick=function(){
    loginForm.style.display="none";
    signupForm.style.display="inline-block";
}

signupClose.onclick=function(){
    // signupForm.style.display="none";
}

submitBtn.addEventListener("click",function(){
    let fname=nameF.value;
    let lname=nameL.value;
    let mobile=mobileE.value;
    let email=emailE.value;
    let age=ageE.value;
    let city=cityE.value;
    let pass=passE.value;

    if(fname.trim()!=0 || pass.trim()!=0){
        if(userData.indexOf(fname) >= 0){
            alert("This User already exist, Please Enter another one");
        }
        else{
            let webTask=localStorage.getItem("userData");
            if(webTask==null){
                userData=[];
            }
            else{
                userData=JSON.parse(webTask);
            }
            userData.push({
                fname,lname,mobile,email,age,city,pass
            })
            localStorage.setItem("userData",JSON.stringify(userData));
            localStorage.setItem("name",nameF.value);
            localStorage.setItem("pass",passE.value);
        }
    }
    closeBtn.click();
});

// login
let loginBtn=document.getElementById("logIn");
let loginForm=document.querySelector(".loginForm");
let loginClose=document.getElementById("loginClose");
let enterBtn=document.getElementById("enterBtn");

let usernameId=document.getElementById("username");
let passwordId=document.getElementById("password");

loginBtn.onclick=function(){
    loginForm.style.display="inline-block";
    signupForm.style.display="none";
}

loginClose.onclick=function(){
    loginForm.style.display="none";
    signupForm.style.display="inline-block";
    usernameId.value="";
}

enterBtn.onclick=function(e){
    e.preventDefault();
    let username=usernameId.value;
    let password=passwordId.value;

    let storeName =localStorage.getItem("name");
    let storePass =localStorage.getItem("pass");
   
    if(username.trim()!=0 || password.trim()!=0){
        if(username==userData.fname && password==userData.pass){
            location.href = 'home.html';
        }
        else{ 
            if(username!=storeName || username==null){
                document.getElementById("userDes").style.display="block";
                usernameId.style.border="2px solid red";
                usernameId.style.backgroundColor="rgb(235, 132, 132)";
            }
            if( password!=storePass || password==null){
                document.getElementById("passDesc").style.display="block";
                passwordId.style.border="2px solid red";
                passwordId.style.backgroundColor="rgb(235, 132, 132)";
            }
        }
    }
};

