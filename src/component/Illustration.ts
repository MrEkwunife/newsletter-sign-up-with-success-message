import illustrationSignUpMobile from "/assets/images/illustration-sign-up-mobile.svg";
import illustrationSignUpTablet from "/assets/images/illustration-sign-up-tablet.svg";
import illustrationSignUpDesktop from "/assets/images/illustration-sign-up-desktop.svg";

export default function Illustration() {
  return `
      <div>
        <img src=${illustrationSignUpMobile} alt="Sign up Illustration" class="img-mobile img-illustration" />
        <img src=${illustrationSignUpTablet} alt="Sign up Illustration" class="img-tablet img-illustration" />
        <img src=${illustrationSignUpDesktop} alt="Sign up Illustration" class="img-desktop img-illustration" />
      </div>
    `;
}
