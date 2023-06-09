import * as THREE from 'three'

const Dna = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const renderer = Detector.webgl
    ? new THREE.WebGLRenderer({ antialias: true })
    : new THREE.CanvasRenderer()

  const cylinder = 0x2e50ac
  const purple = 0x74ffc4

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  camera.position.z = 35

  const tubeGeometry = new THREE.CylinderGeometry(0.4, 0.4, 10, 32)
  const ballGeometry = new THREE.SphereGeometry(1.1, 32, 32)

  const cylinderMaterial = new THREE.MeshBasicMaterial({ color: cylinder })
  const purpleMaterial = new THREE.MeshBasicMaterial({ color: purple })

  const dna = new THREE.Object3D()
  const holder = new THREE.Object3D()

  for (const i = 0; i <= 20; i++) {
    const cylinder = new THREE.Mesh(tubeGeometry, cylinderMaterial)
    cylinder.rotation.z = (90 * Math.PI) / 180
    cylinder.position.x = 0

    const ballRight = new THREE.Mesh(ballGeometry, purpleMaterial)
    ballRight.position.x = 6

    const ballLeft = new THREE.Mesh(ballGeometry, purpleMaterial)
    ballLeft.position.x = -5

    const row = new THREE.Object3D()

    row.add(cylinder)
    row.add(ballRight)
    row.add(ballLeft)

    row.position.y = i * 2
    row.rotation.y = (30 * i * Math.PI) / 180

    dna.add(row)
  }

  dna.position.y = -20

  scene.add(dna)

  dna.position.y = -20
  holder.add(dna)
  scene.add(holder)

  const CubeConfigData = function () {
    this.zoom = 20
  }

  const render = function () {
    requestAnimationFrame(render)

    holder.rotation.x += 0.0
    holder.rotation.y += 0.06
    renderer.render(scene, camera)
  }

  render()
}
