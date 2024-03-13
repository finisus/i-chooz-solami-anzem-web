// run script after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // Function to duplicate and append text for scroll-rl elements
  function duplicateTextForScrollRL() {
    const scrollRLSpans = document.querySelectorAll('.scroll-rl');
    scrollRLSpans.forEach(span => {
        let originalText = span.textContent.trim(); // Get the original text
        let duplicatedText = originalText; // Start with original text

        // Duplicate the text 20 times and append it behind the original text
        for (let i = 0; i < 444; i++) {
            duplicatedText += ' ' + originalText;
        }

        // Append the duplicated text behind the original text
        span.textContent += ' ' + duplicatedText;
    });
  }
  // Call the function to duplicate text for scroll-rl elements
  duplicateTextForScrollRL();

  function duplicateTextForScrollLR() {
    const scrollLRSpans = document.querySelectorAll('.scroll-lr');
    scrollLRSpans.forEach(span => {
        let originalText = span.textContent.trim(); // Get the original text
        let duplicatedText = originalText; // Start with original text

        // Duplicate the text 20 times and append it ahead of the original text
        for (let i = 0; i < 444; i++) {
            duplicatedText = originalText + ' ' + duplicatedText;
        }

        // Append the duplicated text ahead of the original text
        span.textContent = duplicatedText + ' ' + originalText;
    });
  }

  // Call the function to duplicate text for scroll-lr elements
  duplicateTextForScrollLR();
  
  const copyButton = document.getElementById("copy-button");
  const textToCopy = "gXXJt8cEa3NoZmc8jMgCLWeSjMQbVxuWYQ26LA9DHbp";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
    }
  });

  const linesContainer = document.getElementById('lines');
  const textLines = linesContainer.querySelectorAll('span');

  function updateScroll() {
    textLines.forEach(line => {
        const computedStyle = getComputedStyle(line);
        const currentX = parseInt(computedStyle.transform.split(',')[4] || 0);

        let newX;
        if (line.classList.contains('scroll-rl')) {
            newX = currentX + 1; // Adjust scrolling speed 
        } else { 
            newX = currentX -1; 
        }

        line.style.transform = `translateX(${newX}px)`; 
    });
   
    setTimeout(updateScroll, 30);  // Shorter delay for smooth scrolling 
  }

  // Move scroll-rl elements off-screen to the left
  const scrollRLSpans = document.querySelectorAll('.scroll-rl');
  scrollRLSpans.forEach(span => {
      span.style.transform = `translateX(-100%)`; // Move off-screen to the left
  });

  updateScroll(); // Start the animation
});