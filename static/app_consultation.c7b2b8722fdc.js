/****************************************************
 ******************  Accordian  *********************
 ***************************************************/

 const accordianItemHeaders = document.querySelectorAll(".accordian-item-header");

 accordianItemHeaders.forEach(accordianItemHeader => {
     accordianItemHeader.addEventListener("click", event => {
 
         // Close any open items on click
         const currentlyActiveAccordianItemHeader = document.querySelector(".accordian-item-header.active");
         if(currentlyActiveAccordianItemHeader && currentlyActiveAccordianItemHeader !== accordianItemHeader) {
             currentlyActiveAccordianItemHeader.classList.toggle("active");
             currentlyActiveAccordianItemHeader.nextElementSibling.style.maxHeight = 0;
         }
 
         // Open/close accordian item on click
         accordianItemHeader.classList.toggle("active");
         const accordianItemBody = accordianItemHeader.nextElementSibling;
         if(accordianItemHeader.classList.contains("active")) {
              accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
         } else {
         accordianItemBody.style.maxHeight = 0;
         }
 
         // Make whole li element clickable to check input checkbox
         const consultationAppts = event.target.nextElementSibling.querySelectorAll('li');
         consultationAppts.forEach(appt => appt.addEventListener('click', e => {
             appt.querySelector('input').checked = true;
         })); 
     });
 });