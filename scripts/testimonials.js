//make review elements
(() => {
  const reviewItem = document.querySelector(".item");
  const reviewContainer = reviewItem.parentElement;
  const reviews = [
    {
      review:
        "Enrolling for the natural building workshop with EOS Design Studio has given me a new perspective towards organic living. I have learnt about building techniques which not only makes the structure look beautiful but they also minimize environmental impact. Their hands-on approach and their commitment to build structures sustainably was both educational and empowering. Here's to building not just structures but a sustainable future.",
      user: "Preeti Girkar, Performer",
    },
    {
      review:
        "Attending the natural building workshop organized by EOS design was an unparalleled learning journey. Immersed in seven days of hands-on experience, I developed a deep affection for the materials and techniques of natural building. Saumya's insightful explanations at every step enriched my understanding and sparked a realization: it's never too late to contribute to the planet's well-being. Beyond the invaluable lessons, the genuine warmth extended to us made the entire experience truly memorable.",
      user: "Riya Bissa, Architect",
    },
    {
      review:
        "EOS is an amazing space built by Saumya with much love, care and lots of experience. I first visited the studio for a workshop. As a lawyer, I absolutely had no business with architecture and I thought it would be tough to understand anything about natural building. But while working at the studio I was able to learn quite a lot about natural building. It really is a place for anyone and everyone, whoever is interested in sustainable lifestyles and exploring their surroundings more deeply!!",
      user: "Rohan Jain, Lawyer",
    },
    {
      review:
        "I did my first work shop with Saumya in February and it was an amazing experience. We experimented cob house techniques with theory and practice. You can go eyes closed to her workshop because she is professional and hard-worker. We will definitely come again to participate to others workshops with her and her team.",
      user: "Clemence, Social Worker ",
    },
  ];
  for (let i = 0; i < reviews.length; i++) {
    const clone = reviewItem.cloneNode(true);
    clone.querySelector(".card-text").innerText =
      "''" + reviews[i].review + "''";
    clone.querySelector(".card-footer").innerText = "- " + reviews[i].user;
    reviewContainer.appendChild(clone);
    i !== 0 && clone.classList.remove("active");
  }
  reviewItem.remove();
})();
