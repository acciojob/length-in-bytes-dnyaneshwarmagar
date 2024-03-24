const byteSize = (str) => {
  // write your code here
	let blob = new Blob([str]);
	
	return blob.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
