// Selecting necessary elements
const fileInput = document.getElementById('file-upload');
const photoPreview = document.querySelector('.uploaded-photo-preview');
const noPhotoText = document.querySelector('.uploaded-nophoto-text');
const deleteIcon = document.querySelector('.delete-photo-icon');

fileInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Set uploaded image as background
      photoPreview.style.backgroundImage = `url(${e.target.result})`;
      photoPreview.style.backgroundSize = 'cover';
      photoPreview.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(file);

    noPhotoText.style.display = 'none';
    deleteIcon.style.background = '#fff';
  }
});

deleteIcon.addEventListener('click', function () {
  photoPreview.style.backgroundImage = 'none';

  noPhotoText.style.display = 'block';
  deleteIcon.style.background = 'transparent';

  fileInput.value = '';
});
   // Self-contained component
 (function () {
   const container = document.querySelector(".stb-container");
   const body = document.body;

   // Adjust body padding
   function adjustPadding() {
     if (window.getComputedStyle(container).display !== "none") {
       body.style.paddingBottom = `${container.offsetHeight}px`;
     } else {
       body.style.paddingBottom = "0";
     }
   }

   // Offcanvas handling
   const offcanvas = document.getElementById("stbOffcanvas");
   const bsOffcanvas = new bootstrap.Offcanvas(offcanvas, {
     backdrop: true,
     scroll: false,
   });

   // Toggle offcanvas on button click
   document
     .querySelectorAll('[data-bs-target="#stbOffcanvas"]')
     .forEach((btn) => {
       btn.addEventListener("click", () => {
         if (offcanvas.classList.contains("show")) {
           bsOffcanvas.hide();
         } else {
           bsOffcanvas.show();
         }
       });
     });

   // Handle resize
   let resizeTimer;
   window.addEventListener("resize", () => {
     clearTimeout(resizeTimer);
     resizeTimer = setTimeout(() => {
       adjustPadding();
       if (window.innerWidth >= 768) bsOffcanvas.hide();
     }, 100);
   });

   adjustPadding();
 })();
// mobile input


