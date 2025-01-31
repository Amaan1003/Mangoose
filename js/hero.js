// JavaScript for 3D Animation
document.addEventListener('DOMContentLoaded', () => {
    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.hero-canvas'), alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
  
    // Load 3D Model (Replace with your trackpants model)
    const loader = new THREE.GLTFLoader();
    loader.load('models/trackpants.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      model.position.y = -1;
      scene.add(model);
      
      // Animation
      function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.005;
        renderer.render(scene, camera);
      }
      animate();
    });
  
    camera.position.z = 5;
  
    // Parallax Effect
    document.addEventListener('mousemove', (e) => {
      camera.position.x = (e.clientX - window.innerWidth/2) * 0.0005;
      camera.position.y = (e.clientY - window.innerHeight/2) * -0.0005;
      camera.lookAt(scene.position);
    });
  
    // Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  
    // CTA Button Hover Effect
    const ctaBtn = document.querySelector('.hero-cta');
    ctaBtn.addEventListener('mouseenter', () => {
      ctaBtn.querySelector('.hover-effect').style.left = '100%';
    });
    
    ctaBtn.addEventListener('mouseleave', () => {
      ctaBtn.querySelector('.hover-effect').style.left = '-100%';
    });
  });