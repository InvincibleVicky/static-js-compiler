
  document.getElementById("dropdown").addEventListener('click',function(){
    let selectOption = this.value;
    let contentDiv =document.getElementById("content");
    contentDiv.innerHTML = "";

    if(selectOption === "Even Odd"){
      contentDiv.innerHTML = 
      `let value = prompt("Enter the Number: ");

      if(value%2 == 0){ 

        document.getElementById("runProgram").innerHTML = "Even";
    }else{

      document.getElementById("runProgram").innerHTML = "Odd";
    }`
    }
    else if(selectOption === "Amstrong Number"){

      contentDiv.innerHTML = 
      `let val = prompt("Enter a number !"); 
      let sum = 0; 
      let temp = val;
  
      while(temp>0){
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp/10);
      }
      if(sum == val) 
      {
        document.getElementById("runProgram").innerHTML ="Armstrong Number";
      } 
      else{
        document.getElementById("runProgram").innerHTML ="Not an Armstrong Number";
      }`
      
    }
    else if(selectOption === "Reverse String"){
      contentDiv.innerHTML = 
      ` let string = prompt("Enter the String: ");
      len = string.length;
      let newStr = "";
  
      for(i=len-1;i>=0;i--){
        newStr += string[i];
      }
      document.getElementById("runProgram").innerHTML = newStr;`
    }
    else if(selectOption === "palindrome"){
      contentDiv.innerHTML = 
      `let remainder = number % 10;
      result = result*10 + remainder;
      number = parseInt(number/10);
    }
  
    if(result == temp){

      document.getElementById("runProgram").innerHTML = "Palindrome";
    }
    else{
      document.getElementById("runProgram").innerHTML = "Not a Palindrome";
    }
  }`
    }
    
  })
  
  
  function run(){
    let selectOption = document.getElementById("dropdown").value;
    if(selectOption === "Even Odd"){

    let value = prompt("Enter the Number: ");

        if(value%2 == 0){
          document.getElementById("runProgram").innerHTML = "Even";
      }else{
        document.getElementById("runProgram").innerHTML = "Odd";
      }
    
    // let output = EvenOdd(5);
    // document.getElementById("runProgram").innerHTML = output;

  }
  else if(selectOption === "Amstrong Number"){

    let val = prompt("Enter a number !"); 
    let sum = 0; 
    let temp = val;

    while(temp>0){
      let remainder = temp % 10;
      sum += remainder * remainder * remainder;
      temp = parseInt(temp/10);
    }
    if(sum == val) 
    {
      document.getElementById("runProgram").innerHTML ="Armstrong Number";
    } 
    else{
      document.getElementById("runProgram").innerHTML ="Not an Armstrong Number";
    }
    
    //document.getElementById("runProgram").innerHTML = y;
  }

 
  else if(selectOption === "Reverse String"){

    let string = prompt("Enter the String: ");
    len = string.length;
    let newStr = "";

    for(i=len-1;i>=0;i--){
      newStr += string[i];
    }
    document.getElementById("runProgram").innerHTML = newStr;
    
    // let output = RevString("vicky");
    // document.getElementById("runProgram").innerHTML = output;

  }

  else if(selectOption === "palindrome"){

    let number = prompt("Enter a Number:");

      let result = 0;
      let temp = number;

      while(number>0){

        let remainder = number % 10;
        result = result*10 + remainder;
        number =  parseInt(number/10);
      }
    
      console.log(result);
      console.log(temp);

      if(result == temp){

        document.getElementById("runProgram").innerHTML = "Palindrome";
      }
      else{
        document.getElementById("runProgram").innerHTML = "Not a Palindrome";
      }
    }
    //console.log(palidromeFun(137));
  }

//Armstrong
// let val;
//       val = prompt("Enter a number !"); 
//       let n = val.length; 
//       let sum = 0;
//       for(let i=0;i\<\ n;i++)
//       {
//     let digit = val[i]-'0'; 
//     sum = (sum + Math.pow(digit,n)); 
//       }
//       if(sum == val) 
//       {
//     console.log("Armstrong Number");
//       }
//       else{
//     console.log("Not an Armstrong Number");
//       }