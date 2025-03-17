// bubbleSort.js
export const bubbleSort = (array, setArray, setIsSorting) => {
  let arr = [...array]; // Create a copy to avoid mutating state directly
  let n = arr.length;
  let isSorted = false;

  setIsSorting(true);

  // Bubble Sort logic
  const sortStep = () => {
    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (swapped) {
      setArray([...arr]); // Update state to trigger re-render
      requestAnimationFrame(sortStep); // Continue the next step of sorting
    } else {
      setIsSorting(false); // Sorting complete
    }
  };

  sortStep(); // Start sorting
};



  