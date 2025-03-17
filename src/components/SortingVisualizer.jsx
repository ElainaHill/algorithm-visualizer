import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";
import { selectSortingAlgorithm } from "../utils/selectSortingAlgorithm";

const SortingVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 1, 2, 7]);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  // Ref for the section that triggers the animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  const generateNewArray = () => {
    if (isSorting) return;
    
    const length = Math.floor(Math.random() * 40) + 10; // Random length between 10-50
    setArray(Array.from({ length }, () => Math.floor(Math.random() * 50) + 1));
  };

  const autoSelectAlgorithm = () => {
    const bestAlgorithm = selectSortingAlgorithm(array);
    setSelectedAlgorithm(bestAlgorithm);

    if (bestAlgorithm === "Bubble Sort") {
      bubbleSort(array, setArray, setIsSorting);
    } else if (bestAlgorithm === "Quick Sort") {
      quickSort(array, setArray, setIsSorting);
    } else if (bestAlgorithm === "Merge Sort") {
      mergeSort(array, setArray, setIsSorting);
    } else if (bestAlgorithm === "Insertion Sort") {
      insertionSort(array, setArray, setIsSorting);
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ color: "white", fontSize: "10rem", fontWeight: "bold", marginBottom: "1rem" }}>
        AI-Powered Sorting Visualizer
      </h1>

      <div style={{ color: "white", fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {array.join(" ")}
      </div>

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#FFFFFF",
          color: "black",
          borderRadius: "8px",
          marginTop: "1rem",
          marginBottom: "1rem",
          cursor: "pointer"
        }}
        onClick={autoSelectAlgorithm}
        disabled={isSorting}
      >
        AI Pick Algorithm
      </button>

      {selectedAlgorithm && (
        <p style={{ color: "white", marginTop: "0.5rem", fontSize: "1.125rem" }}>
          AI Selected: {selectedAlgorithm}
        </p>
      )}

      <motion.button
        style={{
          padding: "10px 20px",
          backgroundColor: "#FFFFFF",
          color: "black",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.2s ease"
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={generateNewArray}
        disabled={isSorting}
      >
        New Array
      </motion.button>
    </motion.div>
  );
};

export default SortingVisualizer;







