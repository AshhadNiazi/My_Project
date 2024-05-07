  // Function to enlarge the image
  function enlargeImage() {
    var originalImage = document.getElementById("original-image");
    var enlargedImage = document.getElementById("enlarged-image");

    // Set the source of the enlarged image to the original image
    enlargedImage.src = originalImage.src;

    // Display the enlarged image container
    document.getElementById("enlarged-container").style.display = "block";
}

// Function to close the enlarged image container
document.getElementById("enlarged-container").onclick = function() {
    this.style.display = "none";
};