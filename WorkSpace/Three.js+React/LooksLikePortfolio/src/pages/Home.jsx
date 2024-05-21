import {  useState ,Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import  Loader  from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'


const Home = () => {
  {/* <div className=' absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  pop-up
  </div> */}
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const IslandforScreenSize = () =>{

    let screenScale = null;
    let screenPosition = [0, -6.5, -43 ];
    let islandRotation = [0.1, 4.7, 0];
      if(window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];

      } else {
        screenScale=[1,1,1]
      }

        return[screenScale, screenPosition, islandRotation]
  }

  const PlaneforScreenSize = () =>{

    let screenScale, screenPosition
   
      if(window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition =[0, -1.5, 0];
      } else {
        screenScale=[3,3,3];
        screenPosition=[0, -4, -4];
      }

        return[screenScale, screenPosition]
  }
    const [planeScale, planePosition] = PlaneforScreenSize();
    const [islandScale, islandPosition, islandRotation] = IslandforScreenSize();

  return (

    <section className=' w-full h-screen relative'>
        <Canvas
        className={`w-full h-screen bg-transparent' ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000 }}
        >
            <Suspense fallback={<Loader />}>
              
                <directionalLight position={[-2,0.5,1 ]} intensity={1.5}/>

                  <ambientLight intensity={1.2} />

                  <Sky />
                  <Bird />
                  
                  <Island 
                  position={islandPosition}
                  scale={islandScale}
                  rotation ={islandRotation}
                  isRotating ={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage = {setCurrentStage}
                  />
                {/* d */}
                  <Plane 
                  isRotating={isRotating}
                  planeScale={planeScale}
                  planePosition={planePosition}
                  rotation={[0,20,0]}
                  />

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home