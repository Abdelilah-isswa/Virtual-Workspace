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
    userinfopopup.className="father"
    userinfopopup.innerHTML=`

        <label for="">name</label>
        <input type="text">
         <button class="submit">submit</button>
        <button class="cancel" onclick="exituserinfopopup()">cancel</button>
    `
 document.body.append(userinfopopup)
        
    }
 
   
}
function exituserinfopopup(){

    userinfopopup.remove()
    
}