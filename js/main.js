(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Carousel Initializations
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, dots: true, loop: true, margin: 25, nav: false,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });

    $(".packages-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, dots: false, loop: true, margin: 25, nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });

    $(".testimonial-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, center: true, dots: true, loop: true, margin: 25, nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });

    // =======================================================================
    // CHATBOT STYLES
    // =======================================================================
const chatbotStyles = `
#chatbot-toggler {
    position: fixed; bottom: 30px; right: 35px; 
    height: 58px; width: 58px;
    background: linear-gradient(135deg, #0d6efd, #00b4d8); 
    color: #fff; border: none; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; 
    cursor: pointer; transition: all 0.2s ease; 
    z-index: 999; animation: pulse 2s infinite;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
#chatbot-toggler svg { 
    width: 32px; height: 32px; 
    transition: transform 0.3s ease;
}
#chatbot-toggler:hover { 
    background: linear-gradient(135deg, #0b5ed7, #0096c7); 
    box-shadow: 0 6px 20px rgba(0,0,0,0.4); 
    transform: scale(1.1);
}
#chatbot-toggler:hover svg {transform: rotate(15deg);}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(13,110,253, 0.6); }
    70% { box-shadow: 0 0 0 20px rgba(13,110,253, 0); }
    100% { box-shadow: 0 0 0 0 rgba(13,110,253, 0); }
}
#chatbot-container {
    position: fixed; bottom: 100px; right: 35px; 
    width: 500px; max-height: 500px;
    background: #fff; border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    transform-origin: bottom right; 
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.5); opacity: 0; 
    pointer-events: none; z-index: 999;
    display: flex; flex-direction: column;
}

/* Mobile-friendly styles */
@media (max-width: 768px) {
    #chatbot-container {
        width: 90%;
        max-height: 80vh;   /* Fit within viewport height */
        bottom: 100px;
        right: 5%;
        left: 5%;
        border-radius: 16px;
    }
    #chatbot-toggler {
        bottom: 20px;
    }

    #chatbox {
        height: calc(70vh - 100px); /* Adjust dynamically */
        padding: 20px 12px 15px;
    }

    .chatbot-header h2 {
        font-size: 1rem;
    }

    .chat p {
        max-width: 100%; /* Allow full width on mobile */
        font-size: 0.9rem;
    }

    .chat-input textarea {
        font-size: 0.9rem;
    }
}

#chatbot-container.show { 
    transform: scale(1); 
    opacity: 1; pointer-events: auto; 
}
.chatbot-header {
    padding: 16px 0; 
    position: relative; 
    text-align: center;
    color: #fff; font-weight: 600;
    background: linear-gradient(135deg, #0d6efd, #00b4d8); 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px;
}
.chatbot-header h2 { 
    font-size: 1.3rem; margin: 0; color: #fff; letter-spacing: 1px
    }
.chatbot-header #close-btn {
    position: absolute; 
    right: 15px; top: 50%; 
    transform: translateY(-50%);
    cursor: pointer; font-size: 2rem;
    font-weight: bold;
    width: 36px;
}

.chatbot-header #close-btn:hover {
    color: #ff4d4d;    /* red on hover */
    transform: translateY(-50%) scale(1.2); /* pop out */
    transition: 0.2s ease;
}

#chatbox { 
    overflow-y: auto; height: 400px; 
    padding: 30px 20px 25px; list-style: none; margin: 0; }
.chat { 
    display: flex; margin-bottom: 15px; align-items: flex-end; }
.chat .avatar {
    height: 36px; width: 36px;
    background: #0d6efd; color: #fff;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%; margin-right: 10px;
    font-size: 1rem; font-weight: bold;
    flex-shrink: 0;
}
.chat p { 
    max-width: 80%; padding: 12px 16px; 
    font-size: 0.95rem; margin: 0; 
    white-space: pre-wrap;
    line-height: 1.4; 
    
}

.chat.outgoing { justify-content: flex-end; }
.chat.outgoing p { 
    background: linear-gradient(135deg, #0d6efd, #00b4d8); 
    color: #fff; border-radius: 18px 18px 0 18px; 
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    animation: fadeInRight 0.3s ease;
}
.chat.bot p { 
    background: #ffffff; color: #000000; 
    border-radius: 18px 18px 18px 0; 
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    animation: fadeInLeft 0.3s ease;
}
.chat p.error { background: #ffcccc; color: #b30000; }

@keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-15px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
    from { opacity: 0; transform: translateX(15px); }
    to { opacity: 1; transform: translateX(0); }
}

.typing-indicator { 
    display: flex; padding: 10px 14px; 
    border-radius: 18px 18px 18px 0; 
    background: #ffffff; 
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    margin-left: 45px;
}
.typing-indicator span {
    height: 8px; width: 8px; 
    margin: 0 2px; background-color: #999; 
    border-radius: 50%;display: inline-block; 
    animation: typing 1.4s infinite ease-in-out both;
}
.typing-indicator span:nth-child(2) { animation-delay: .2s; }
.typing-indicator span:nth-child(3) { animation-delay: .4s; }
@keyframes typing { 0%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }

.chat-input {
    display: flex; gap: 8px;
    background: #fff;
    padding: 5px 10px;
    border-top: 1px solid #eee;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.chat-input textarea {
    height: 50px; width: 100%; 
    border: none; outline: none; 
    resize: none;max-height: 150px; 
    padding: 12px 14px; 
    font-size: 0.95rem;
    border-radius: 12px;
    background: #f1f3f5;
}
.chat-input span {
    align-self: flex-end; cursor: pointer; height: 50px; width: 50px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.35rem; color: #0d6efd;
    border-radius: 50%;
    transition: background 0.2s ease;
}
.chat-input span:hover { background: #f1f3f5; }

/* Mobile-friendly styles */

@media (max-width: 768px) {
    #chatbot-container {
        width: 90%;
        max-height: 80vh;   /* Fit within viewport height */
        bottom: 100px;
        right: 5%;
        left: 5%;
        border-radius: 16px;
    }
    #chatbot-toggler {
        bottom: 25px;
    }

    #chatbox {
        height: calc(70vh - 100px); /* Adjust dynamically */
        padding: 20px 12px 15px;
    }

    .chatbot-header h2 {
        font-size: 1rem;
    }

    .chat p {
        max-width: 100%; /* Allow full width on mobile */
        font-size: 0.9rem;
    }

    .chat-input textarea {
        font-size: 0.9rem;
    }
}

/* Extra small (phones < 480px) */
@media (max-width: 480px) {
    #chatbot-container {
        width: 95%;
        bottom: 100px;
        left: 2.5%;
        right: 2.5%;
        max-height: 85vh;
    }
    #chatbot-toggler {
        bottom: 25px;
    }

    .chat-input {
        gap: 5px;
    }

    .chat-input textarea {
        height: 45px;
        padding: 10px;
    }

    .chat-input span {
        height: 45px;
        width: 45px;
        font-size: 1.2rem;
    }
}`;
const styleSheet = document.createElement("style");
styleSheet.innerText = chatbotStyles;
document.head.appendChild(styleSheet);

// =======================================================================
// CHATBOT HTML
// =======================================================================
const chatbotHtml = `
<div id="chatbot-container">
    <div class="chatbot-header"><h2>TravelaBot</h2><span id="close-btn">×</span></div>
    <ul id="chatbox"></ul>
    <div class="chat-input">
        <textarea id="chat-input-textarea" placeholder="Enter a message..." required></textarea>
        <span id="send-btn">➤</span>
    </div>
</div>
<div id="chatbot-toggler">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
    </svg>
</div>`;
document.body.insertAdjacentHTML('beforeend', chatbotHtml);

// =======================================================================
// VARIABLES
// =======================================================================
const chatbotToggler = document.getElementById("chatbot-toggler");
const chatbotContainer = document.getElementById("chatbot-container");
const closeBtn = document.getElementById("close-btn");
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input-textarea");
const sendChatBtn = document.getElementById("send-btn");
let userMessage = null;

let lastMessageData = null;

const API_ENDPOINT = "https://dev-test.autobiz.ai/api/v1/run/420d205b-f730-4f63-a055-4c610057856f";
const API_KEY = "sk-ms3iz0gNocLgpmJMa19R2BzdkDsll6ZZCm_Q0oTEL-s"; 

// =======================================================================
// CHAT HISTORY PERSISTENCE (JSON FIX)
// =======================================================================
const CHAT_HISTORY_KEY = "chatbot_history";
const CHAT_STATE_KEY = "chatbot_state";

const saveChatHistory = () => {
    const chats = [];
    chatbox.querySelectorAll("li.chat").forEach(li => {
        const isBot = li.classList.contains("bot");
        const text = li.querySelector("p")?.innerText || "";
        chats.push({ role: isBot ? "bot" : "user", message: text });
    });
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(chats));
    localStorage.setItem(CHAT_STATE_KEY, chatbotContainer.classList.contains("show") ? "open" : "closed");
};

const loadChatHistory = () => {
    const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
    chatbox.innerHTML = "";

    if (savedHistory) {
        try {
            const chats = JSON.parse(savedHistory);
            chats.forEach(chat => {
                chatbox.appendChild(createChatLi(chat.message, chat.role === "bot" ? "bot" : "outgoing"));
            });
        } catch {
            addWelcomeMessage();
        }
    } else {
        addWelcomeMessage();
    }

    chatbox.scrollTo(0, chatbox.scrollHeight);

    const savedState = localStorage.getItem(CHAT_STATE_KEY);
    if (savedState === "open") chatbotContainer.classList.add("show");
};


const addWelcomeMessage = () => {
    chatbox.innerHTML = `
        <li class="chat bot">
            <span class="avatar">T</span>
            <p>Hi there! 👋<br>I'm your travel assistant. Ask me anything!</p>
        </li>`;
};

// =======================================================================
// FUNCTIONS
// =======================================================================
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = (className === "bot") ? '<span class="avatar">T</span>' : '';
    chatContent += `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    setTimeout(saveChatHistory, 0);
    return chatLi;
};

const generateResponse = async (chatElement) => {
    const requestPayload = { input_value: userMessage, stream: false };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY
        },
        body: JSON.stringify(requestPayload)
    };

    try {
        const response = await fetch(API_ENDPOINT, requestOptions);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const botReply =
            data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text ||
            data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
            data?.outputs?.[0]?.outputs?.[0]?.results?.text ||
            "No reply from bot.";

        chatElement.innerHTML = `<span class="avatar">T</span><p>${botReply}</p>`;
    } catch (error) {
        console.error("Error fetching from Langflow:", error);
        chatElement.innerHTML = `<span class="avatar">T</span><p class="error">Oops! ${error.message}</p>`;
    } finally {
        chatbox.scrollTo(0, chatbox.scrollHeight);
        saveChatHistory();
    }
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = "auto";

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = document.createElement("li");
        incomingChatLi.classList.add("chat", "bot");
        incomingChatLi.innerHTML =
            `<span class="avatar">T</span><div class="typing-indicator"><span></span><span></span><span></span></div>`;
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        generateResponse(incomingChatLi);
    }, 600);
};

// =======================================================================
// EVENT LISTENERS
// =======================================================================
chatInput.addEventListener("input", () => {
    chatInput.style.height = "auto";
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.remove("show");
    saveChatHistory();
});
chatbotToggler.addEventListener("click", () => {
    chatbotContainer.classList.toggle("show");
    saveChatHistory();
});

// =======================================================================
// INIT
// =======================================================================
loadChatHistory();


})(jQuery);