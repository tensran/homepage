import { useRef } from 'react'
import * as THREE from 'three'

const Mindmap = () => {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const nodes = [
    { id: 1, label: 'Node 1', position: [0, 0, 0], color: 'hotpink' },
    { id: 2, label: 'Node 2', position: [2, 0, 0], color: 'lightblue' },
    { id: 3, label: 'Node 3', position: [0, 2, 0], color: 'lightgreen' },
    { id: 4, label: 'Node 4', position: [-2, 0, 0], color: 'yellow' },
    { id: 5, label: 'Node 5', position: [0, -2, 0], color: 'orange' }
  ]

  const links = [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 4 },
    { source: 1, target: 5 }
  ]

  const onWindowResize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    cameraRef.current.aspect = width / height
    cameraRef.current.updateProjectionMatrix()
    rendererRef.current.setSize(width, height)
  }

  const renderScene = () => {
    rendererRef.current.render(sceneRef.current, cameraRef.current)
  }

  const animate = () => {
    requestAnimationFrame(animate)
    renderScene()
  }

  const init = () => {
    // Create scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    sceneRef.current = scene

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 10
    cameraRef.current = camera

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })
    renderer.setSize(window.innerWidth, window.innerHeight)
    rendererRef.current = renderer

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Add nodes
    nodes.forEach(node => {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshStandardMaterial({ color: node.color })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(...node.position)
      scene.add(cube)

      const div = document.createElement('div')
      div.className = 'label'
      div.textContent = node.label
      const label = new THREE.CSS2DObject(div)
      label.position.set(...node.position)
      scene.add(label)
    })

    // Add links
    links.forEach(link => {
      const sourceNode = nodes.find(node => node.id === link.source)
      const targetNode = nodes.find(node => node.id === link.target)

      const points = []
      points.push(new THREE.Vector3(...sourceNode.position))
      points.push(new THREE.Vector3(...targetNode.position))

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ color: 0xffffff })
      const line = new THREE.Line(geometry, material)
      scene.add(line)
    })

    animate()
  }

  return (
    <>
      <canvas ref={canvasRef} />
      <style jsx>{`
        .label {
          font-size: 12px;
          font-family: Arial, sans-serif;
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 2px;
          border-radius: 4px;
        }
      `}</style>
      {typeof window !== 'undefined' && init()}
      {typeof window !== 'undefined' &&
        window.addEventListener('resize', onWindowResize)}
    </>
  )
}

export default Mindmap
