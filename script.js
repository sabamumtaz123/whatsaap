let contacts = [
    {
        name: "Tayyaba Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `326764383490934`,
        email: `tayba1@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Fatima Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `9096893974`,
        email: `fatima1@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Alina Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `023152873873890`,
        email: `alina1@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Maria Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `909090909092564656`,
        email: `maria1@gmail.com`,
        'chat-message': `So many books, so little time`
    },

    {
        name: "Amna Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `589849340932`,
        email: `amnakhan1@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Hafsa Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `03332228726`,
        email: `hafsa1@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Rabbiya Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `987329830203232`,
        email: `rabi.kh@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "Lyba Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `02146732930920`,
        email: `lyba1@gmail.com`,
        'chat-message': `hellow! how are you?`
    },

    {
        name: "marium Khan",
        imgURL: "gh.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `3732899290091`,
        email: `marium1@gmail.com`,
        'chat-message': `hellow! how are you?`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">
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
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}