let contacts = [
    {
        name: "Ayesha",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `326764383490934`,
        email: `ayesha@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Fareena",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `9096893974`,
        email: `fareena1@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Sitara Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `023152873873890`,
        email: `sitaraa@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Anum Awan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909092564656`,
        email: `awananum@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Ambreen Mushtaq",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `589849340932`,
        email: `ambreen@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Saira Ashraf",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `03332228726`,
        email: `saira123@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Hira Abbasi",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `987329830203232`,
        email: `abbash@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Bailla",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `02146732930920`,
        email: `baila@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Farwa Ali",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `3732899290091`,
        email: `fari@gmail.com`,
        'chat-message': `hellow! how are you?`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(${contacts[i].imgURL});">
        </div>
        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>
    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector("h4").style = `display: none`;
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}
