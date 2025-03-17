// quickSort.js
export const quickSort = (array, setArray, setIsSorting) => {
    const arr = [...array]; // Copy the array to avoid mutation
  
    const partition = (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot into correct position
      return i + 1;
    };
  
    const sort = (arr, low, high) => {
      if (low < high) {
        const pi = partition(arr, low, high);
  
        // Recursively sort the sub-arrays
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
      }
    };
  
    setIsSorting(true);
  
    const sortStep = () => {
      sort(arr, 0, arr.length - 1);
      setArray([...arr]); // Update state after sorting step
      setIsSorting(false); // Sorting complete
    };
  
    sortStep(); // Start quick sort
  };
  
  
  