// insertionSort.js
export const insertionSort = (array, setArray, setIsSorting) => {
    const arr = [...array]; // Copy the array to avoid mutation
    setIsSorting(true);
  
    const sortStep = () => {
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
  
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
  
        // Update the array and trigger visual update after each iteration
        setArray([...arr]);
      }
  
      setIsSorting(false); // Sorting complete
    };
  
    sortStep(); // Start insertion sort
  };
  