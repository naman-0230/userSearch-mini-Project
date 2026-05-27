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
    pic: "https://i.pinimg.com/736x/89/1d/90/891d90b7b0c6d6df8d7df5d59e91e8e0.jpg",
    bio: "Tech geek who spends nights building side projects and startups.",
  },

  {
    name: "Kiara Mehta",
    contact: "+91 9786543210",
    pic: "https://i.pinimg.com/736x/f3/97/0b/f3970b2b0fd77d59bbf46f4a4f2d3f70.jpg",
    bio: "Fashion blogger with a love for monochrome aesthetics.",
  },

  {
    name: "Arjun Sethi",
    contact: "+91 9900112233",
    pic: "https://i.pinimg.com/736x/0c/1b/e4/0c1be4b3f5df8aeb4e4f9fdc2e96d3df.jpg",
    bio: "Fitness freak balancing gym life with coding marathons.",
  },

  {
    name: "Naina Kapoor",
    contact: "+91 9011223344",
    pic: "https://i.pinimg.com/736x/d7/e1/7d/d7e17d82d52f4e2cb8ffec4cfde4a741.jpg",
    bio: "Minimalist soul who enjoys books, rain, and slow music.",
  },

  {
    name: "Kabir Malhotra",
    contact: "+91 9112233445",
    pic: "https://i.pinimg.com/736x/8b/68/2d/8b682d4cf5e7db9ef4dc2f5f0f7a4a7f.jpg",
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


