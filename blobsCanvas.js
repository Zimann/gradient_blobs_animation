// import Modernizr from 'modernizr';
import throttle from 'lodash/throttle';
import {
  Scene,
  Camera,
  WebGLRenderer,
  Mesh,
  Vector2,
  Vector3,
  PlaneBufferGeometry,
  ShaderMaterial
} from 'three';

import { windowHeight, windowWidth, documentHeight } from './screen';
import Blob from './blobElement';
export default (options = {}) => {

  // Set Shaders
  const vertexShader = document.getElementById( 'vertexShader' ).textContent
  const fragmentShaderContent =
    `#ifdef GL_ES
      precision highp float;
    #endif

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform vec3 u_blobs[3];
    uniform vec3 u_colors[3];
    uniform float u_time;

    void main(){
      vec2 st = gl_FragCoord.xy/u_resolution;
      vec3 color = vec3(1.);
      const int count = 3;
      float totalV = 0.;

      for( int i = 0; i < count; i++){
        float d = distance((u_blobs[i].xy/u_resolution), st);
        float v = ((u_blobs[i].z * .3)/u_resolution.x) / pow(d, 3.0);
        color +=  u_colors[i] * (v);
        totalV += v;
      }
      color = color / totalV;
      gl_FragColor = vec4(vec3(color), .88);
    }`
    ;

  // Create Renderer
  const renderer = new WebGLRenderer({ antialias: false, alpha: false})

  // Create Scene
  const scene = new Scene()

  // Create Camera
  const camera = new Camera()
  camera.position.z = 1

  // Append Element to window
  document.body.appendChild(renderer.domElement)
  renderer.domElement.classList.add('blobs')

  // Set Variables for blobs
  let blobCount = 3
  let uniforms,
      geometry,
      material,
      mesh

  let t = 0
  // const blobRadius = [0.0, 0.0, 0.0]
  const blobRadiusAnimate = [26, 90, 48]
  // const rgbColors = [[129, 53, 252], [255, 222, 222], [215, 224, 255]]
  const rgbColors = [[16, 6, 159], [202, 207, 225], [138, 141, 143]]
  const colors = []
  const allBlobs = [new Vector3(windowWidth()/2, windowWidth()/2, 0), new Vector3(windowWidth()/2, windowWidth()/2, 0), new Vector3(windowWidth()/2, windowWidth()/2, 0)]
  const blobElements = []
  let shouldAnimate = true
  let requestId

  let lastSizeW = windowWidth() + 10

  let mousePositionX = windowWidth()/2
  let mousePositionY = windowHeight()/2
  let maxAnchorX = windowWidth()/4
  let maxAnchorY = windowHeight()/4

  calculateShaderColors(rgbColors, colors)
  createShader()
  createBlob()
  resize()

  window.addEventListener('resize', resize);

  function calculateShaderColors(originalColors, convertedColors) {
    originalColors.forEach((color) => {
      convertedColors.push(new Vector3(color[0]/255, color[1]/255, color[2]/255))
    })
  }

  document.querySelector('.outer').addEventListener('mouseover', (e) => {
    mousePositionX = e.clientX
    mousePositionY = windowHeight() - e.clientY
  })

  function mouseEnter (e) {

    mousePositionX = e.clientX
    mousePositionY = windowHeight() - e.clientY

  }


  function createShader() {
    geometry = new PlaneBufferGeometry( 2, 2 )
    uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new Vector2(windowWidth(), windowWidth()) },
      u_mouse: { type: "v2", value: new Vector2() },
      u_blobs: { type: "v3v", value: []},
      u_colors: { "value": colors}
    }

    material = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShaderContent
    })
    mesh = new Mesh( geometry, material)
    scene.add(mesh)
  }

  function resize () {

    if ((Math.abs(windowWidth() - lastSizeW)) >= 10) {
      renderer.setSize(windowWidth(), (windowHeight() * 2))
      camera.aspect = windowWidth() / windowHeight() * 2

      uniforms.u_resolution.value.x = windowWidth()
      uniforms.u_resolution.value.y = windowWidth()
      maxAnchorX = windowWidth()/ 4
      maxAnchorY = windowHeight() / 2.5
      blobElements.forEach((blob) => {
        blob.resize(windowWidth(), windowHeight() * 3)
      })
      lastSizeW = windowWidth()
    }
  }

  function createBlob(){
    allBlobs.forEach((blob) => {
      blobElements.push(new Blob(blob))
    })
    uniforms.u_blobs.value = allBlobs
    uniforms.u_colors.value = colors
  }

  function draw() {
    requestId = window.requestAnimationFrame(draw);
    if (shouldAnimate) {
      blobElements.forEach((ball, index) => {
        ball.scale(ball.radius, blobRadiusAnimate[index], 200)

      })
    }

    blobElements.forEach((ball, index) => {
      if (mousePositionX >= (windowWidth() - maxAnchorX)) {
        mousePositionX = windowWidth() - maxAnchorX
      } else if(mousePositionX <= maxAnchorX) {
        mousePositionX = maxAnchorX
      }

      ball.anchor.x += (mousePositionX-ball.anchor.x) * 0.0007
      ball.display()
    })

    uniforms.u_blobs.value = blobElements.map(ball => new Vector3(ball.position.x, ball.position.y, ball.position.z))
    renderer.render( scene, camera )
  }

  function destroy() {
    window.cancelAnimationFrame(requestId);
    window.removeEventListener('resize', resize);
    renderer.domElement.remove()
  }

  window.requestAnimationFrame(draw)

  return {
    destroy,
  };
};



// WEBPACK FOOTER //
// ./assets/js/lib/blobs/blobsCanvas.js