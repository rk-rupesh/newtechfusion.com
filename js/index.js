
// // Get the cursor dot element
// const cursorDot = document.getElementById("cursor-dot");

// // Update the position of the cursor dot
// document.addEventListener("mousemove", function (e) {
//     // Get the current mouse position including scroll offset
//     const x = e.clientX + window.pageXOffset;
//     const y = e.clientY + window.pageYOffset;

//     // Update the position of the cursor dot to follow the mouse
//     cursorDot.style.left = `${x}px`;
//     cursorDot.style.top = `${y}px`;
// });
// document.addEventListener("scroll", function () {
//     // Adjust the cursor dot's position based on the scroll offset
//     const x = e.clientX + window.pageXOffset;
//     const y = e.clientY + window.pageYOffset;

//     // Update the position of the cursor dot to follow the mouse
//     cursorDot.style.left = `${x}px`;
//     cursorDot.style.top = `${y}px`;
// });

// service icon carousel 

const service_icon = $(".service_icons,.service_icons1");
service_icon.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});

const service_icon1 = $(".service_icons1");
service_icon1.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});
// service icon carousel 

// our client carousel 
const client = $(".client");
client.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 1
});
// our client carousel 

// chang text in hero section 
let textElement = document.getElementById('text-change');

textElement.addEventListener('mouseover', function () {
    textElement.innerText = "APP";
});

textElement.addEventListener('mouseout', function () {
    textElement.innerText = "WEBSITES"; // Replace with the original text
});
// chang text in hero section 