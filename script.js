let userinfopopup;
let stockdesdonner = [];

let Add_New_Worker_space = document.querySelector(".Add-New-Worker")
let newworker;
let Nom;
let idx =0;

/////////
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
        <div class="btn-container">

            <button class="cancel" onclick="exituserinfopopup()">cancel</button>
            <button class="submit" onclick="submituserinfopopup()">submit</button>
        </div>

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


}
function exituserinfopopup() {

    userinfopopup.remove()

}
function submituserinfopopup() {
    

  
    userinfopopup.remove()
    newworker = document.createElement("div")
    newworker.className = "newworker"
    let employe
    if (idx> 0){
     employe = {
        id:idx ,
        nome: Nom.value,
        role: "",
        photo: "",
        email: "",
        telephone: "",
        expériences: ""
    }
        
    }else{
        
 employe = {
        id: idx ,
        nome: Nom.value,
        role: "",
        photo: "",
        email: "",
        telephone: "",
        expériences: ""
    }
    
    }
    console.log("id",employe.id)
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

    console.log("employe.id",employe.id)
  
    console.log("arry",stockdesdonner)


      Add_New_Worker_space.append(newworker)
}
 function deletuser(id) {
     console.log(" the id that you whant to delet:",id)
  
    Add_New_Worker_space.innerHTML=''
    let indextodeletinarry;
    for(let i=0;i<stockdesdonner.length;i++){

        if(stockdesdonner[i].id===id){
            indextodeletinarry=i;
        }
    }
    stockdesdonner.splice(indextodeletinarry,1)

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

// //   console.log(" the arry befor delet:")
// // for (let i = 0; i < stockdesdonner.length; i++) {
// // console.log(`stockdesdonner[${i}].nome :` ,stockdesdonner[i].nome)
// // console.log(`stockdesdonner[${i}].id :` ,stockdesdonner[i].id)

// // }

// // 

// //  console.log(" the arry after delet:")
// //  for (let i= stockdesdonner.length-1; i >=0 ; i--) {
// // console.log(`stockdesdonner[${i}].nome :` ,stockdesdonner[i].nome)
// // console.log(`stockdesdonner[${i}].id :` ,stockdesdonner[i].id)

// // }

 }

