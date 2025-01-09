# 3D Solar System Simulation

This is a 3D Solar System simulation using OpenGL, GLUT, and Python. The simulation includes the Sun and its eight planets, each orbiting around the Sun with textures applied to the planets and the Sun. The user can navigate around the solar system using keyboard and mouse controls.

## Features

- Real-time 3D rendering of the solar system with the Sun and eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune).
- The planets orbit the Sun based on their speed and distance from the Sun.
- User-controlled camera for navigation around the scene.
- Lighting setup that mimics sunlight with ambient and diffuse light sources.
- Texture mapping applied to the planets and the Sun.

## Prerequisites

- Python 3.x
- OpenGL
- PIL (Python Imaging Library)
- Numpy
- PyOpenGL
- GLUT (FreeGLUT)

You can install the required libraries using pip:

```bash
pip install PyOpenGL Pillow numpy
```

## File Structure

- `solar_system.py`: Main script to run the simulation.
- `textures/`: Folder containing texture images for the Sun and planets.
    - `sun.jpg`: Texture for the Sun.
    - `mercury.jpg`, `venus.jpg`, `earth.jpg`, `mars.jpg`, `jupiter.jpg`, `saturn.jpg`, `uranus.jpg`, `neptune.jpg`: Textures for the planets.

## Usage

1. Place the texture images for the Sun and planets in the `textures/` folder.
2. Run the Python script:

```bash
python solar_system.py
```

3. A window will open displaying the 3D Solar System simulation. You can interact with the simulation using the following controls:

   - **W, A, S, D**: Move the camera forward, left, backward, and right.
   - **E, Q**: Move the camera up and down.
   - **Mouse**: Move the mouse to rotate the camera (look around).
   - **Esc**: Exit the simulation.

## Camera Controls

The camera is controlled using the following keys:

- **W**: Move forward.
- **S**: Move backward.
- **A**: Move left.
- **D**: Move right.
- **E**: Move up.
- **Q**: Move down.
- **Mouse**: Rotate the camera by moving the mouse.

## Rendering

The solar system is rendered using OpenGL and the planets are textured using images. The lighting is set up to simulate sunlight with ambient, diffuse, and specular lighting components. The camera is updated based on keypresses, and the planets orbit the Sun in real-time.

## Customization

You can modify the following parameters to customize the simulation:

- **Camera position**: Modify the `camera_pos` variable to change the initial camera position.
- **Planet data**: You can change the radius, distance, and speed of the planets by modifying the `planets` list.
- **Textures**: You can replace the texture files in the `textures/` folder with your own textures.
