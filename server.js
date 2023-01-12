function register() {
  var nameFromHtml = document.getElementById("name");
  if (nameFromHtml) {
    var name = nameFromHtml.value;
    console.log("name");
  }

  var emailFromHtml = document.getElementById("email");
  if (emailFromHtml) {
    var email = emailFromHtml.value;
    console.log("email");
  }

  var passwordFromHtml = document.getElementById("password");
  if (passwordFromHtml) {
    var password = passwordFromHtml.value;
    console.log("password");
  }

  if (name && email && password) {
    console.log("All fields are there");
    localStorage.setItem("userData", JSON.stringify({ nameofUser: name, emaliofUser: email, passwordofUser: password }));
    localStorage.setItem("isuserLogedIn", "false");
    alert("Registration Done");
    window.location.href = "./login.html";
  } else {
    alert("Error :- write all fields..")

  }
}

//  function Login(){
//     var emailFromHtml = document.getElementById("email");
//      if(emailFromHtml){
//        var emailFromLogin =emailFromHtml.value;
//        console.log(emailFromLogin)
//    } 

//        var passwordFromHtml = document.getElementById("password");
//          if(passwordFromHtml){
//           var passwordFromlogin = passwordFromHtml.value;
//           console.log(passwordFromlogin)
//   }
//         if(emailFromLogin && passwordFromlogin){
//         var dataFromLocal = localStorage.getItem("userdata");
//         // console.log(dataFrmLocal);
//         var parsedData = JSON.parse(dataFromLocal);
//         console.log(parsedData.emaliofUser,"parsedData.emaliofUser");
//          if(emailFromLogin == parsedData.emaliofUser && passwordFromlogin== parsedData.passwordofUser){

//          localStorage.setItem("isUserLoggedIn","true");
//          alert("Loginn Succsessfull")
//          window.location.href = "./home.html";
//     } else {
//        alert("wrong cred !")
//     }
//     }else {
//           alert("write all credit")


//    }
// }
function Login() {
  var emailFromHTML = document.getElementById("email");
  if (emailFromHTML) {
    var emailFromLogin = emailFromHTML.value;
    console.log(emailFromLogin);
  }
  var passwordfromhtml = document.getElementById("password");
  if (passwordfromhtml) {
    var passwordFromLogin = passwordfromhtml.value;
  }

  if (emailFromLogin && passwordFromLogin) {
    var datafomlocal = localStorage.getItem("userData");
    var parsedData = JSON.parse(datafomlocal);

    if (
      emailFromLogin == parsedData.emaliofUser &&
      passwordFromLogin == parsedData.passwordofUser) {
      localStorage.setItem("isuserLoggedIn", "true");
      alert("Login Sucessfull");
      window.location.href = "./home.html";
    } else {
      alert("Wrong Credentilas !!!");
    }
  } else {
    alert("Erroe:Please fill all the Details")
  }
}




// function addToCart (proId){
//     // alert("Adding to Cart");
//     console.log(proId,"proId")
//     var existingProducts = localStorage.getItem("allProducts");
//     console.log("existingProducts")
//     if(existingProducts == null){existingProducts=[]}

//     console.log(existingProducts, "existingProducts 1")
//      var props= proId.queryselectorAll("P")
//     var proname = props[0].innertext;
//     // console.log(proname,"proname")
//     var proimg = proId.queryselectors("img").src;
//     var proprice = props[2].innertext;
//       // console.log(proprice)
//     var proObj = {pN:proname , pP:proprice, pI:proimg}
//     // console.log(proObj)
//     existingProducts.push(proObj);
//     // console.log(existingProducts,"existingProducts 2")
//     localStorage.setItem("allProducts",JSON.stringify (existingProducts))
//     alert("Product added ..!");
// }


function addToCart(proId) {
  alert("Add to cart Working");

  var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
  // console.log(existingProducts);
  if (existingProducts == null) { existingProducts = [] }

  // console.log(existingProducts, "existingProducts 1")

  var proPs = proId.querySelectorAll("p");
  var proName = proPs[0].innerText;
  // console.log(proName, "proName");
  // ------///
  var proImg = proId.querySelector("img").src;
  // console.log(proImg, "proImg");
  // ------//
  var proPrice = proPs[2].innerText;
  //  console.log(proPrice, "proPrice");
  //  ----------//
  var proObj = { pN: proName, pP: proPrice, pI: proImg };
  console.log(proObj);
  // --------//
  existingProducts.push(proObj);
  // console.log(existingProducts, "existingProducts 2");
  localStorage.setItem("allProducts", JSON.stringify(existingProducts));
  alert("Product added !");
}



