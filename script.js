let userinfopopup;
let stockdesdonner = [];

let Add_New_Worker_space= document.querySelector(".Add-New-Worker")
let newworker;
let Nom ;
let id;

/////////
function btn_add_new_worker(){
    
    if(document.getElementsByClassName("father").length>0){
        
    }else{
               userinfopopup= document.createElement("div")
    userinfopopup.className="bigerfather"
    userinfopopup.innerHTML=`
    
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
function exituserinfopopup(){

    userinfopopup.remove()
    
}
function submituserinfopopup(){
    console.log(Nom.value)
    if(typeof id ==='undefined'){
        id=0;
    }
    userinfopopup.remove()
    newworker = document.createElement("div")
    newworker.className="newworker"
    let employe ={
    id:id,
    nome: Nom.value,
    role:"",
    photo:"",
    email:"",
    telephone:"",
    expériences:""
}
  

stockdesdonner.push(employe)
console.log(stockdesdonner)

                          //<div  newworker
newworker.innerHTML=`   
   <img  class="userimg" src="img/img1.webp" alt="">
     <div class="workerinfo">
       
        <div class="name">${employe.nome}</div>
       <div class="role">${employe.role}</div>
     </div>
    
    <div class="workerbtn">
        <button class="editworker" onclick="btn_add_new_worker()">edit</button>
        <button class="deletworker" onclick="deletuser(${id})">delet</button>
   
    </div>`


    Add_New_Worker_space.append(newworker)
     id++;
   
}
function deletuser(id){ 
 //fix probleme   
  //let y =  stockdesdonner[id].splice(id,1)
  console.log(y)
//    console.log(stockdesdonner)
    
    

}