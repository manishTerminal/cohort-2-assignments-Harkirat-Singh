const principal = document.querySelector("#principal");
const rate = document.querySelector("#rate");
const time = document.querySelector("#time");

const btn = document.querySelector("#btn");
const container = document.querySelector("#result");

btn.addEventListener("click", async (e) => {
	e.preventDefault();

	const p = principal.value;
	const r = rate.value;
	const t = time.value;

	const response = await fetch(
		`http://localhost:4000/interest?principal=${p}&rate=${r}&time=${t}`
	);

	const ans = await response.json();

	console.log(ans);

	const element1 = document.createElement("li");
	element1.innerHTML = `Total = ${ans.total}`;
	container.appendChild(element1);
    element1.classList.add("li")

	const element2 = document.createElement("li");
	element2.innerHTML = `Interest = ${ans.interest}`;
	container.appendChild(element2);
    element2.classList.add("li")
});
