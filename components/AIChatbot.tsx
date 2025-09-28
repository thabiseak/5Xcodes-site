'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const quickResponses = [
  "Tell me about your services",
  "What's your pricing?",
  "How can I get started?",
  "Do you offer consultations?",
];

const chatbotResponses: { [key: string]: string } = {
  "services": "We offer custom software development, cloud solutions, AI integration, and mobile app development. Our team specializes in cutting-edge technologies to accelerate your digital transformation.",
  "pricing": "Our pricing varies based on project scope and requirements. We offer flexible engagement models including fixed-price projects, dedicated teams, and hourly consulting. Contact us for a personalized quote.",
  "started": "Getting started is easy! Simply reach out through our contact form or schedule a free consultation. We'll discuss your project requirements and provide a tailored solution.",
  "consultations": "Yes! We offer free initial consultations to understand your needs and provide strategic guidance. Book a call with our experts to discuss your project.",
  "default": "I'm here to help! You can ask me about our services, pricing, how to get started, or schedule a consultation. How can I assist you today?"
};

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage = { type: 'user' as const, content: message };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message.toLowerCase());
      const botMessage = { type: 'bot' as const, content: botResponse };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const getBotResponse = (message: string): string => {
    if (message.includes('service')) return chatbotResponses.services;
    if (message.includes('pric') || message.includes('cost')) return chatbotResponses.pricing;
    if (message.includes('start') || message.includes('begin')) return chatbotResponses.started;
    if (message.includes('consult') || message.includes('meeting')) return chatbotResponses.consultations;
    return chatbotResponses.default;
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-full shadow-neon hover:shadow-neon-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white">
              <div className="flex items-center space-x-2">
                <SparklesIcon className="w-5 h-5" />
                <span className="font-semibold">5X AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-64">
              {messages.length === 0 ? (
                <div className="text-center text-gray-600">
                  <p className="text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Quick Responses */}
            {messages.length === 0 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Quick responses:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="p-2 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-lg hover:shadow-neon transition-all duration-200"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}