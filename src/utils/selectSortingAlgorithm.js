export function selectSortingAlgorithm(array) {
    const n = array.length;
  
    // Check if the array is nearly sorted
    let isSorted = true;
    for (let i = 1; i < n; i++) {
      if (array[i] < array[i - 1]) {
        isSorted = false;
        break;
      }
    }
  
    if (n < 10) {
      return "Insertion Sort"; // Best for small arrays
    } else if (isSorted) {
      return "Bubble Sort"; // Works well on almost sorted arrays
    } else if (n >= 50) {
      return "Merge Sort"; // Best for large arrays
    } else {
      return "Quick Sort"; // Good for medium-sized arrays
    }
  }
  