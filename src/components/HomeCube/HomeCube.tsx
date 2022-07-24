import * as THREE from "three";
import "./HomeCube.scss";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import store, { RootState } from "../../redux/store";
import { rotateStop } from "../../redux/homeCube";

let count = 0;

const pi = Math.PI;
const easeInOutQuad = (x: number): number =>
  x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2;
const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);
const initialRotation = { x: pi / 8, y: pi / 4, z: 0 };

const rotateUntil = (
  ref: THREE.Mesh,
  axis: "x" | "y" | "z",
  value: number,
  isPlus: boolean
) => {
  // if (isPlus) {
  //   if (ref.rotation[axis] < value) {
  //     const next = ref.rotation[axis] + ease;
  //     ref.rotation[axis] = next;
  //     ease =
  //       easeOutQuad(next / (value - initialRotation[axis])) *
  //       (value - initialRotation[axis]);
  //     return true;
  //   }
  // } else if (ref.rotation[axis] > value) {
  //   ref.rotation[axis] -= 0.01;
  //   return true;
  // }
  // return false;
};
const setRotationTo = (
  ref: THREE.Mesh,
  value: { x: number; y: number; z: number }
) => {
  ref.rotation.x = value.x;
  ref.rotation.y = value.y;
  ref.rotation.z = value.z;
};

const easeRotationTo = (
  ref: THREE.Mesh,
  axis: "x" | "y" | "z",
  duration: number,
  value: number,
  order = 0
) => {
  if (count - order * duration < duration) {
    ref.rotation[axis] =
      initialRotation[axis] +
      easeOutQuad((count - duration * order) / duration) * value;
    count += 1;
    return true;
  }
  return false;
};

const easeInOutRotationTo = (
  ref: THREE.Mesh,
  axis: "x" | "y" | "z",
  duration: number,
  value: number,
  order = 0
) => {
  if (count - order * duration < duration) {
    ref.rotation[axis] =
      initialRotation[axis] +
      easeInOutQuad((count - duration * order) / duration) * value;
    count += 1;
    return true;
  }
  return false;
};

const getRotatingNext = () => store.getState().homeCube.toNext;
const getRotatingInvert = () => store.getState().homeCube.toInvert;

function HomeCube(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (getRotatingNext()) {
      if (!easeInOutRotationTo(mesh.current, "y", 150, -pi / 2, 0)) {
        if (!easeInOutRotationTo(mesh.current, "z", 150, pi / 2, 1)) {
          count = 0;
          setRotationTo(mesh.current, initialRotation);
          store.dispatch(rotateStop());
        }
      }
    }
    if (getRotatingInvert()) {
      if (!easeInOutRotationTo(mesh.current, "x", 300, pi)) {
        count = 0;
        setRotationTo(mesh.current, initialRotation);
        store.dispatch(rotateStop());
      }
    }
  });

  return (
    <mesh
      position={[0, 0, 0]}
      ref={mesh}
      scale={2}
      rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default HomeCube;
