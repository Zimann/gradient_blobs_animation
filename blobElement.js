import { Vector3 } from 'three';

class Blob {

  constructor(position) {
    this.radius = position.z
    this.position = position
    this.velocity = new Vector3(Math.random() * 0.009, Math.random() * 0.009, Math.random() * 0.01)
    this.angle = new Vector3(0,0,0)

    this.resize(window.innerWidth, window.innerHeight)
    this.random = Math.random()
    this.duration = 700
    this.t = 0
  }

  resize(width, height) {
    this.amplitude = new Vector3(this.random * width/4, this.random * height/8, Math.random() * (width/2) )
    this.anchor = new Vector3(width / 2, height / 2, 0)
  }

  scale(b, c, duration) {
    let t = this.t
     if (t < duration) {
      this.t += 1
      t += 1
      this.position.z = t >= duration ? c : -c *(t/=duration)*(t-2) + b
    }
  }

  display() {
    this.angle.add(this.velocity)
    this.position.x = Math.sin(this.angle.x) * this.amplitude.x + this.anchor.x
    this.position.y = Math.sin(this.angle.y) * this.amplitude.y + this.anchor.y
  }
}

export default Blob;
// module.exports = Blob



// WEBPACK FOOTER //
// ./assets/js/lib/blobs/blobElement.js