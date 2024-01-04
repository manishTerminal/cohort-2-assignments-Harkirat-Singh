const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondinput");
const btn = document.querySelector("#cal-btn");
const output = document.querySelector("#cal-result");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	const val1 = parseInt(firstInput.value);
	const val2 = parseInt(secondInput.value);

	const result = calculateSum(val1, val2);
	console.log(result);

	const element = document.createElement("h2");
	if (result) {
		element.innerText = result;
		output.appendChild(element);
		element.classList.add("result");
	} else {
		element.innerHTML = "Enter valid Number";
		output.appendChild(element);
		element.classList.add("result");
	}

	firstInput.value = "";
	secondInput.value = "";
    
});

const calculateSum = (val1, val2) => {
	const sum = val1 + val2;
	return sum;
};
