const checkSum = (arr, number) => {
	let obj = {};
	for (var i = 0; i < arr.length; i++) {
		let item = number - arr[i];
		if (item in obj) return console.log(true);
		obj[arr[i]] = true;
		if (i == arr.length - 1) return console.log(false);
	}
};
checkSum([1, 1, 1, 10, 1], 11);
checkSum([5,8], 11);
checkSum([5,6], 11);