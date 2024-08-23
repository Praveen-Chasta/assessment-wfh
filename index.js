// document.addEventListener("DOMContentLoaded", function () {
//     // Get the first and second accordion sections
//     const accordion1 = document.getElementById("accordion-1");
//     const accordion2 = document.getElementById("accordion-2");

//     // Initially hide the second accordion
//     accordion2.style.display = "none";

//     // Function to toggle visibility
//     function toggleAccordion() {
//       if (accordion1.style.display === "none") {
//         // If accordion 1 is hidden, show it and hide accordion 2
//         accordion1.style.display = "flex";
//         accordion2.style.display = "none";
//       } else {
//         // If accordion 1 is visible, hide it and show accordion 2
//         accordion1.style.display = "none";
//         accordion2.style.display = "flex";
//         accordion2.style.flexDirection = "column";
//       }
//     }

//     // Add click event listeners to both sections
//     accordion1.addEventListener("click", toggleAccordion);
//     accordion2.addEventListener("click", toggleAccordion);
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     // Get the first and second accordion sections
//     const accordion3 = document.getElementById("accordion-3");
//     const accordion4 = document.getElementById("accordion-4");

//     // Initially hide the second accordion
//     accordion4.style.display = "none";

//     // Function to toggle visibility
//     function toggleAccordion() {
//       if (accordion3.style.display === "none") {
//         // If accordion 1 is hidden, show it and hide accordion 2
//         accordion3.style.display = "flex";
//         accordion4.style.display = "none";
//       } else {
//         // If accordion 1 is visible, hide it and show accordion 2
//         accordion3.style.display = "none";
//         accordion4.style.display = "flex";
//         accordion4.style.flexDirection = "column";
//       }
//     }

//     // Add click event listeners to both sections
//     accordion3.addEventListener("click", toggleAccordion);
//     accordion4.addEventListener("click", toggleAccordion);
//   });


//   document.addEventListener("DOMContentLoaded", function () {
//     // Get the first and second accordion sections
//     const accordion5 = document.getElementById("accordion-5");
//     const accordion6 = document.getElementById("accordion-6");

//     // Initially hide the second accordion
//     accordion6.style.display = "none";

//     // Function to toggle visibility
//     function toggleAccordion() {
//       if (accordion5.style.display === "none") {
//         // If accordion 1 is hidden, show it and hide accordion 2
//         accordion5.style.display = "flex";
//         accordion6.style.display = "none";
//       } else {
//         // If accordion 1 is visible, hide it and show accordion 2
//         accordion5.style.display = "none";
//         accordion6.style.display = "flex";
//         accordion6.style.flexDirection = "column";
//       }
//     }

//     // Add click event listeners to both sections
//     accordion5.addEventListener("click", toggleAccordion);
//     accordion6.addEventListener("click", toggleAccordion);
//   });


document.addEventListener("DOMContentLoaded", function () {
    // Function to handle accordion click
    function handleAccordionClick(event) {
        const clickedAccordion = event.currentTarget;
        const contentId = clickedAccordion.getAttribute("data-content-id");
        const contentToShow = document.getElementById(contentId);

        // Get all accordion sections and content
        const allAccordions = document.querySelectorAll('.accordion');
        const allContents = document.querySelectorAll('.accordion-2');

        // Hide all accordion contents and reset display of all accordions
        allContents.forEach(content => {
            content.style.display = 'none';
        });
        allAccordions.forEach(accordion => {
            accordion.style.display = 'flex';
        });

        // Hide the clicked accordion
        clickedAccordion.style.display = 'none';

        // Show the related content
        if (contentToShow) {
            contentToShow.style.display = 'flex';
            contentToShow.style.flexDirection = 'column';
        }
    }

    // Add click event listeners to all accordions
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.addEventListener('click', handleAccordionClick);
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Function to handle accordion click
//     function handleAccordionClick(event) {
//         const clickedAccordion = event.currentTarget;
//         const contentId = clickedAccordion.getAttribute("data-content-id");
//         const contentToShow = document.getElementById(contentId);

//         // Get all accordion sections and content
//         const allAccordions = document.querySelectorAll('.accordion');
//         const allContents = document.querySelectorAll('.accordion-2');
//         const allRadios = document.querySelectorAll('.radio');

//         // Hide all accordion contents and reset display of all accordions
//         allContents.forEach(content => {
//             content.style.display = 'none';
//         });
//         allAccordions.forEach(accordion => {
//             accordion.style.display = 'flex';
//         });

//         // Uncheck all radio buttons
//         allRadios.forEach(radio => {
//             radio.checked = false;
//         });

//         // Hide the clicked accordion
//         clickedAccordion.style.display = 'none';

//         // Show the related content
//         if (contentToShow) {
//             contentToShow.style.display = 'flex';
//             contentToShow.style.flexDirection = 'column';
//         }

//         // Check the radio button in the clicked accordion
//         const radioInClickedAccordion = clickedAccordion.querySelector('.radio');
//         if (radioInClickedAccordion) {
//             radioInClickedAccordion.checked = true;
//         }
//     }

//     // Add click event listeners to all accordions
//     document.querySelectorAll('.accordion').forEach(accordion => {
//         accordion.addEventListener('click', handleAccordionClick);
//     });
// });


