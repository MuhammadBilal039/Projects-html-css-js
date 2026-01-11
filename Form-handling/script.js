const resultContainer = document.getElementById("result");
const form = document.querySelector("form");

let id = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill all the fields properly!");
  } else {
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerHTML = `
                <h3>Studend Information</h3>
                <p><strong>ID</strong>: ${id++}</p>
                <p><strong>Name</strong>: ${name}</p>
                <p><strong>Email</strong>: ${email}</p>
                `;
    // resultContainer.style.display = "block";
    resultContainer.appendChild(div);
  }

  e.target.reset();
});
