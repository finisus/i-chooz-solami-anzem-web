// run script after DOM loads
document.addEventListener('DOMContentLoaded', function() {
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
});
