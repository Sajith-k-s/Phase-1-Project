
// register

function sub() {
    Bank = {
        username : uname.value,
        accountno : acno.value,
        password : pass.value,
    }
    if(acno.value in localStorage) {
    alert('Account already exist')
    }
    else if(acno.value ==""){
        alert('Enter details')
    }
    else{
        localStorage.setItem(acno.value , JSON.stringify(Bank))
        alert('Account registered successfully')
        window.location = "./login.html"
    }
}


// login


function log() {
       a = iiii.value
       b = ee.value

       
  if(a in localStorage) {
    details= JSON.parse(localStorage.getItem(a))
  
  if(b == details.password) {
    alert('Login Successfull')
    window.location ="https://www.booking.com/index.en.html?label=city-tour-english-en-india-pyMhZn68*A0ohqMSDAaY3gS433577572987%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-17722291%3Alp9040216%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=;gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8sq0Xj-IoNl-GjXNiLpkPwV7tynZQBdWN_HuQYp4EzQa48RjK5-K60aAm0XEALw_wcB;aid=309654"
  }
  else{
    alert('Incorrect Password')
  }
}
else{
    alert('Invalid Account Number')
}
}

