const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
    // Encode the string to a Uint8Array
    const bytes = encoder.encode(str);
    // Return the length of the Uint8Array (size of the string in bytes)
    return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
