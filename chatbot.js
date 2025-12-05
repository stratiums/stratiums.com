// chatbot.js - Lógica aislada del Chatbot (Dependencia externa)
// Si este script falla (ej: bloqueo de anuncios), el resto de la web NO se rompe.


import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';


// Inicialización segura del chat
try {
    createChat({
        webhookUrl: 'https://n8n.srv903631.hstgr.cloud/webhook/660aad3e-ecc6-4cec-852a-6bf20252be44/chat',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
            'Hola, soy Rivo, tu asistente de Stratiums Corporation.',
            '¿En qué puedo ayudarte hoy?'
        ],
        i18n: {
            en: {
                title: '<img src="https://i.postimg.cc/y8RYHtfP/logo.png" style="width: 32px; height: 32px; border-radius: 50%; vertical-align: middle; margin-right: 8px; background-color: white; padding: 2px;" alt="Avatar"> Rivo',
                subtitle: '',
                footer: '',
                getStarted: 'Iniciar conversación',
                inputPlaceholder: 'Escribe tu consulta...'
            }
        }
    });
} catch (error) {
    console.warn("El chatbot no pudo cargarse:", error);
}
