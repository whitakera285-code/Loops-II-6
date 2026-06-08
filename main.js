function printCoordinates(gridSize) {
  // Outer loop, controls X coordinate
  for (var x = 0; x < gridSize; x++) {
   
    // Inner loop, controls Y coordinate
    for (var y = 0; y < gridSize; y++) {
      console.log("(" + x + ", " + y + ")");
    }
   
  }
}

