function showTodayFact() {

    const facts = [
        "The Sun accounts for about 99.86% of the Solar System's mass.",
        "Jupiter is so large that all other planets could fit inside it.",
        "A day on Venus is longer than a year on Venus.",
        "Neutron stars are extremely dense.",
        "Saturn could float in water.",
        "Mars has the tallest volcano in the Solar System.",
        "Light from the Sun takes 8 minutes to reach Earth."
    ];

    let today = new Date();

    // Get a number based on date
    let index = today.getDate() % facts.length;

    document.getElementById("spaceFact").innerText = facts[index];
}
function showDate() {
    let today = new Date();
    let formattedDate = today.toDateString();
    document.getElementById("todayDate").innerText = formattedDate;
}
window.onload = function() {
    showTodayFact();
    showDate();
};
