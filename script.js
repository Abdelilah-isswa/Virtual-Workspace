let userinfopopup;
let usersendtowork;
let stockdesdonner = [];

let Add_New_Worker_space = document.querySelector(".Add-New-Worker")
let newworker;
let Nom;
let idx = 0;
let son1arry =[];
let x=0;
let y;
////////
let son1 = document.querySelector(".son1")
let son2 = document.querySelector(".son2")
let son3 = document.querySelector(".son3")
let son4 = document.querySelector(".son4")
let son5 = document.querySelector(".son5")
/////////
let partexperience;
//////
function btn_add_new_worker() {

    if (document.getElementsByClassName("father").length > 0) {

    } else {
        userinfopopup = document.createElement("div")
        userinfopopup.className = "bigerfather"
        userinfopopup.innerHTML = `
    
                <div class="father">

        <label  for="">Nom</label>
        <input class="Nom" type="text" placeholder="entrer le nom">
        <label class="" for="">Role</label>
        <select class="form-input" id="role" required>
            <option value="">Sélectionnez un rôle</option>
            <option value="manager">Manager</option>
            <option value="technician">Technicien IT</option>
            <option value="receptionist">Réceptionniste</option>
            <option value="security">Agent de sécurité</option>
            <option value="cleaning">Nettoyage</option>
        </select>
        <label class="" for="">Photo</label>
        <input class="" type="text">
        <label class="" for="">Email</label>
        
        <input  type="text" placeholder="jean.dupont@worksphere.com" id="email" required>
        <label class="" for="">Téléphone</label>
        <input class="form-input" type="tel" placeholder="01 23 45 67 89" id="phone" required>
          <div class="partexperience">
            
        </div>
        <div class="btn-container">
            <button class="experience" onclick="addexperience()">Add experience</button>
            <button class="cancel" onclick="exituserinfopopup()">cancel</button>
            <button class="submit" onclick="submituserinfopopup()">submit</button>
        </div>
    
    `

        document.body.append(userinfopopup)
        Nom = document.querySelector(".Nom")
        // role = document.querySelector("")
        // photo = document.querySelector("")
        // email = document.querySelector("")
        // telephone = document.querySelector("")
        // expériences = document.querySelector("")
    }
 partexperience = document.querySelector(".partexperience")

}
function exituserinfopopup() {

    userinfopopup.remove()

}
function usersendtoworkpopup() {

    usersendtowork.remove()

   

}
function submituserinfopopup() {



    userinfopopup.remove()
    newworker = document.createElement("div")
    newworker.className = "newworker"
    let employe
    if (idx > 0) {
        employe = {
            id: idx,
            nome: Nom.value,
            role: "",
            photo: "",
            email: "",
            telephone: "",
            expériences: ""
        }

    } else {

        employe = {
            id: idx,
            nome: Nom.value,
            role: "",
            photo: "",
            email: "",
            telephone: "",
            expériences: ""
        }

    }
    console.log("id", employe.id)
    stockdesdonner.push(employe)

    idx++;
    //<div  newworker
    newworker.innerHTML = `   
   <img  class="userimg" src="img/img1.webp" alt="">
     <div class="workerinfo">
       
        <div class="name">${employe.nome}</div>
       <div class="role">${employe.role}</div>
     </div>
    
    <div class="workerbtn">
        <button class="editworker" onclick="btn_add_new_worker()">edit</button>
        <button class="deletworker" onclick="deletuser(${employe.id})">delet</button>
   
    </div>`

    console.log("employe.id", employe.id)

    console.log("arry", stockdesdonner)


    Add_New_Worker_space.append(newworker)
}
function deletuser(id) {
    console.log(" the id that you whant to delet:", id)

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

function add_worker_to_work_space() {
     usersendtowork = document.createElement("div")
     usersendtowork.className = "usersendtowork"
     usersendtowork.innerHTML = `

                 <div class="usersendtoworkcontainer">
                     <h1>Available Workers</h1>
                     <button class="cancelsendingworker" onclick="usersendtoworkpopup()">x</button>
                 </div>

        
    
    `
    console.log(stockdesdonner) //arry
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
         <button class="append" onclick="appendtotheimge(${stockdesdonner[i].id})">append</button>
   
    </div>`
        usersendtowork.append(newworker)
    }

    console.log(newworker)
   

}
//click on the append btn
 function appendtotheimge(id) {
    console.log("clicked")
    console.log(id)
  console.log("arr beffor append",stockdesdonner)
     let indextodeletinarry;
      for (let i = 0; i < stockdesdonner.length; i++) {
          if (stockdesdonner[i].id === id) {
              indextodeletinarry = i;
          }
      }
      let x = stockdesdonner.splice(indextodeletinarry, 1)
      console.log(" x",x[0])
      if(son1arry.length ===0){
        son1arry = x
      }else{
        son1arry.push(x[0])
      }
     
      
//      //id is the id of the element that i click on
      usersendtowork.innerHTML = ''
     //  usersendtoworkpopup()
//        usersendtowork = document.createElement("div")
       usersendtowork.className = "usersendtowork"
        usersendtowork.innerHTML = `
                    <div class="usersendtoworkcontainer">
                        <h1>Available Workers</h1>
                        <button class="cancelsendingworker" onclick="usersendtoworkpopup()">x</button>
                    </div>
   

       `
//       document.body.append(usersendtowork)
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
           usersendtowork.append(newworker)
       }
       refrech_the_users_that_are_added_to_son();
 
 }




function refrech_the_users_that_are_added_to_son(){

       for (let i = x; i < son1arry.length; i++) {
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
           <button class="deletworker" onclick="deletuser(${son1arry[i].id})">delet</button>
        
             <button class="append" onclick="appendtotheimge(${son1arry[i].id})">x</button>
       </div>`
           son1.append(newworker)
       }
       x++
}

 function refrech_the_users_that_are_in_the_waiting_room(id){
     
    //  Add_New_Worker_space.innerHTML=''
    //  console.log(stockdesdonner)
    //  let indextodeletinarry
    //    for (let i = 0; i < stockdesdonner.length; i++) {
    //      if (stockdesdonner[i].id === id) {
    //          indextodeletinarry = i;
    //      }
    //  }
    //  stockdesdonner.splice(indextodeletinarry, 1)
 
    //  //<div  newworker

    //  for (let i = 0; i < stockdesdonner.length; i++) {
    //      newworker = document.createElement("div")
    //      newworker.className = "newworker"
    //      newworker.innerHTML = `   
    // <img  class="userimg" src="img/img1.webp" alt="">
    //   <div class="workerinfo">
     
    //      <div class="name">${stockdesdonner[i].nome}</div>
    //     <div class="role"></div>
    //   </div>
  
    //  <div class="workerbtn">
    //      <button class="editworker" onclick="btn_add_new_worker()">edit</button>
    //      <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">delet</button>
    //       <button class="append" onclick="appendtotheimge(${stockdesdonner[i].id})">append</button>
 
    //  </div>`
      
    //       Add_New_Worker_space.append(newworker)
    //  }
  

 

 }

 
 function show_the_worker_after_appended_in_the_image(id,stockdesdonner){
//     //arry stockdesdonner
//     console.log("name appended1",stockdesdonner)
//     let indextodeletinarry;
//     for (let i = 0; i < stockdesdonner.length; i++) {
//         if (stockdesdonner[i].id === id) {
//             indextodeletinarry = i;
//         }
//     }
//     console.log("use of id appended",id)
//     console.log("name appended",stockdesdonner)
//              newworker.innerHTML = `   
//      <img  class="userimg" src="img/img1.webp" alt="">
//        <div class="workerinfo">

//           <div class="name"></div>
//          <div class="role"></div>
//          <div class="remouvefromroom" onclick="remouvefromroom()">x</div>
//        </div>
//   `
//     son1.append(newworker)
 }

function remouvefromroom(){
    console.log("remouved from room")
    //usersendtoworkpopup()
  
   
}
function addexperience(){
     y = document.createElement("div")
       
        y.innerHTML = `<input class="" type="text">`
       partexperience.append(y)

}