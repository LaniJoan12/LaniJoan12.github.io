$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();

    // TODO 2 - Create Platforms 
    createPlatform(320, 700, 100, 100, "pink");
    createPlatform(200, 700, 100, 100, "pink");
    createPlatform(500, 600, 100, 100, "pink");
    createPlatform(600, 600, 100, 100,  "pink");
    createPlatform(800, 400, 100, 100, "pink");
    createPlatform(700, 400, 100, 100, "pink");
    createPlatform(1000, 300, 100, 100, "pink");
    createPlatform(1100, 300, 100, 100, "pink");
    createPlatform(300, 500, 100, 100, "pink");
    createPlatform(1000, 600, 100, 100, "pink");
    createPlatform(700, 620, 100, 100, "pink");
    createPlatform(200, 400, 100, 100, "pink");
    createPlatform(500, 300, 100, 100, "pink");
    createPlatform(600, 300, 100, 100, "pink");
    createPlatform(100, 300, 100, 100, "pink");





    // TODO 3 - Create Collectables
    createCollectable("database", 450, 350);
    createCollectable("database", 710, 510);
    createCollectable("database", 880, 260);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 950, 2000);
    createCannon("right", 150, 2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
