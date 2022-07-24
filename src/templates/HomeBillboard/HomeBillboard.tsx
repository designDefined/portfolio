import { Canvas } from "@react-three/fiber";
import "./HomeBillboard.scss";
import HomeCube from "../../components/HomeCube/HomeCube";

function HomeBillboard() {
  return (
    <article className="HomeBillboard">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <HomeCube />
      </Canvas>
    </article>
  );
}

export default HomeBillboard;
