function changeFact() {

    const facts = [
        "The Sun accounts for about 99.86% of the Solar System's mass.",
        "Jupiter is so large that all other planets could fit inside it.",
        "A day on Venus is longer than a year on Venus.",
        "Neutron stars are so dense that a teaspoon would weigh billions of tons.",
        "Saturn could float in water because it is mostly made of gas.",
        "Mars has the tallest volcano in the Solar System.",
        "Light from the Sun takes about 8 minutes to reach Earth."
    ];

    let randomIndex = Math.floor(Math.random() * facts.length);

    document.getElementById("spaceFact").innerText = facts[randomIndex];
}
