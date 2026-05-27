let users = [
  {
    name: "Ryan Cooper",
    contact: "+91 9876543210",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    bio: "Frontend developer who enjoys building sleek and modern UI experiences.",
  },

  {
    name: "Emma Watson",
    contact: "+91 9123456780",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    bio: "Creative designer focused on elegant interfaces and branding systems.",
  },

  {
    name: "David Miller",
    contact: "+91 9988776655",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    bio: "Backend engineer specializing in APIs, databases, and scalability.",
  },

  {
    name: "Sophia Clark",
    contact: "+91 9090909090",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    bio: "Passionate content strategist with strong storytelling skills.",
  },

  {
    name: "Joyboy Clark",
    contact: "+91 9354645480",
    pic: "https://i.pinimg.com/736x/08/a0/de/08a0de2a356f0ee2640e331a1ab497e1.jpg",
    bio: "Local model with strong artistic vision and fashion aesthetics.",
  },

  {
    name: "Sam Attman",
    contact: "+91 9035456469",
    pic: "https://i.pinimg.com/736x/a7/08/b6/a708b616bb81cdb99232ebd6bfe868ea.jpg",
    bio: "Drama actor working mainly in supportive and emotional roles.",
  },

  {
    name: "Isha Oberoi",
    contact: "+91 9812345678",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "Late night thinker with a love for poetry and quiet cafes.",
  },

  {
    name: "Tanay Rawat",
    contact: "+91 9765432101",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "Soft heart, sharp mind, and obsessed with vintage music.",
  },

  {
    name: "Diya Bansal",
    contact: "+91 9345678123",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "Artist and creator living through colors, sketches, and chaos.",
  },

  {
    name: "Mohit Chhabra",
    contact: "+91 9811122233",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "Photography enthusiast capturing emotions in every frame.",
  },

  {
    name: "Aarav Khanna",
    contact: "+91 9871200345",
    pic: "https://i.pinimg.com/1200x/63/a9/c1/63a9c13c68dd80754b19f7ed3106688b.jpg",
    bio: "Tech geek who spends nights building side projects and startups.",
  },

  {
    name: "Kiara Mehta",
    contact: "+91 9786543210",
    pic: "https://i.pinimg.com/736x/fa/56/cf/fa56cf61c0d08ada88ecc4653077e61b.jpg",
    bio: "Fashion blogger with a love for monochrome aesthetics.",
  },

  {
    name: "Dennis Sethi",
    contact: "+91 9900112233",
    pic: "https://i.pinimg.com/736x/12/6d/dd/126dddd4dd7941c61b5b0c8dc9e1d789.jpg",
    bio: "Fitness freak balancing gym life with coding marathons.",
  },

  {
    name: "Naina Kapoor",
    contact: "+91 9011223344",
    pic: "https://i.pinimg.com/736x/ff/7c/fc/ff7cfc1632522cb0bf0d52a18fcdc85b.jpg",
    bio: "Minimalist soul who enjoys books, rain, and slow music.",
  },

  {
    name: "Kabir Malhotra",
    contact: "+91 9112233445",
    pic: "https://i.pinimg.com/736x/8e/bd/80/8ebd8038e38187371c934da78b876c85.jpg",
    bio: "Cinematographer chasing stories through lights and shadows.",
  },
];

function showUsers(arr) {

    arr.forEach((user) => {

        let cards = document.querySelector(".cards");

        let card = document.createElement("div");
        card.classList.add("card");

        /* IMAGE */

        let img = document.createElement("img");
        img.src = user.pic;

        /* OVERLAY */

        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        /* CONTENT */

        let content = document.createElement("div");
        content.classList.add("content");

        /* NAME */

        let name = document.createElement("h2");
        name.textContent = user.name;

        /* CONTACT */

        let contact = document.createElement("h4");
        contact.textContent = user.contact;

        /* BIO */

        let bio = document.createElement("p");
        bio.textContent = user.bio;

        /* APPEND */

        content.appendChild(name);
        content.appendChild(contact);
        content.appendChild(bio);

        card.appendChild(img);
        card.appendChild(overlay);
        card.appendChild(content);

        cards.appendChild(card);
    })
};

showUsers(users);

let inp = document.querySelector("#searchInput");

inp.addEventListener("input", function(){

    let newUsers = users.filter(function(user){

        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    })
    document.querySelector(".cards").innerHTML = "";



    //for no users found then shifts to includes

    if(newUsers.length === 0){

    newUsers = users.filter(function(user){

        return user.name
            .toLowerCase()
            .includes(inp.value.toLowerCase());

    });
}

    //if still no match then no match found
    if(newUsers.length === 0){

    let msg = document.createElement("h1");

    msg.textContent = "No Users Found";

    msg.style.color = "white";
    msg.style.textAlign = "center";
    msg.style.marginTop = "40px";
    msg.style.fontSize = "32px";

    document.querySelector(".cards").appendChild(msg);
    }

    else{
    showUsers(newUsers);
    }
})

