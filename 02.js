const shiftSelectedLeft = (data, selected) => {
	selected.sort();
	const copy = [...data];

	selected.forEach((selectedValue, selectedIdx) => {
		const dataIdx = data.indexOf(selectedValue);
		if(selectedIdx !== dataIdx) {
			if(dataIdx - 1 >= 0) {
				const temp = copy[dataIdx];
				copy[dataIdx] = copy[dataIdx - 1];
				copy[dataIdx - 1] = temp;
			}
			
		}
	})

	return copy;
}

const data = [1, 2, 3];

console.log(shiftSelectedLeft(data, [1])); // [1, 2, 3]
console.log(shiftSelectedLeft(data, [2])); // [2, 1, 3]
console.log(shiftSelectedLeft(data, [3])); // [1, 3, 2]
console.log(shiftSelectedLeft(data, [1, 2])); // [1, 2, 3]
console.log(shiftSelectedLeft(data, [2, 1])); // [1, 2, 3]
console.log(shiftSelectedLeft(data, [1, 3])); // [1, 3, 2]
console.log(shiftSelectedLeft(data, [3, 1])); // [1, 3, 2]
console.log(shiftSelectedLeft(data, [2, 3])); // [2, 3, 1]
console.log(shiftSelectedLeft(data, [3, 2])); // [2, 3, 1]
console.log(shiftSelectedLeft(data, [1, 2, 3])); // [1, 2, 3]


