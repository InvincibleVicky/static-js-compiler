function runCode(){
  let selectOption = document.getElementById("dropdown").value;
  let contentDiv = document.getElementById("content");
  let code = "";

  if(selectOption === "Even Odd"){
    code =
    `function EvenOdd(Value){
    
      if(Value%2==0){
        return "Even";
      }else{
        return "Odd";
      }
    }
    console.log(EvenOdd(5));`;
  }

  try{
    contentDiv.innerHTML = code;
    eval(code);
  }
  catch(error){
    contentDiv.innerHTML = error.message;
  }
}