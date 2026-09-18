let selectedClass = "";
let selectedSubject = "";
let selectedLevel = "";
let currentQuestion = 0;
let score = 0;

const quizQuestions = {

    Marathi: {

        Easy: [
            {
                question: "‘आई’ या शब्दाचा समानार्थी शब्द कोणता?",
                options: ["माता", "बहीण", "मुलगी", "मावशी"],
                answer: "माता"
            },
            {
                question: "‘फूल’ या शब्दाचे अनेकवचन काय?",
                options: ["फुली", "फुले", "फुला", "फुल"],
                answer: "फुले"
            },
             {
                question: "‘मोठा’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["उंच", "लहान", "जाड", "सुंदर"],
                answer: "लहान"
            },
              {
                question: "‘सूर्य’ कधी उगवतो?",
                options: ["रात्री", "सकाळी", "दुपारी", "संध्याकाळी"],
                answer: "सकाळी"
            },

            {
                question: "‘पाणी’ या शब्दाचा उपयोग कशासाठी होतो?",
                options: ["पिण्यासाठी", "लिहिण्यासाठी", "खेळण्यासाठी", "झोपण्यासाठी"],
                answer: "पिण्यासाठी"
            },

            {
                question: "‘आंबा’ हा कोणता शब्द आहे?",
                options: ["फळ", "फूल", "पक्षी", "प्राणी"],
                answer: "फळ"
            },

            {
                question: "‘राम शाळेत जातो.’ या वाक्यात व्यक्तीचे नाव कोणते?",
                options: ["शाळेत", "जातो", "राम", "या"],
                answer: "राम"
            },

            {
                question: "‘गोड’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["सुंदर", "कडू", "मोठा", "गरम"],
                answer: "कडू"
            },

            {
                question: "‘मांजर’ हा कोणता प्राणी आहे?",
                options: ["पाळीव प्राणी", "पक्षी", "जलचर", "कीटक"],
                answer: "पाळीव प्राणी"
            },

            {
                question: "‘कमळ’ हे काय आहे?",
                options: ["फळ", "फूल", "प्राणी", "झाड"],
                answer: "फूल"
            }

        ],

        Medium: [
            {
                question: "‘सुंदर’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["छान", "कुरूप", "मोठा", "लहान"],
                answer: "कुरूप"
            },
            {
                question: "‘दिवस’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["सकाळ", "रात्र", "दुपार", "संध्याकाळ"],
                answer: "रात्र"
            },

            {
                question: "‘मुलगा खेळत आहे.’ या वाक्यात क्रियापद कोणते?",
                options: ["मुलगा", "खेळत आहे", "या", "वाक्यात"],
                answer: "खेळत आहे"
            },

            {
                question: "‘फुले’ या शब्दाचे एकवचन काय?",
                options: ["फूल", "फुला", "फुली", "फुलांचे"],
                answer: "फूल"
            },

            {
                question: "‘आईने जेवण बनवले.’ या वाक्यात कोण जेवण बनवते?",
                options: ["बाबांनी", "मुलाने", "आईने", "मुलीने"],
                answer: "आईने"
            },

            {
                question: "‘जलद’ या शब्दाचा समानार्थी शब्द कोणता?",
                options: ["हळू", "लवकर", "उशिरा", "थांबून"],
                answer: "लवकर"
            },

            {
                question: "खालीलपैकी कोणता शब्द फळाचे नाव आहे?",
                options: ["गुलाब", "आंबा", "चिमणी", "पुस्तक"],
                answer: "आंबा"
            },

            {
                question: "‘सीमा शाळेत जाते.’ या वाक्यात व्यक्तीचे नाव कोणते?",
                options: ["शाळेत", "जाते", "सीमा", "या"],
                answer: "सीमा"
            },

            {
                question: "‘काळा’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["पांढरा", "निळा", "लाल", "हिरवा"],
                answer: "पांढरा"
            },

            {
                question: "खालीलपैकी योग्य वाक्य कोणते?",
                options: [
                    "राम शाळेत जातो.",
                    "जातो राम शाळेत.",
                    "शाळेत राम जातोतो.",
                    "राम जातो शाळेत आहे."
                ],
                answer: "राम शाळेत जातो."
            }

        ],
        Hard: [
          {
                question: "‘आनंदी’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["हसरा", "दुःखी", "सुंदर", "शांत"],
                answer: "दुःखी"
            },

            {
                question: "‘मुलगी पुस्तक वाचते.’ या वाक्यात कर्ता कोण आहे?",
                options: ["पुस्तक", "वाचते", "मुलगी", "या"],
                answer: "मुलगी"
            },

            {
                question: "‘पक्षी आकाशात उडतो.’ या वाक्यात क्रियापद कोणते?",
                options: ["पक्षी", "आकाशात", "उडतो", "या"],
                answer: "उडतो"
            },

            {
                question: "‘लहान’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["छोटा", "मोठा", "गोड", "नाजूक"],
                answer: "मोठा"
            },

            {
                question: "‘घर’ या शब्दाचे अनेकवचन काय?",
                options: ["घरे", "घरी", "घराला", "घरा"],
                answer: "घरे"
            },

            {
                question: "‘चिमणी झाडावर बसली.’ या वाक्यात चिमणी कुठे बसली?",
                options: ["घरावर", "झाडावर", "जमिनीवर", "पाण्यात"],
                answer: "झाडावर"
            },

            {
                question: "‘गरम’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
                options: ["थंड", "उष्ण", "कोमट", "तापलेले"],
                answer: "थंड"
            },

            {
                question: "‘फुलपाखरू’ कोणत्या गोष्टीसाठी ओळखले जाते?",
                options: ["पंखांसाठी", "शेपटीसाठी", "शिंगांसाठी", "खुरांसाठी"],
                answer: "पंखांसाठी"
            },

            {
                question: "‘आई बाजारात गेली.’ या वाक्यात आई कुठे गेली?",
                options: ["शाळेत", "बाजारात", "बागेत", "घरी"],
                answer: "बाजारात"
            },

            {
                question: "‘ससा वेगाने धावतो.’ या वाक्यात ससा कसा धावतो?",
                options: ["हळू", "वेगाने", "शांतपणे", "थांबून"],
                answer: "वेगाने"
            }

        ]

    }

};


/* SHOW SECTION */

function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* SELECT CLASS */

function selectClass(className) {

    selectedClass = className;

    document.getElementById("classTitle").innerText =
        className + " - Subjects";

    showSection("subjects");
}


/* SELECT SUBJECT */

function selectSubject(subject) {

    selectedSubject = subject;

    document.getElementById("subjectTitle").innerText =
        subject + " - Select Level";

    showSection("level");
}


/* START QUIZ */

function startQuiz(level) {

    selectedLevel = level;

    currentQuestion = 0;
    score = 0;

    document.getElementById("quizTitle").innerText =
        selectedSubject + " - " + level + " Quiz";

    showSection("quiz");

    loadQuestion();
}


/* LOAD QUESTION */

function loadQuestion() {

    const questions =
        quizQuestions[selectedSubject]?.[selectedLevel];

    if (!questions) {

        document.getElementById("question").innerText =
            "Questions for this subject are not added yet.";

        document.getElementById("options").innerHTML = "";

        return;
    }

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("question").innerText =
        q.question;

    const optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {

        optionsDiv.innerHTML += `
            <label class="option">
                <input
                    type="radio"
                    name="answer"
                    value="${option}"
                >
                ${option}
            </label>
        `;
    });
}


/* NEXT QUESTION */

function nextQuestion() {

    const questions =
        quizQuestions[selectedSubject]?.[selectedLevel];

    if (!questions) {
        return;
    }

    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if (!selected) {

        alert("Please select an answer.");

        return;
    }

    if (selected.value === questions[currentQuestion].answer) {

        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
}


/* SHOW RESULT */

function showResult() {

    const questions =
        quizQuestions[selectedSubject]?.[selectedLevel];

    const total = questions.length;

    const percentage =
        (score / total) * 100;

    document.getElementById("score").innerText =
        score + " / " + total;

    if (percentage >= 80) {

        document.getElementById("feedback").innerText =
            "Excellent! Keep learning.";

    } else if (percentage >= 50) {

        document.getElementById("feedback").innerText =
            "Good job! Keep practicing.";

    } else {

        document.getElementById("feedback").innerText =
            "Keep practicing and improve.";
    }

    showSection("result");
}


/* CREATE ACCOUNT */

function createAccount() {

    const name =
        document.getElementById("createName").value;

    const email =
        document.getElementById("createEmail").value;

    const password =
        document.getElementById("createPassword").value;

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }

    localStorage.setItem(
        "studentName",
        name
    );

    localStorage.setItem(
        "studentEmail",
        email
    );

    localStorage.setItem(
        "studentPassword",
        password
    );

    alert("Account created successfully!");

    showSection("login");
}


/* LOGIN */

function loginUser() {

    const name =
        document.getElementById("loginName").value;

    const password =
        document.getElementById("loginPassword").value;

    const savedName =
        localStorage.getItem("studentName");

    const savedPassword =
        localStorage.getItem("studentPassword");

    if (
        name === savedName &&
        password === savedPassword
    ) {

        alert("Login successful!");

        showSection("home");

    } else {

        alert("Invalid name or password.");
    }
}


/* CHAT BUTTON */

function toggleChat() {

    const chatbox =
        document.getElementById("chatbox");

    if (chatbox.style.display === "block") {

        chatbox.style.display = "none";

    } else {

        chatbox.style.display = "block";
    }
}


/* CHAT ENTER */

function chatEnter(event) {

    if (event.key === "Enter") {

        sendMessage();
    }
}


/* SEND MESSAGE */

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    const messages =
        document.getElementById("chatMessages");

    messages.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    const reply = getReply(message);

    messages.innerHTML += `
        <div class="bot-message">
            ${reply}
        </div>
    `;

    messages.scrollTop =
        messages.scrollHeight;
}


/* GET CHAT REPLY */

function getReply(message) {

    const text = message.toLowerCase();

    if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        return "Hello! How can I help you?";
    }

    if (text.includes("html")) {

        return "HTML is used to create the structure of a webpage.";
    }

    if (text.includes("css")) {

        return "CSS is used to design and style a webpage.";
    }

    if (text.includes("python")) {

        return "Python is a beginner-friendly programming language.";
    }

    if (
        text.includes("quiz") ||
        text.includes("test")
    ) {

        return "You can select a subject and level to start a quiz.";
    }

    if (
        text.includes("study") ||
        text.includes("learn")
    ) {

        return "Keep practicing daily and improve your knowledge.";
    }

    if (text.includes("thank")) {

        return "You're welcome!";
    }

    return "Sorry, I don't understand. Please ask another question.";
}
