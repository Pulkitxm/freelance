emailjs.init({
  publicKey: "_W4LOgCylBqPIxGv9",
});

function sendEmail(e) {
  e.preventDefault();
  const formValues = {
    subject: document.getElementById("subject").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  startLoader();
  emailjs
    .send("service_4blrgha", "template_9viv797", formValues)
    .finally(() => {
      stopLoader();
    });
}

const form = document.getElementById("contact-form");
const formLoader = document.getElementById("contact-spinner");
const contactSender = document.getElementById("contact-sender");

const startLoader = () => {
  contactSender.classList.add("hidden");
  formLoader.classList.remove("hidden");
  window.onbeforeunload = () => true;
};
const stopLoader = () => {
  contactSender.classList.remove("hidden");
  formLoader.classList.add("hidden");
  window.onbeforeunload = null;
};

form.addEventListener("submit", sendEmail);
