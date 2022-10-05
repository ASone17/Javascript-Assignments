function countRepeatingDigits(number)
{
	let out = 0;
	let count =Array(10).fill(0);
	while (number > 0) {
		let rem = number % 10;
		count[rem]++;
		number = Math.floor(number / 10);
	}
	for (let i = 0; i < 10; i++) {
		if (count[i] > 1) {
			out++;
		}
	}
	return out;
}
let number=7312180905;
console.log(countRepeatingDigits(number));
