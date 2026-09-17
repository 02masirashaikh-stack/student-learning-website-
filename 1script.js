let selectedClass = "";
let selectedSubject = "";
let selectedLevel = "";

let currentQuestion = 0;
let score = 0;


/* ================= QUESTIONS ================= */
/* STD. 1 - MARATHI */

const quizQuestions = {

    Marathi: {

        /* ================= EASY ================= */

        Easy: [

            {
                question: "‘आई’ या शब्दातील पहिले अक्षर कोणते?",
                options: ["ई", "आ", "इ", "अ"],
                answer: "आ"
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


        /* ================= MEDIUM ================= */

        Medium: [

            {
                question: "‘सुंदर’ या शब्दाचा समानार्थी शब्द कोणता?",
                options: ["कुरूप", "छान", "मोठा", "लहान"],
                answer: "छान"
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


        /* ================= HARD ================= */

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


/* ================= SHOW SECTION ================= */

function showSection(id) {

    document.querySelectorAll(".section").forEach(
        section => {
            section.classList.remove("active");
        }
    );

    document.getElementById(id).classList.add("active");

}


/* ================= SELECT CLASS ================= */

function selectClass(className) {

    selectedClass = className;

    document.getElementById("classTitle").innerText =
        selectedClass + " - Select Subject";

    showSection("subjects");

}


/* ================= SELECT SUBJECT ================= */

function selectSubject(subject) {

    selectedSubject = subject;

    document.getElementById("subjectTitle").innerText =
        selectedClass + " → " + selectedSubject;

    showSection("level");

}


/* ================= START QUIZ ================= */

function startQuiz(level) {

    selectedLevel = level;

    currentQuestion = 0;

    score = 0;

    document.getElementById("quizTitle").innerText =
        selectedClass + " | " +
        selectedSubject + " | " +
        selectedLevel + " Test";

    showSection("quiz");

    loadQuestion();

}


/* ================= LOAD QUESTION ================= */

function loadQuestion() {

    let questions = quizQuestions[selectedSubject];

    if (!questions || !questions[selectedLevel]) {

        document.getElementById("question").innerText =
            "Questions for this subject are not added yet.";

        document.getElementById("questionNumber").innerText = "";

        document.getElementById("options").innerHTML = "";

        return;
    }

    let currentQuestions =
        questions[selectedLevel];

    let q =
        currentQuestions[currentQuestion];


    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        currentQuestions.length;


    document.getElementById("question").innerText =
        q.question;


    let optionsHTML = "";


    q.options.forEach(option => {

        optionsHTML += `

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


    document.getElementById("options").innerHTML =
        optionsHTML;

}


/* ================= NEXT QUESTION ================= */

function nextQuestion() {

    let questions =
        quizQuestions[selectedSubject];

    if (!questions || !questions[selectedLevel]) {

        alert("Questions are not available yet.");

        return;

    }


    let currentQuestions =
        questions[selectedLevel];


    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (!selected) {

        alert("Please select an answer!");

        return;

    }


    if (
        selected.value ===
        currentQuestions[currentQuestion].answer
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion <
        currentQuestions.length
    ) {

        loadQuestion();

    }

    else {

        showResult();

    }

}


/* ================= RESULT ================= */

function showResult() {

    let questions =
        quizQuestions[selectedSubject][selectedLevel];


    document.getElementById("score").innerText =
        score + " / " + questions.length;


    let feedback = "";


    if (score === 10) {

        feedback =
            "Excellent! 🌟 Keep up the good work.";

    }

    else if (score >= 6) {

        feedback =
            "Good job! 👍 Practice a little more to improve.";

    }

    else {

        feedback =
            "Keep practicing! 📚 You can improve with regular practice.";

    }


    document.getElementById("feedback").innerText =
        feedback;


    showSection("result");

}


/* ================= CREATE ACCOUNT ================= */

function createAccount() {

    let name =
        document.getElementById("createName").value;

    let email =
        document.getElementById("createEmail").value;

    let password =
        document.getElementById("createPassword").value;


    let message =
        document.getElementById("createMessage");


    if (
        name === "" ||
        email === "" ||
        password === ""
    ) {

        message.innerText =
            "Please fill all details.";

        message.style.color = "red";

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


    message.innerText =
        "Account created successfully! 🎉";

    message.style.color = "green";

}


/* ================= LOGIN ================= */

function loginUser() {

    let name =
        document.getElementById("loginName").value;

    let password =
        document.getElementById("loginPassword").value;


    let savedName =
        localStorage.getItem("studentName");

    let savedPassword =
        localStorage.getItem("studentPassword");


    let message =
        document.getElementById("loginMessage");


    if (
        name === savedName &&
        password === savedPassword
    ) {

        message.innerText =
            "Login successful! Welcome " +
            name +
            " 🎉";

        message.style.color = "green";

    }

    else {

        message.innerText =
            "Invalid name or password.";

        message.style.color = "red";

    }

}


/* ================= CHATBOX ================= */

function toggleChat() {

    let chatbox =
        document.getElementById("chatbox");


    if (chatbox.style.display === "block") {

        chatbox.style.display = "none";

    }

    else {

        chatbox.style.display = "block";

        document.getElementById("chatInput").focus();

    }

}


/* ================= CHAT ENTER ================= */

function chatEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


/* ================= SEND MESSAGE ================= */

function sendMessage() {

    let input =
        document.getElementById("chatInput");

    let messages =
        document.getElementById("chatMessages");


    let text =
        input.value.trim();


    if (text === "") {

        return;

    }


    /* USER MESSAGE */

    let userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.innerText =
        text;


    messages.appendChild(
        userMessage
    );


    input.value = "";


    /* BOT REPLY */

    setTimeout(function() {

        let botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.innerText =
            getReply(text);


        messages.appendChild(
            botMessage
        );


        messages.scrollTop =
            messages.scrollHeight;

    }, 400);


    messages.scrollTop =
        messages.scrollHeight;

}


/* ================= BOT REPLY ================= */

function getReply(text) {

    text = text.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        return "Hello! 👋 How can I help you?";

    }


    if (text.includes("html")) {

        return "HTML is used to create the structure of a webpage.";

    }


    if (text.includes("css")) {

        return "CSS is used to design and style a webpage.";

    }


    if (text.includes("python")) {

        return "Python is a simple and popular programming language.";

    }


    if (
        text.includes("quiz") ||
        text.includes("test")
    ) {

        return "You can start a test by selecting your Standard, Subject and Test Level.";

    }


    if (
        text.includes("study") ||
        text.includes("learn")
    ) {

        return "Study regularly, practice questions and revise your lessons. 📚";

    }


    if (text.includes("thank")) {

        return "You're welcome! 😊";

    }


    return "I can help you with your learning, subjects and tests. 📚";

}