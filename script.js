const sections = document.querySelectorAll('.snap-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-600', 'underline');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-blue-600', 'underline');
    }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

function loadContent(url, iframeId, downloadBtnId) {
  const pdfFrame = document.getElementById(iframeId);
  const loading = document.getElementById(`loading-${iframeId}`);
  const downloadBtn = document.getElementById(downloadBtnId);

  loading.classList.remove('hidden');
  pdfFrame.style.opacity = '0';
  pdfFrame.src = url;
  downloadBtn.href = url;
}

function hideLoading(iframe) {
  const loading = document.getElementById(`loading-${iframe.id}`);
  loading.classList.add('hidden');
  iframe.style.opacity = '1';
}