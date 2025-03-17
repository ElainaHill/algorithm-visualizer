// mergeSort.js
export const mergeSort = (array, setArray, setIsSorting) => {
    const arr = [...array]; // Copy the array to avoid mutation
  
    const merge = (left, right) => {
      let result = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      return result.concat(left.slice(i), right.slice(j));
    };
  
    const sort = (arr) => {
      if (arr.length <= 1) return arr;
  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      return merge(sort(left), sort(right));
    };
  
    setIsSorting(true);
  
    const sortStep = () => {
      const sorted = sort(arr);
      setArray([...sorted]); // Update state after sorting step
      setIsSorting(false); // Sorting complete
    };
  
    sortStep(); // Start merge sort
  };
  
  