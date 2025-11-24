let userinfopopup;
let usersendtowork;
let stockdesdonner = [
    {
        id: 0,
        nome: "Youssef Alami",
        role: "manager",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        email: "youssef.alami@worksphere.com",
        telephone: "06 12 34 56 78",
        expériences: [
            {
                title: "Project Manager",
                company: "Tech Solutions Maroc",
                startdate: "2018-03-15",
                enddate: "2020-06-20"
            }
        ]
    },
    {
        id: 1,
        nome: "Fatima Zahra Benani",
        role: "technician",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        email: "fatima.benani@worksphere.com",
        telephone: "06 23 45 67 89",
        expériences: [
            {
                title: "IT Support Specialist",
                company: "Digital Systems Casablanca",
                startdate: "2019-01-10",
                enddate: "2021-08-15"
            }
        ]
    },
    {
        id: 2,
        nome: "Mehdi El Fassi",
        role: "receptionist",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        email: "mehdi.elfassi@worksphere.com",
        telephone: "06 34 56 78 90",
        expériences: [
            {
                title: "Front Desk Agent",
                company: "Hotel Rabat Palace",
                startdate: "2020-02-01",
                enddate: "2022-05-30"
            }
        ]
    },
    {
        id: 3,
        nome: "Nadia Toumi",
        role: "security",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        email: "nadia.toumi@worksphere.com",
        telephone: "06 45 67 89 01",
        expériences: [
            {
                title: "Security Officer",
                company: "SafeGuard Maroc",
                startdate: "2017-11-05",
                enddate: "2020-09-18"
            }
        ]
    },
    {
        id: 4,
        nome: "Hassan Chraibi",
        role: "cleaning",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        email: "hassan.chraibi@worksphere.com",
        telephone: "06 56 78 90 12",
        expériences: [
            {
                title: "Cleaning Supervisor",
                company: "CleanPro Services Marrakech",
                startdate: "2019-07-22",
                enddate: "2021-12-10"
            }
        ]
    },
    {
        id: 5,
        nome: "Karim Bennis",
        role: "technician",
        photo: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=150&h=150&fit=crop&crop=face",
        email: "karim.bennis@worksphere.com",
        telephone: "06 67 89 01 23",
        expériences: [
            {
                title: "Network Administrator",
                company: "ConnectNet Morocco",
                startdate: "2020-08-14",
                enddate: "2022-03-20"
            }
        ]
    },
    {
        id: 6,
        nome: "Sofia Akdim",
        role: "receptionist",
        photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
        email: "sofia.akdim@worksphere.com",
        telephone: "06 78 90 12 34",
        expériences: [
            {
                title: "Administrative Assistant",
                company: "Office Management Tangier",
                startdate: "2021-01-08",
                enddate: "2022-07-15"
            }
        ]
    },
    {
        id: 7,
        nome: "Omar Laaroussi",
        role: "security",
        photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
        email: "omar.laaroussi@worksphere.com",
        telephone: "06 89 01 23 45",
        expériences: [
            {
                title: "Security Supervisor",
                company: "Metro Security Casablanca",
                startdate: "2018-05-30",
                enddate: "2021-02-14"
            }
        ]
    },
    {
        id: 8,
        nome: "Khadija Moussa",
        role: "cleaning",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        email: "khadija.moussa@worksphere.com",
        telephone: "06 90 12 34 56",
        expériences: [
            {
                title: "Janitorial Staff",
                company: "Sparkle Clean Fes",
                startdate: "2020-09-10",
                enddate: "2022-04-05"
            }
        ]
    },
    {
        id: 9,
        nome: "Rachid Bouzouba",
        role: "manager",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        email: "rachid.bouzouba@worksphere.com",
        telephone: "06 01 23 45 67",
        expériences: [
            {
                title: "Team Lead",
                company: "Innovate Solutions Morocco",
                startdate: "2017-12-03",
                enddate: "2020-08-19"
            }
        ]
    },
    {
        id: 10,
        nome: "Leila Saidi",
        role: "technician",
        photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
        email: "leila.saidi@worksphere.com",
        telephone: "06 12 34 56 78",
        expériences: [
            {
                title: "IT Technician",
                company: "Tech Support Maroc",
                startdate: "2019-11-20",
                enddate: "2022-06-12"
            }
        ]
    },
    {
        id: 11,
        nome: "Amine Kabbaj",
        role: "receptionist",
        photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
        email: "amine.kabbaj@worksphere.com",
        telephone: "06 23 45 67 89",
        expériences: [
            {
                title: "Customer Service Representative",
                company: "Service Excellence Casablanca",
                startdate: "2021-03-15",
                enddate: "2022-09-28"
            }
        ]
    },
    {
        id: 12,
        nome: "Zineb El Mansouri",
        role: "security",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        email: "zineb.elmansouri@worksphere.com",
        telephone: "06 34 56 78 90",
        expériences: [
            {
                title: "Security Guard",
                company: "Protect All Morocco",
                startdate: "2020-06-08",
                enddate: "2022-01-22"
            }
        ]
    }
];
let img;
let curentarry;
let Add_New_Worker_space = document.querySelector(".Add-New-Worker")
let newworker;
let Nom, role, photo, email, telephone;
let exptitle, expcompany, expstartdate, expenddate;
let experiencesarry = [];
let idx = stockdesdonner.length;
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
    //img = document.querySelector("#Photo")
   // img.src = "img/img1.webp"
    // expériences = document.querySelector("")
    btn_container = document.querySelector(".btn-container")
    //////



}
function exituserinfopopup() {

    userinfopopup.remove()

}
function usersendtoworkpopup() {

    usersendtowork.remove()



}
//click on submit
function submituserinfopopup() {
    if (validateForm()) {
        // Handle the last experience if countexp > 0
        if (countexp > 0) {
            let experience = {
                title: exptitle[countexp - 1].value,
                company: expcompany[countexp - 1].value,
                startdate: expstartdate[countexp - 1].value,
                enddate: expenddate[countexp - 1].value
            }
            
            if (new Date(experience.startdate) > new Date(experience.enddate)) {
                console.log("countexp", countexp)
                countexp = 0
                exituserinfopopup() 
                alert("you have a probleme in experince date");
                return;
            } else {
                experiencesarry.push(experience)
            }
        }

        console.log("experiencesarry1", experiencesarry)
        console.log("countexp", countexp)
        console.log("submit")

        userinfopopup.remove()
        
        let employe = {
            id: idx,
            nome: Nom.value,
            role: role.value,
            photo: photo.value,
            email: email.value,
            telephone: telephone.value,
            expériences: [...experiencesarry],
        }

        if (employe.photo === "") {
            employe.photo = "img/img1.webp"
        }
        
        stockdesdonner.push(employe)

        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
            <img class="userimg" src="${employe.photo}" alt="" onclick="showuserinfo(${employe.id})">
            <div class="workerinfo">
                <div class="name">${employe.nome}</div>
                <div class="role">${employe.role}</div>
            </div>
            <div class="workerbtn">
                <button class="deletworker" onclick="deletuser(${employe.id})">x</button>
            </div>`

        Add_New_Worker_space.append(newworker)

        idx++;
        countexp = 0;
        experiencesarry = []

        console.log("stockdesdonner", stockdesdonner)
        console.log("hi")

        // Refresh the waiting room
        refrech_the_users_that_are_in_the_waiting_room();

    } else {
        alert('Veuillez corriger les erreurs avant de soumettre le formulaire.');
    }
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

refrech_the_users_that_are_in_the_waiting_room();



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
   <img  class="userimg" src="${stockdesdonner[i].photo}" alt="">
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
    refrech_the_users_that_are_in_the_waiting_room()

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
     <img  class="userimg" src="${curentarry[i].photo}" alt="">
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

function refrech_the_users_that_are_in_the_waiting_room() {
    console.log("refrech the users on waiting room")

    Add_New_Worker_space.innerHTML = ''

    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div")
        newworker.className = "newworker"
        newworker.innerHTML = `   
            <img class="userimg" src="${stockdesdonner[i].photo}" alt="" onclick="showuserinfo(${stockdesdonner[i].id})">
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
//    if(   ){

//    }

    if (countexp > 0) {
        let experience = {
            title: exptitle[countexp - 1].value,
            company: expcompany[countexp - 1].value,
            startdate: expstartdate[countexp - 1].value,
            enddate: expenddate[countexp - 1].value
        }

        // let d1 = new Date(expenddate[countexp - 1].value)
        // let d2 = new Date(expstartdate[countexp - 1].value)
        // console.log("expstartdatesssssss", (d1 - d2) / (1000 * 60 * 60 * 24))
               if(new Date(experience.startdate)>new Date(experience.enddate)){
            console.log("countexp1",countexp)
            
        }else{
            experiencesarry.push(experience)
        }
  
      


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



    refrech_the_users_that_are_in_the_waiting_room()
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
     <img  class="userimg" src="${stockdesdonner[i].photo}" alt="">
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
                <img class="userimg" src="${son.array[i].photo}" alt="">
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

    for (let i = 0; i < stockdesdonner.length; i++) {
        if (stockdesdonner[i].id === id) {
            userinfopopup = document.createElement("div")
            userinfopopup.className = "bigerfather"
            
            // Create experiences HTML first
            let experiencesHTML = '';
            for (let index = 0; index < stockdesdonner[i].expériences.length; index++) {
                experiencesHTML += `
                <div class="experiencedes">
                    <h2>Expérience ${index + 1}:</h2>
                    <div class="role">Title : ${stockdesdonner[i].expériences[index].title}</div>
                    <div class="role">Company : ${stockdesdonner[i].expériences[index].company}</div>
                    <div class="role">Start-date : ${stockdesdonner[i].expériences[index].startdate}</div>
                    <div class="role">End-date : ${stockdesdonner[i].expériences[index].enddate}</div>
                </div>
                `;
            }

            userinfopopup.innerHTML = `
                <div class="showuserinfopopup">
                    <div class="imgandexit">
                        <img class="userimginfopopup" src="${stockdesdonner[i].photo}" alt="">
                        <button class="rovetheuserinfopopup" onclick="exituserinfopopup()">x</button>
                    </div>
                    <div class="workerinfopopup">
                        <div class="name">${stockdesdonner[i].nome}</div>
                        <div class="role">${stockdesdonner[i].role}</div>
                        <div class="role">Email : ${stockdesdonner[i].email}</div>
                        <div class="role">Phone : ${stockdesdonner[i].telephone}</div>
                    </div>
                    ${experiencesHTML}
                </div>
            `;

            document.body.append(userinfopopup);
            break;
        }
    }
}



// Regex patterns
const patterns = {
    nom: /^[A-Za-zÀ-ÿ\s\-']{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
     phone: /^(06|07|05)\s*(\d{2}\s*){4}$/
};

// Simple validation function
function validateForm() {
    const nom = document.getElementById('Nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const role = document.getElementById('role').value;
    const photo = document.getElementById('Photo').value.trim();

    // Check if fields are filled
    if (!nom) {
        alert('Veuillez entrer un nom');
        return false;
    }
    if (!email) {
        alert('Veuillez entrer un email');
        return false;
    }
    if (!phone) {
        alert('Veuillez entrer un téléphone');
        return false;
    }
    if (!role) {
        alert('Veuillez sélectionner un rôle');
        return false;
    }

    // Check patterns
    if (!patterns.nom.test(nom)) {
        alert('Le nom doit contenir uniquement des lettres (2-50 caractères)');
        return false;
    }
    if (!patterns.email.test(email)) {
        alert('Veuillez entrer une adresse email valide');
        return false;
    }
    if (!patterns.phone.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone français valide');
        return false;
    }

    return true;
}

/////






function initializeWorkers() {
    Add_New_Worker_space.innerHTML = '';
    
    for (let i = 0; i < stockdesdonner.length; i++) {
        newworker = document.createElement("div");
        newworker.className = "newworker";
        newworker.innerHTML = `   
            <img class="userimg" src="${stockdesdonner[i].photo}" alt="" onclick="showuserinfo(${stockdesdonner[i].id})">
            <div class="workerinfo">
                <div class="name">${stockdesdonner[i].nome}</div>
                <div class="role">${stockdesdonner[i].role}</div>
            </div>
            <div class="workerbtn">
                <button class="deletworker" onclick="deletuser(${stockdesdonner[i].id})">x</button>
            </div>`;
        
        Add_New_Worker_space.append(newworker);
    }
}


initializeWorkers();