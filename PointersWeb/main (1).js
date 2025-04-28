document.addEventListener('DOMContentLoaded', function() {
    // Reference to elements
    const basicBtn = document.getElementById('basic-btn');
    const referenceBtn = document.getElementById('reference-btn');
    const byvalueBtn = document.getElementById('byvalue-btn');
    const dereferenceBtn = document.getElementById('dereference-btn');
    const animationContainer = document.getElementById('animation-container');
    const iframeWrapper = document.getElementById('iframe-wrapper');
    const closeAnimationBtn = document.getElementById('close-animation');

    // Animation URLs - corrected to match the provided iframe sources
    const animations = {
        basic: "https://editor.p5js.org/marnieklein/full/TLS4AcBTT",
        dereference: "https://editor.p5js.org/marnieklein/full/_8e8TB79T",
        byvalue: "https://editor.p5js.org/marnieklein/full/DSSo_rDMC",
        reference: "https://editor.p5js.org/marnieklein/full/OQixnqM7x"
    };

    // Function to show animation
    function showAnimation(animationUrl) {
        // Create and append iframe
        const iframe = document.createElement('iframe');
        iframe.src = animationUrl;
        iframeWrapper.innerHTML = '';
        iframeWrapper.appendChild(iframe);

        // Show container
        animationContainer.style.display = 'flex';

        // Prevent scrolling of the body when animation is open
        document.body.style.overflow = 'hidden';
    }

    // Function to hide animation
    function hideAnimation() {
        animationContainer.style.display = 'none';
        iframeWrapper.innerHTML = '';
        document.body.style.overflow = 'auto';
    }

    // Add event listeners to buttons
    basicBtn.addEventListener('click', () => showAnimation(animations.basic));
    referenceBtn.addEventListener('click', () => showAnimation(animations.reference));
    byvalueBtn.addEventListener('click', () => showAnimation(animations.byvalue));
    dereferenceBtn.addEventListener('click', () => showAnimation(animations.dereference));
    closeAnimationBtn.addEventListener('click', hideAnimation);

    // Handle image swapping on hover for all buttons
    function setupButtonHover(button, baseName) {
        const origSrc = `/static/${baseName}.svg`;
        const hoverSrc = `/static/${baseName}hover.svg`;

        button.addEventListener('mouseenter', () => {
            button.src = hoverSrc;
        });

        button.addEventListener('mouseleave', () => {
            button.src = origSrc;
        });
    }

    // Setup hover effects
    setupButtonHover(basicBtn, 'basic');
    setupButtonHover(referenceBtn, 'reference');
    setupButtonHover(byvalueBtn, 'byvalue');
    setupButtonHover(dereferenceBtn, 'dereference');

    // Close animation on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && animationContainer.style.display === 'flex') {
            hideAnimation();
        }
    });
});