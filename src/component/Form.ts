import Success from "./Success";

export default function Form() {
  const form = document.createElement("form");
  form.noValidate = true;
  form.innerHTML = `
      <label for="email">
        <span>Email address</span>
        <span id="input-error"></span>
      </label>
      <input type="email" id="email" placeholder="email@company.com"/>
      <button>Subscribe to monthly newsletter</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = document.querySelector("input");

    if (!emailRegex.test(emailInput!.value)) {
      document.querySelector("#input-error")!.textContent =
        "Valid email required";

      document.querySelector("input")!.className = "error";
      emailInput!.focus();
    } else {
      const app = document.querySelector<HTMLElement>("#app");
      app!.innerHTML = "";
      app!.appendChild(Success(emailInput!.value));
    }
  });

  return form;
}
