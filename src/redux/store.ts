import { configureStore } from "@reduxjs/toolkit";
import sampleStore from "./sample";

export default configureStore({ reducer: { sample: sampleStore } });
