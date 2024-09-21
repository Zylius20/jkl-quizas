function calculateResult() {
    const quizForm = document.getElementById('quizForm');
    const answers = {
        communications: 0,
        hr: 0,
        events: 0,
        education: 0
    };

    const selectedOptions = new FormData(quizForm);

    for (let value of selectedOptions.values()) {
        answers[value]++;
    }

    // Determine which committee has the most votes
    const maxCommittee = Object.keys(answers).reduce((a, b) => 
        answers[a] > answers[b] ? a : b
    );

    const resultText = {
        communications: "Komunikacija - būsite atsakingi už skyriaus socialinę mediją ir postus bei eventus.",
        hr: "ŽIK - būsite atsakingi už skyriaus naujokų priemimą ir chatų administravimą.",
        events: "Renginiai - būsite atsakingi už skyriaus renginių organizavimą",
        education: "Švietimas - būsite atsakingi už skyriaus organizuojamų pamokų vedimą mokyklose, bei kitomis su švietimu susijusiomis veiklomis."
    };

    // Display result
    document.getElementById('committee').innerText = resultText[maxCommittee];
    document.getElementById('result').classList.remove('hidden');
}
