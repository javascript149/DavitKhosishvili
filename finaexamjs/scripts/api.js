const aboutData = {
    companyInfo: {
        name: "Animewear Emporium",
        founded: 2007,
        owner: "Davit Khosishvili",
        mission: "To provide anime fans with high-quality and stylish merchandise.",
    },
    productLine: [
        {
            type: "Anime-Inspired Shoes",
            description: "A wide range of anime-themed shoes designed for comfort and style.",
        },
        {
            type: "Anime Socks",
            description: "An extensive collection of anime-themed socks with various designs.",
        },
        {
            type: "Anime T-Shirts",
            description: "A diverse selection of anime-inspired t-shirts with stunning artwork.",
        },
    ],
    qualityAssurance: "We ensure the highest quality and authenticity by sourcing merchandise from reputable manufacturers and collaborating with official licensors.",
    onlineStore: "Our user-friendly online store features a responsive search and filter system, secure payment options, and worldwide shipping.",
    communityEngagement: "We actively engage with the anime community through conventions, events, and social media.",
    mission: "To provide anime fans with the highest quality and most stylish merchandise, building a vibrant community of anime enthusiasts.",
    customerSatisfaction: "We prioritize customer satisfaction by offering exceptional customer support and a hassle-free return policy.",
    contact: "If you have any questions or feedback, please contact us. We're always eager to hear from our customers and fellow anime fans.",
};


const express = {
    get: (url, callback) => {
        if (url === "/api") {
            callback(null, { status: 200, data: aboutData });
        } else {
            callback({ status: 404, message: "Not Found" });
        }
    },
};


express.get("/api", (error, response) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.log(response.data);
    }
});
