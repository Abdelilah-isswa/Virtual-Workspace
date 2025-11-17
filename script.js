let userinfopopup;
let stockdesdonner = [];
let employe ={
    id:"",
    nome:"",
    role:"",
    photo:"",
    email:"",
    telephone:"",
    expériences:""
}

function btn_add_new_worker(){
    
    if(document.getElementsByClassName("father").length>0){
        
    }else{
               userinfopopup= document.createElement("div")
    userinfopopup.className="bigerfather"
    userinfopopup.innerHTML=`
    
    <div class="father">

        <label class="Nom" for="">Nom</label>
        <input class="" type="text" placeholder="">
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
            <button class="submit">submit</button>
        </div>

    </div>
    
    `
  
 document.body.append(userinfopopup)
        
    }
 
   
}
function exituserinfopopup(){

    userinfopopup.remove()
    
}