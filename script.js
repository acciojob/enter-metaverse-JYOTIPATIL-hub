//your JS code here. If required.
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get the paragraph and button elements by their IDs
  const statusParagraph = document.getElementById('status');
  const enterButton = document.getElementById('enterBtn');

  // Add a click event listener to the button
  enterButton.addEventListener('click', function() {
    // Change the content of the paragraph to "Entered Metaverse" enclosed in <h1> tags
    statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
  });
});
