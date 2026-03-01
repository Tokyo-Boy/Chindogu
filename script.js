const inventions = [
    { name: "The Noodle Fan", desc: "A chopstick-mounted fan for the impatient ramen lover.", img: "images/Update1.webp" },

    { name: "Subway Chin-Rest", desc: "A plunger-based tripod to help you sleep while standing on the train.", img: "images/CRUpdate.webp" },

    { name: "The Umbrella Tie", desc: "Stay sharp and stay dry. A tie that unfolds into a rainy-day savior.", img: "images/Good.webp" },

    { name: "Baby Mop", desc: "Turn your crawling toddler into a high-efficiency floor cleaning machine.", img: "images/baby.webp" },

    { name: "360° Umbrella", desc: "A portable human shower curtain. Total dryness, total social isolation.", img: "images/UmbrellaPortal.webp" },

    { name: "Ear-fume Fans", desc: "Tiny ear-mounted propellers. Great for cooling, terrible for your hair.", img: "images/Fan2.webp" },

    { name: "Walk-and-Wash", desc: "Scrub brushes for your feet. Every step is a cleaning miracle!", img: "images/shoes.webp" },

    { name: "Solar Flashlight", desc: "A flashlight that only works in the sun. Finally, you can see in the daylight!", img: "images/Solar.webp" },

    { name: "Commute-O-Kitchen", desc: "A steering-wheel rice cooker. Because breakfast shouldn't wait for red lights.", img: "images/Car.webp" },

    { name: "Dry-Swim Snorkel", desc: "A 3-foot snorkel with an umbrella. For the swimmer who hates water.", img: "images/Swim.webp" },

    { name: "Tactile Controller", desc: "Extra prosthetic fingers for your controller. Pro-gaming at its weirdest.", img: "images/gaming.webp" },

    { name: "Salaryman-Bot", desc: "The automated bower. Perfect for apologizing when you're too tired.", img: "images/Robot.webp" },

    { name: "Keyboard Raincoat", desc: "A tiny yellow coat for your keys. Spill-proof, but sweat-heavy.", img: "images/Key.webp" },
];

const grid = document.getElementById('invention-grid');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// 1. Create the Grid Items
inventions.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('mini-card');
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
    `;
    card.onclick = () => showDetails(index);
    grid.appendChild(card);
});

// 2. Function to show the Detail Modal
function showDetails(index) {
    const item = inventions[index];
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-name').innerText = item.name;
    document.getElementById('modal-desc').innerText = item.desc;
    modal.style.display = "flex";
}

// 3. Close the Modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }