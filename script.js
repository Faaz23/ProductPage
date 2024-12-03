document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  

  function changeImage(imagePath) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imagePath;
  }
  