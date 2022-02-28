//lab 1
// let firstName = window.prompt("enter your first name :");
// console.log(firstName);

// let lastName = window.prompt("enter your last name :");
// console.log(lastName);

// let fullName = firstName + lastName ;
// console.log(fullName);
// // if(window.confirm(`your full name is : ${fullName}  ??`)){
// // let birthYear = window.prompt("what is your birth year :");
// // alert( ` welcome mr/mrs ${fullName}  your age is ${2021-birthYear}`);
// // }
// window.confirm(`your full name is : ${fullName}  ??`);
// let birthYear = window.prompt("what is your birth year :");
// alert( ` welcome mr/mrs ${fullName}  your age is ${2021-birthYear}`);

//lab 2
// var ul = document.createElement("ul")
// document.body.append(ul);
// var li = document.createElement(li);
// ul.appendChild(li);
// let name = prompt ('enter your names list :');

// do{
    
//     var ul = document.createElement("ul")
//     document.body.append(ul);
//     var li = document.createElement(li);
//     ul.appendChild(li);
//     let name = prompt ('enter your names list :');
//     name++;

var ul = document.createElement("ul")
  document.body.appendChild(ul);

while (true){

    
    var data = prompt ('enter your names list :');
    console.log(data);

    if(data !== null ){
        var item = document.createElement("li");
        item.innerText = data;
        ul.appendChild(item);
        
       
    }
    else{
        
        break;
    }
}
   

 