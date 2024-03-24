const byteSize = (str) => {
  // write your code here
	let blob = new Blob();
	const text = await blob.text([str]);
	return text.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
