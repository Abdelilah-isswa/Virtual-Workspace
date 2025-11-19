let userinfopopup;
let usersendtowork;
let stockdesdonner = [];
let img;

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

    // if (document.getElementsByClassName("father").length > 0) {

    // } else {
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
    // }


}
function exituserinfopopup() {

    userinfopopup.remove()

}
function usersendtoworkpopup() {

    usersendtowork.remove()



}
function submituserinfopopup() {


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
        <button class="editworker" onclick="btn_add_new_worker()">edit</button>
        <button class="deletworker" onclick="deletuser(${employe.id})">delet</button>
   
    </div>`




    Add_New_Worker_space.append(newworker)
    
    // }
}
function deletuser(id) {


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
         <div class="role"></div>
       </div>
      <div class="workerbtn">
          <button class="editworker" onclick="btn_add_new_worker()">edit</button>
          <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
      </div>`
        Add_New_Worker_space.append(newworker)
    }



}

function add_worker_to_work_space(xy) {

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
       <div class="role"></div>
     </div>
    
    <div class="workerbtn">
        <button class="editworker" onclick="btn_add_new_worker()">edit</button>
        <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
         <button class="append" onclick="appendtotheimge(${stockdesdonner[i].id},${xy})">append</button>
   
    </div>`
        usersendtowork.append(newworker)
    }



}
//click on the append btn
function appendtotheimge(id, xy) {
 
console.log("append")

    let indextodeletinarry;
    for (let i = 0; i < stockdesdonner.length; i++) {
        if (stockdesdonner[i].id === id) {
            indextodeletinarry = i;
            break
        }
    }
   
      let x = stockdesdonner.splice(indextodeletinarry, 1)
     

    if (son1arry.length === 0) {
        son1arry = x
    } else {
        son1arry.push(x[0])
    }
console.log("unsined",stockdesdonner)
console.log("sined",son1arry)
    
    
    //      //id is the id of the element that i click on
    usersendtoworkpopup()
   
    refrech_the_users_that_are_added_to_son(xy);
    // refrech_the_users_that_are_added_to_son_in_case_append(xy)
    refrech_the_users_that_are_in_the_waiting_room(id)
  


}



let zz=0;
function refrech_the_users_that_are_added_to_son(xy) {
    
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

//fix this probleme about affecting to multipla sones



curentson.innerHTML=''
    for (let i = zz; i < son1arry.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
       <div class="workerinfo">
           <div class="name">${son1arry[i].nome}</div>
          <div class="role"></div>
        </div>
       <div class="workerbtn">
           <button class="editworker" onclick="btn_add_new_worker()">edit</button>
          
        
             <button class="removeworkerfromworkspacebtn" onclick="removeworkerfromson(${son1arry[i].id},${xy})">x</button>
       </div>`
        curentson.append(newworker)
    }
    x++
   zz++



}

function refrech_the_users_that_are_in_the_waiting_room(id) {

    Add_New_Worker_space.innerHTML = ''

    //<div  newworker
    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
       <div class="workerinfo">
    
          <div class="name">${stockdesdonner[i].nome}</div>
         <div class="role"></div>
       </div>

      <div class="workerbtn">
          <button class="editworker" onclick="btn_add_new_worker()">edit</button>
          <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
           <button class="append" onclick="appendtotheimge(${stockdesdonner[i].id})">append</button>

      </div>`

        Add_New_Worker_space.append(newworker)
    }




}


function show_the_worker_after_appended_in_the_image(id, stockdesdonner) {
    //arry stockdesdonner

    let indextodeletinarry;
    for (let i = 0; i < stockdesdonner.length; i++) {
        if (stockdesdonner[i].id === id) {
            indextodeletinarry = i;
        }
    }

    newworker.innerHTML = `   
      <img  class="userimg" src="img/img1.webp" alt="">
        <div class="workerinfo">
           <div class="name"></div>
          <div class="role"></div>
          <div class="remouvefromroom" onclick="remouvefromroom()">x</div>
        </div>
   `
    son1.append(newworker)
}


function addexperience() {
    //  partexperience = document.querySelector(".partexperience")
    let father = document.querySelector(".father")
    experiencefild = document.createElement("div")
    experiencefild.className = "partexperience"
    experiencefild.innerHTML = `
        <label class="" for="experiences">experiences</label>
        <input class="" id="experiences" type="text">`

    father.append(experiencefild)
    expériences = document.querySelector("#experiences")

}
function removeworkerfromson(id,xy) {



      let indextodeletinarry;
     for (let i = 0; i < son1arry.length; i++) {
        if (son1arry[i].id === id) {
             indextodeletinarry = i;
         }
     }
     console.log(indextodeletinarry)
  let x=  son1arry.splice(indextodeletinarry, 1)
    console.log("x",x)

    stockdesdonner.push(x[0])

 refrech_the_users_that_are_in_the_waiting_room(id)
 refrech_the_users_that_are_added_to_son(xy)  
    //   if(son1arry.length ===0){
    //     son1arry = x
    //   }else{
    //     son1arry.push(x[0])
    //   }
    //stockdesdonner.push(x[0])
   //son1.innerHTML = ''

    usersendtoworkpopup();
    // reloadthenewworkerspace();

}



function reloadthenewworkerspace() {


    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
     <img  class="userimg" src="img/img1.webp" alt="">
        <div class="workerinfo">
            <div class="name">${stockdesdonner[i].nome}</div>
           <div class="role"></div>
         </div>
        <div class="workerbtn">
            <button class="editworker" onclick="btn_add_new_worker()">edit</button>
            <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
        
              <button class="removeworkerfromworkspacebtn" onclick="removeworkerfromson(${stockdesdonner[i].id})">xx</button>
        </div>`

        Add_New_Worker_space.append(newworker)
    }


}


