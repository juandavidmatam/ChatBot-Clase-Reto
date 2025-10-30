
import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from './types';
import { getBotResponse } from './services/geminiService';
import { Header } from './components/Header';
import { ChatBubble } from './components/ChatBubble';
import { MessageInput } from './components/MessageInput';
import { TypingIndicator } from './components/TypingIndicator';

const App: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    useEffect(() => {
        // Initial message from Lupita
        const initialBotMessage: ChatMessage = {
            id: 'init',
            sender: 'bot',
            text: `¡Hola! Soy Lupita, tu asistente virtual. Estoy aquí para ayudarte con información, productos o soporte técnico. ¿Con qué te puedo ayudar hoy?\n\nEn lo que te puedo ayudar:\n• Productos y Servicios.\n• Conocer el proceso.\n• Obtener soporte técnico.\n• Hablar con un asesor.`
        };
        setMessages([initialBotMessage]);
        setIsLoading(false);
    }, []);

    const handleSendMessage = async (text: string) => {
        const userMessage: ChatMessage = {
            id: new Date().toISOString(),
            sender: 'user',
            text,
        };
        
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const botResponseData = await getBotResponse(newMessages);
            const botMessage: ChatMessage = {
                id: new Date().toISOString() + '-bot',
                sender: 'bot',
                text: botResponseData.response,
            };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Failed to get bot response:", error);
            const errorMessage: ChatMessage = {
                id: new Date().toISOString() + '-error',
                sender: 'bot',
                text: "Lo siento, algo salió mal. Por favor, inténtalo de nuevo.",
            };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen max-w-2xl mx-auto bg-gray-100 shadow-2xl rounded-lg overflow-hidden">
            <Header />
            <div className="flex-grow p-4 overflow-y-auto">
                <div className="flex flex-col space-y-2">
                    {messages.map((msg) => (
                        <ChatBubble key={msg.id} message={msg} />
                    ))}
                    {isLoading && (
                       <div className="flex justify-start">
                         <TypingIndicator />
                       </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default App;
