import Form from "./Form";

export default function FormContainer() {
  const container = document.createElement("div");
  container.className = "info-form-container";

  container.innerHTML = `
    <h1>Stay updated!</h1>
    <p>Join 60,000+ product managers receiving monthly updates on:</p>
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <span>Product discovery and building what matters</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <span>Measuring to ensure updates are a success</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <span>And much more</span>
      </li>
    </ul>
  `;

  container.appendChild(Form());

  return container;
}
