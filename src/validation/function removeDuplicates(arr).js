function findDuplicates(arr) {
    const duplicates = [];
    const elementsCount = {};
  
    for (const element of arr) {
      elementsCount[element] = (elementsCount[element] || 0) + 1;
      if (elementsCount[element] === 2) {
        duplicates.push(element);
      }
    }
  
    return duplicates;
  }
  
  const inputArray = [1, 2, 1, 3, 4, 2, 5, 5];
  const duplicateValues = findDuplicates(inputArray);
  
  console.log(duplicateValues); // Output: [1, 2, 5]
  