let userinfopopup;
let usersendtowork;
let stockdesdonner = [];
let img;
let curentarry;
let Add_New_Worker_space = document.querySelector(".Add-New-Worker")
let newworker;
let Nom, role, photo, email, telephone;
let exptitle, expcompany, expstartdate, expenddate;
let experiencesarry = [];
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
let btnexperience;
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
let sidebar = document.querySelector(".side-bar")
//////
let fson1 = document.querySelector(".father-son1")
let fson2 = document.querySelector(".father-son2")
let fson3 = document.querySelector(".father-son3")
let fson4 = document.querySelector(".father-son4")
let fson5 = document.querySelector(".father-son5")
let fson6 = document.querySelector(".father-son6")

//////
function btn_add_new_worker() {
    console.log("add new worker")

    userinfopopup = document.createElement("div")
    userinfopopup.className = "bigerfather"
    userinfopopup.innerHTML = `
    
        <div class="father">

        <label  for="Nom">Nom :</label>
        <input class="Nom" type="text" placeholder="entrer le nom" required id="Nom">
        <label class="" for="role">Role :</label>
        <select class="form-input" id="role" required>
            <option value="">Sélectionnez un rôle</option>
            <option value="manager">Manager</option>
            <option value="technician">Technicien IT</option>
            <option value="receptionist">Réceptionniste</option>
            <option value="security">Agent de sécurité</option>
            <option value="cleaning">Nettoyage</option>
        </select>
        <label class="" for="Photo" >Photo :</label>
        <input class="Photo" type="text"  id="Photo" required>
        <label class="" for="email">Email :</label>
        
        <input  type="text" placeholder="jean.dupont@worksphere.com" id="email" required>
        <label class="" for="phone">Téléphone :</label>
        <input class="" type="tel" placeholder="01 23 45 67 89" id="phone" required >
       


        <div class="btn-container">
            <button class="experience" onclick="addexperience()">Experience</button>
            <button class="cancel" onclick="exituserinfopopup()">cancel</button>
            <button class="submit" onclick="submituserinfopopup()">submit</button>
        </div>
        
    </div>
    
    `
    btnexperience = document.querySelector(".experience")

    document.body.append(userinfopopup)
    Nom = document.querySelector(".Nom")
    role = document.querySelector("#role")
    photo = document.querySelector("#Photo")
    email = document.querySelector("#email")
    telephone = document.querySelector("#phone")
    img = document.querySelector("#Photo")
    img.src = "img/img1.webp"
    // expériences = document.querySelector("")
    btn_container = document.querySelector(".btn-container")


}
function exituserinfopopup() {

    userinfopopup.remove()

}
function usersendtoworkpopup() {

    usersendtowork.remove()



}
//click on submit
function submituserinfopopup() {
    if (countexp > 0) {

        let experience = {
            title: exptitle[countexp - 1].value,
            company: expcompany[countexp - 1].value,
            startdate: expstartdate[countexp - 1].value,
            enddate: expenddate[countexp - 1].value
        }
        experiencesarry.push(experience)
        console.log("hi")


    }  



    console.log("experiencesarry1", experiencesarry)
    console.log("countexp", countexp)
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
            expériences: experiencesarry,
           
        }
    } else {
        employe = {
            id: idx,
            nome: Nom.value,
            role: role.value,
            photo: photo.value,
            email: email.value,
            telephone: telephone.value,
            expériences: experiencesarry,
           
        }
    }

    if (employe.photo === "") {
        employe.photo = img.src
    } else {
        console.log("you enterd an image")
    }
    stockdesdonner.push(employe)


    idx++;
    countexp = 0;
    experiencesarry = []
    //<div  newworker

    console.log("stockdesdonner", stockdesdonner)


    newworker.innerHTML = `   
   <img  class="userimg" src="${employe.photo}" alt="" onclick="showuserinfo(${employe.id})">
     <div class="workerinfo">
       
        <div class="name">${employe.nome}</div>
       <div class="role">${employe.role}</div>
     </div>
    
    <div class="workerbtn">
        
        <button class="deletworker" onclick="deletuser(${employe.id})">x</button>
   
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
          
          <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">x</button>
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

function colorfun() {
    console.log("colorfun")
    if (son1arry.length > 0) {
        son1.style.backgroundColor = "green"
        fson1.style.backgroundColor = "green"
    } else {

        son1.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
        fson1.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
    }
    if (son2arry.length > 0) {

        son2.style.backgroundColor = "green"
        fson2.style.backgroundColor = "green"
    } else {

        son2.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
        fson2.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
    }
    if (son3arry.length > 0) {
        son3.style.backgroundColor = "green"
        fson3.style.backgroundColor = "green"
    } else {

        son3.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
        fson3.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
    }
    if (son4arry.length > 0) {
        son4.style.backgroundColor = "green"
        fson4.style.backgroundColor = "green"
    } else {

        // son4.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        // fson4.style.backgroundColor="rgba(255, 0, 0, 0.504)"
    }
    if (son5arry.length > 0) {
        son5.style.backgroundColor = "green"
        fson5.style.backgroundColor = "green"
    } else {

        son5.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
        fson5.style.backgroundColor = "rgba(255, 0, 0, 0.504)"
    }
    if (son6arry.length > 0) {
        son6.style.backgroundColor = "green"
        fson6.style.backgroundColor = "green"

    } else {

        // son6.style.backgroundColor="rgba(255, 0, 0, 0.504)"
        // fson6.style.backgroundColor="rgba(255, 0, 0, 0.504)"
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

    if (curentarry.length < 3) {
        if (x[0].role === "manager") {
            if (curentarry === son1arry || curentarry === son2arry || curentarry === son3arry || curentarry === son4arry || curentarry === son5arry || curentarry === son6arry) {

                curentarry.push(x[0])

            } else {
                stockdesdonner.push(x[0])

            }

        } else if (x[0].role === "technician") {

            if (curentarry === son2arry) {
                console.log("/1", xy)
                curentarry.push(x[0])
                son2.classList.toggle("green")
            } else {
                console.log("/2", xy)

                //son1.classList.add("red")
                stockdesdonner.push(x[0])


                //colorfun(curentarry).classList.add("red")


            }

        } else if (x[0].role === "receptionist") {
            if (curentarry === son5arry) {
                curentarry.push(x[0])
            } else {
                stockdesdonner.push(x[0])

            }


        } else if (x[0].role === "security") {
            if (curentarry === son3arry) {
                curentarry.push(x[0])
            } else {
                stockdesdonner.push(x[0])

            }

        } else if (x[0].role === "cleaning") {
            if (curentarry === son5arry || curentarry === son4arry || curentarry === son6arry || curentarry === son2arry || curentarry === son3arry) {
                curentarry.push(x[0])
            } else {
                stockdesdonner.push(x[0])

            }
        }

        console.log("stockdesdonner1", stockdesdonner)
        console.log("curentarry1", curentarry)


    } else {
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



    curentson.innerHTML = ''




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
        
         <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">x</button>
    
     </div>`

        Add_New_Worker_space.append(newworker)
    }



}



let countexp = 0;

function addexperience() {
    //  partexperience = document.querySelector(".partexperience")
    let father = document.querySelector(".father")
    // experiencefild = document.createElement("div")
    // experiencefild.className = "partexperience"
    let experiencefild = `
        <label class="" for="experiences">experiences :</label>
         <label class="" for="">Title :</label>
        <input class="Title"  type="text">
         <label class="" for="">Company :</label>
          <input class="company"  type="text">
          <label class="" for="">start-date :</label>
        <input type="date" class="start-date" name="meeting-time">
        <label class="" for="" >end-date :</label>
        <input type="date" class="end-date" name="meeting-time">
       
        `

    // father.append(experiencefild)
    btn_container.insertAdjacentHTML('beforebegin', experiencefild);
    exptitle = document.querySelectorAll(".Title")
    expcompany = document.querySelectorAll(".company")
    expstartdate = document.querySelectorAll(".start-date")
    expenddate = document.querySelectorAll(".end-date")
    exp = document.querySelector("#experiences")
    let year1 = ""
    for (let i = 0; i < 4; i++) {
        console.log(i)
        // year1 =  year1+   
    }

    if (countexp > 0) {
        let experience = {
            title: exptitle[countexp - 1].value,
            company: expcompany[countexp - 1].value,
            startdate: expstartdate[countexp - 1].value,
            enddate: expenddate[countexp - 1].value
        }

        let d1 = new Date(expenddate[countexp - 1].value)
        let d2 = new Date(expstartdate[countexp - 1].value)

        console.log("expstartdatesssssss", (d1 - d2) / (1000 * 60 * 60 * 24))
        experiencesarry.push(experience)


        // console.log("start  year1",  expstarexperiencetdate.value)

    }
    // if(exptitle.value !=="" && expcompany!=="" &&expstartdate!=="" &&expenddate!==""){

    // }


    console.log("experiencesarry1", experiencesarry)


    countexp++
}


function removeworkerfromson(id, xy) {
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
            let x = curentarry.splice(i, 1)[0]
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
            <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">x</button>
        
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



function sidebarlogique() {
    sidebar.classList.add("show_side_bar")
}
function sidebarlogiqueexit() {
    sidebar.classList.remove("show_side_bar")
}
//  window.addEventListener("click",(x)=>{
//      if(sidebar.style.display ==="block"){
// sidebar.style.display="none"
// console.log("d")
// }
//  })

function showuserinfo(id) {
    console.log("clicked")

    //      let experience = {
    //         title: exptitle[countexp - 1].value,
    //         company: expcompany[countexp - 1].value,
    //         startdate: expstartdate[countexp - 1].value,
    //         enddate: expenddate[countexp - 1].value
    //     }
    //     experiencesarry.push(experience)
    //     console.log("hi")

console.log("//",stockdesdonner[0].expériences)
    // }   employe = {
    //         id: idx,
    //         nome: Nom.value,
    //         role: role.value,
    //         photo: photo.value,
    //         email: email.value,
    //         telephone: telephone.value,
    //         expériences: experiencesarry,


let userinfopopupexp

    for (let i = 0; i < stockdesdonner.length; i++) {

        if (stockdesdonner[i].id === id) {
            userinfopopup = document.createElement("div")
            userinfopopup.className = "bigerfather"
            userinfopopup.innerHTML = `
    
        <div class="showuserinfopopup">
                <div class="imgandexit">
                  <img  class="userimginfopopup" src="${stockdesdonner[i].photo}" alt="" ">
               <button class="rovetheuserinfopopup" onclick="exituserinfopopup()">x</button>
                </div>

             
     <div class="workerinfopopup">
       
        <div class="name">${stockdesdonner[i].nome}</div>
       <div class="role">${stockdesdonner[i].role}</div>
       <div class="role">Email : ${stockdesdonner[i].email}</div>
       <div class="role">Phone : ${stockdesdonner[i].telephone}</div>
      
      
     </div>
    
            
        
    </div>
    
    `
      


    for (let index = 0; index < stockdesdonner[i].expériences.length; index++) {
        userinfopopupexp = document.createElement("div")
        userinfopopupexp.classList ="experiencedes"
        
        userinfopopupexp.innerHTML =`
        <div class="role">Title : ${stockdesdonner[i].expériences[index].title}</div>
       <div class="role">Company : ${stockdesdonner[i].expériences[index].company}</div>
       <div class="role">Start-date : ${stockdesdonner[i].expériences[index].startdate}</div>
       <div class="role">End-date : ${stockdesdonner[i].expériences[index].enddate}</div>
        
        `


          console.log("exp name", stockdesdonner[i].expériences[index].title) 
        console.log("i",i)
       //  userinfopopup.innerHTM=`  <div class="name"> ${stockdesdonner[index].telephone}</div>
    // `
   }






        }
    }

 console.log("stockdesdonner[i].expériences", stockdesdonner[0].expériences[0].title)
   
    document.body.append(userinfopopup)
    userinfopopup.append(userinfopopupexp)


}