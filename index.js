document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();

  let useremail = document.getElementById("useremail").value;
  let password = document.getElementById("Password").value;
  let area = document.getElementById("Textarea").value;

  let useremailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isvalid = true;

  // Email validation
  if (useremail === "") {
    document.getElementById("mailerror").textContent = "Email is required";
    isvalid = false;
  } else if (!useremailRegex.test(useremail)) {
    document.getElementById("mailerror").textContent = "Please enter a valid email";
    isvalid = false;
  } else {
    document.getElementById("mailerror").textContent = "";
  }

  // Password validation
  if (password === "") {
    document.getElementById("perror").textContent = "Password is required";
    isvalid = false;
  } else {
    document.getElementById("perror").textContent = "";
  }

  if (isvalid) {
    alert("Form Submitted!");
    console.log(useremail, password, area);

    document.querySelector("form").reset();
  }
});
