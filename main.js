document.addEventListener('DOMContentLoaded', () => {
    // Loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Create geometric shapes
    function createGeometricShapes() {
        const shapes = document.querySelector('.geometric-shapes');
        const shapeTypes = ['triangle', 'circle', 'square'];
        const shapeCount = 15;

        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = `shape ${shapeTypes[i % shapeTypes.length]}`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.animationDelay = `${Math.random() * 2}s`;
            shapes.appendChild(shape);
        }
    }
    createGeometricShapes();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const currentPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // Mobile optimization
    function handleMobileOptimization() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }

    window.addEventListener('resize', handleMobileOptimization);
    handleMobileOptimization();
});