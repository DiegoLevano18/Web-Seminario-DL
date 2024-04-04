// Función para alternar la visibilidad del chatbot
function toggleChatbot() {
    var chatbotFrame = document.getElementById("chatbotFrame");
    var chatbot = document.getElementById("chatbot");
    if (chatbotFrame.style.display === "none") {
        chatbotFrame.style.display = "block";
        chatbot.style.display = "block";
    } else {
        chatbotFrame.style.display = "none";
        chatbot.style.display = "none";
    }
}