import Main from "../main";

export default function Success(email: string) {
  const container = document.createElement("div");
  const button = document.createElement("button");
  container.className = "success_container";
  button.className = "success_btn";

  container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button
        inside to confirm your subscription
      </p>
    `;

  button.textContent = "Dismiss message";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    Main();
  });

  container.appendChild(button);

  return container;
}
