let userinfopopup;
let usersendtowork;
let stockdesdonner = [];
let img;
let curentarry;
let Add_New_Worker_space = document.querySelector(".Add-New-Worker")
let newworker;
let Nom, role, photo, email, telephone, expériences;
let idx = 0;
let son1arry = [];
let son2arry = [];
let son3arry = [];
let son4arry = [];
let son5arry = [];
let son6arry = [];
let x = 0;
let experiencefild;
let xz;
let btn_container;
////////
let son1 = document.querySelector(".son1")
let son2 = document.querySelector(".son2")
let son3 = document.querySelector(".son3")
let son4 = document.querySelector(".son4")
let son5 = document.querySelector(".son5")
let son6 = document.querySelector(".son6")
/////////
let partexperience;
//////
function btn_add_new_worker() {
console.log("add new worker")

    userinfopopup = document.createElement("div")
    userinfopopup.className = "bigerfather"
    userinfopopup.innerHTML = `
    
        <div class="father">

        <label  for="Nom">Nom</label>
        <input class="Nom" type="text" placeholder="entrer le nom" required id="Nom">
        <label class="" for="role">Role</label>
        <select class="form-input" id="role" required>
            <option value="">Sélectionnez un rôle</option>
            <option value="manager">Manager</option>
            <option value="technician">Technicien IT</option>
            <option value="receptionist">Réceptionniste</option>
            <option value="security">Agent de sécurité</option>
            <option value="cleaning">Nettoyage</option>
        </select>
        <label class="" for="Photo" >Photo</label>
        <input class="Photo" type="file" accept="image/*" id="Photo" required>
        <label class="" for="email">Email</label>
        
        <input  type="text" placeholder="jean.dupont@worksphere.com" id="email" required>
        <label class="" for="phone">Téléphone</label>
        <input class="" type="tel" placeholder="01 23 45 67 89" id="phone" required >
       


        <div class="btn-container">
            <button class="experience" onclick="addexperience()">Add experience</button>
            <button class="cancel" onclick="exituserinfopopup()">cancel</button>
            <button class="submit" onclick="submituserinfopopup()">submit</button>
        </div>
        
    </div>
    
    `

    document.body.append(userinfopopup)
    Nom = document.querySelector(".Nom")
    role = document.querySelector("#role")
    photo = document.querySelector("#Photo")
    email = document.querySelector("#email")
    telephone = document.querySelector("#phone")
    img = document.querySelector("#Photo")
    img.src = "img/img1.webp"
    // expériences = document.querySelector("")
 btn_container =document.querySelector(".btn-container")


}
function exituserinfopopup() {

    userinfopopup.remove()

}
function usersendtoworkpopup() {

    usersendtowork.remove()



}
//click on submit
function submituserinfopopup() {
console.log("submit")

    //if(Nom.value==="" || role.value=="" || photo.value=="" || telephone.value==""||email.value==""){
    //  alert("Enter The info")
    // userinfopopup.remove()
    // btn_add_new_worker()
    //}else{
    userinfopopup.remove()
    newworker = document.createElement("div")
    newworker.className = "newworker"
    let employe
    if (idx > 0) {
        employe = {
            id: idx,
            nome: Nom.value,
            role: role.value,
            photo: photo.value,
            email: email.value,
            telephone: telephone.value,
            expériences: "",
            position: ""
        }
    } else {
        employe = {
            id: idx,
            nome: Nom.value,
            role: role.value,
            photo: photo.value,
            email: email.value,
            telephone: telephone.value,
            expériences: "",
            position: ""
        }
    }

    if (employe.photo === "") {
        employe.photo = img.src
    } else {
        console.log("you enterd an image")
    }
    stockdesdonner.push(employe)


    idx++;
    //<div  newworker




    newworker.innerHTML = `   
   <img  class="userimg" src="${employe.photo}" alt="">
     <div class="workerinfo">
       
        <div class="name">${employe.nome}</div>
       <div class="role">${employe.role}</div>
     </div>
    
    <div class="workerbtn">
        
        <button class="deletworker" onclick="deletuser(${employe.id})">delet</button>
   
    </div>`




    Add_New_Worker_space.append(newworker)
    
    // }
}
function deletuser(id) {
console.log("delet")

    Add_New_Worker_space.innerHTML = ''
    let indextodeletinarry;
    for (let i = 0; i < stockdesdonner.length; i++) {

        if (stockdesdonner[i].id === id) {
            indextodeletinarry = i;
        }
    }
    stockdesdonner.splice(indextodeletinarry, 1)

    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
       <div class="workerinfo">
          <div class="name">${stockdesdonner[i].nome}</div>
         <div class="role">${stockdesdonner[i].role}</div>
       </div>
      <div class="workerbtn">
          
          <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
      </div>`
        Add_New_Worker_space.append(newworker)
    }



}

function add_worker_to_work_space(xy) {
    console.log("click on blue box")
    
    usersendtowork = document.createElement("div")
    usersendtowork.className = "usersendtowork"
    usersendtowork.innerHTML = `

                 <div class="usersendtoworkcontainer">
                     <h1>Available Workers</h1>
                     <button class="cancelsendingworker" onclick="usersendtoworkpopup()">x</button>
                 </div>

        
    
    `
    //arry
    document.body.append(usersendtowork)
    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
   <img  class="userimg" src="img/img1.webp" alt="">
     <div class="workerinfo">
       
        <div class="name">${stockdesdonner[i].nome}</div>
       <div class="role">${stockdesdonner[i].role}</div>
     </div>
    
    <div class="workerbtn">
        
       
         <button class="append" onclick="appendtotheimge(${stockdesdonner[i].id},${xy})">append</button>
   
    </div>`
        usersendtowork.append(newworker)
    }



}

 function colorfun(){
    console.log("colorfun")
      if (son1arry.length>0) {
        son1.style.backgroundColor="green"}else{
            
            son1.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }
         if (son2arry.length>0) {
          
         son2.style.backgroundColor="green"}else{
            
            son2.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }
         if (son3arry.length>0) {
         son3.style.backgroundColor="green"}else{
            
            son3.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }
         if (son4arry.length>0) {
         son4.style.backgroundColor="green"}else{
            
            son4.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }
           if (son5arry.length>0) {
          son5.style.backgroundColor="green"}else{
            
            son5.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }
             if (son6arry.length>0) {
          son6.style.backgroundColor="green"}else{
            
            son6.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        }

 
 }

//click on the append btn
function appendtotheimge(id, xy) {
    console.log("append")
       if (xy === 1) {
        curentarry = son1arry
    } else if (xy === 2) {
        curentarry = son2arry
    } else if (xy === 3) {
        curentarry = son3arry
    } else if (xy === 4) {
        curentarry = son4arry
    } else if (xy === 5) {
        curentarry = son5arry
    } else {
        curentarry = son6arry
    }
 


    let indextodeletinarry;
    for (let i = 0; i < stockdesdonner.length; i++) {
        if (stockdesdonner[i].id === id) {
            indextodeletinarry = i;
            break
        }
    }
   
      let x = stockdesdonner.splice(indextodeletinarry, 1)
    //    console.log("stockdesdonner",stockdesdonner)
    //     console.log("curentarry",curentarry)
    
if(curentarry.length<3){
  if(x[0].role ==="manager"){
     if(curentarry===son1arry || curentarry===son2arry || curentarry===son3arry || curentarry===son4arry || curentarry===son5arry || curentarry===son6arry  ){
        
        curentarry.push(x[0])
        
     }else{
   stockdesdonner.push(x[0])

     }

  }else if(x[0].role ==="technician"){
   
     if(curentarry===son2arry){
        console.log("/1" ,xy)
        curentarry.push(x[0])
        son2.classList.toggle("green")
     }else{
         console.log("/2" ,xy)
         
          //son1.classList.add("red")
        stockdesdonner.push(x[0])
       
       
        //colorfun(curentarry).classList.add("red")
       

     }

  }else if(x[0].role ==="receptionist"){
       if(curentarry===son5arry){
        curentarry.push(x[0])
     }else{
        stockdesdonner.push(x[0])

     }


  }else if(x[0].role ==="security"){
       if(curentarry===son3arry){
        curentarry.push(x[0])
     }else{
        stockdesdonner.push(x[0])

     }

  }else if(x[0].role ==="cleaning"){
       if(curentarry===son5arry|| curentarry===son4arry ||curentarry===son6arry ||curentarry===son2arry ||curentarry===son3arry ){
        curentarry.push(x[0])
     }else{
        stockdesdonner.push(x[0])

     }
  }
  
      console.log("stockdesdonner1",stockdesdonner)
        console.log("curentarry1",curentarry)


}else{
    stockdesdonner.push(x[0])
    console.log("//////////////////full///////////////")
}

    
    //      //id is the id of the element that i click on
    usersendtoworkpopup()
   
    refrech_the_users_that_are_added_to_son(xy);
    // refrech_the_users_that_are_added_to_son_in_case_append(xy)
    refrech_the_users_that_are_in_the_waiting_room(id)

colorfun()

    // console.log("stockdesdonner",stockdesdonner)
    // console.log("son1arry",son1arry)
    // console.log("son2arry",son2arry)

  
    //  console.log("curentarry this",curentarry)


}




function refrech_the_users_that_are_added_to_son(xy) {

    console.log("refrech the users added to son")
    let curentson;


    if (xy === 1) {
        curentson = son1
    } else if (xy === 2) {
        curentson = son2
    } else if (xy === 3) {
        curentson = son3
    } else if (xy === 4) {
        curentson = son4
    } else if (xy === 5) {
        curentson = son5
    } else {
        curentson = son6
    }



curentson.innerHTML=''

////working one
//   for(let i =1 ;i<7;i++){
//          if (i === 1) {
//           curentson = son1
//       } else if (i === 2) {
//           curentson = son2
//       } else if (i === 3) {
//           curentson = son3
//       } else if (i === 4) {
//           curentson = son4
//       } else if (i === 5) {
//           curentson = son5
//       } else {
//           curentson = son6
//       }
//      // curentson.innerHTML=''
//   let title = document.createElement("div")
  
//             if (i === 1) {
                
//           title.innerText="Salle de conférence"
//   curentson.append(title)
//   while (curentson.children.length > 1) {
//     curentson.removeChild(curentson.lastChild);
// }
//       } else if (i === 2) {
          
//             title.innerText="Réception"
//   curentson.append(title)
//       } else if (i === 3) {
            
//            title.innerText="Salle des serveurs"
//   curentson.append(title)
//       } else if (i === 4) {
       
//            title.innerText="Salle de sécurité"
//   curentson.append(title)
//       } else if (i === 5) {
           
//            title.innerText="Salle du personnel"
//   curentson.append(title)
//       } else {
        
//            title.innerText="Salle d’archives"
//   curentson.append(title)
//       }
//   }
/////
  


/////
    for (let i = 0; i < curentarry.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
       <div class="workerinfo">
           <div class="name">${curentarry[i].nome}</div>
          <div class="role">${curentarry[i].role}</div>
        </div>
       <div class="workerbtn">
           
          
        
             <button class="removeworkerfromworkspacebtn" onclick="removeworkerfromson(${curentarry[i].id},${xy})">x</button>
       </div>`
        curentson.append(newworker)
    }
    x++

//    console.log("curentarry this",curentarry)


}

function refrech_the_users_that_are_in_the_waiting_room(id) {
console.log("refrech the users on waiting room")


   Add_New_Worker_space.innerHTML = ''

    // //<div  newworker
     for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
       newworker.innerHTML = `   
    <img  class="userimg" src="img/img1.webp" alt="">
      <div class="workerinfo">
   
         <div class="name">${stockdesdonner[i].nome}</div>
        <div class="role">${stockdesdonner[i].role}</div>
      </div>
     <div class="workerbtn">
        
         <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
    
     </div>`

         Add_New_Worker_space.append(newworker)
     }



}





function addexperience() {
    //  partexperience = document.querySelector(".partexperience")
    let father = document.querySelector(".father")
    // experiencefild = document.createElement("div")
    // experiencefild.className = "partexperience"
    let experiencefild = `
        <label class="" for="experiences">experiences</label>
        <input class="" id="experiences" type="text">
        <input type="date" id="start-time" name="meeting-time">
        <input type="date" id="end-time" name="meeting-time">
        <input class="role_input" id="experiences" type="text">
        `

    // father.append(experiencefild)
 btn_container.insertAdjacentHTML('beforebegin', experiencefild);
    expériences = document.querySelector("#experiences")

}


function removeworkerfromson(id,xy) {
       if (xy === 1) {
        curentarry = son1arry
    } else if (xy === 2) {
        curentarry = son2arry
    } else if (xy === 3) {
        curentarry = son3arry
    } else if (xy === 4) {
        curentarry = son4arry
    } else if (xy === 5) {
        curentarry = son5arry
    } else {
        curentarry = son6arry
    }

console.log("click x")
// console.log("curentarry1",curentarry)

// console.log("stockdesdonner1",stockdesdonner)
//     console.log("son1arry1",son1arry)
//     console.log("son2arry1",son2arry)
    //   let indextodeletinarry;
     for (let i = 0; i < curentarry.length; i++) {
  
        if (curentarry[i].id === id) {
    //     //      indextodeletinarry = i;
    //     console.log("enterd")
               let x=  curentarry.splice(i, 1)[0]
            stockdesdonner.push(x)
           
          }
     }
     


 refrech_the_users_that_are_in_the_waiting_room(id)
 refrech_the_users_that_are_added_to_son(xy)  


    usersendtoworkpopup();
colorfun()

    // console.log("stockdesdonner2",stockdesdonner)
    // console.log("son1arry2",son1arry)
    // console.log("son2arry2",son2arry)


}



function reloadthenewworkerspace() {


    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
        <div class="workerinfo">
            <div class="name">${stockdesdonner[i].nome}</div>
           <div class="role">${stockdesdonner[i].role}</div>
         </div>
        <div class="workerbtn">
            <button class="editworker" onclick="btn_add_new_worker()">edit</button>
            <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
        
              <button class="removeworkerfromworkspacebtn" onclick="removeworkerfromson(${stockdesdonner[i].id})">xx</button>
        </div>`

        Add_New_Worker_space.append(newworker)
    }


}


function refreshAllSons() {
    const sons = [
        { element: son1, array: son1arry, number: 1 },
        { element: son2, array: son2arry, number: 2 },
        { element: son3, array: son3arry, number: 3 },
        { element: son4, array: son4arry, number: 4 },
        { element: son5, array: son5arry, number: 5 },
        { element: son6, array: son6arry, number: 6 }
    ];

    sons.forEach(son => {
        son.element.innerHTML = '';
        
        for (let i = 0; i < son.array.length; i++) {
            let newworker = document.createElement("div");
            newworker.className = "newworker";
            newworker.innerHTML = `   
                <img class="userimg" src="img/img1.webp" alt="">
                <div class="workerinfo">
                    <div class="name">${son.array[i].nome}</div>
                    <div class="role">${son.array[i].role}</div>
                </div>
                <div class="workerbtn">
                   
                    <button class="removeworkerfromworkspacebtn" onclick="removeworkerfromson(${son.array[i].id}, ${son.number})">x</button>
                </div>`;
            son.element.append(newworker);
        }
    });
}

refreshAllSons()
