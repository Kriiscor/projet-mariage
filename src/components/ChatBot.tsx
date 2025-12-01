import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendChatMessage } from '../services/aiService';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mutation = useMutation({
    mutationFn: (text: string) => sendChatMessage(text),
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', content: data.reply },
      ]);
    },
  });

  const canSend = useMemo(
    () => input.trim().length > 0 && !mutation.isPending,
    [input, mutation.isPending]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', content: text }]);
    setInput('');
    mutation.mutate(text);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-[420px] flex-col rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-2">
        <h3 className="text-base font-semibold text-gray-800">Assistant IA</h3>
        <p className="mt-1 text-xs text-gray-500">
          Posez des questions sur les invités, menus, hébergement…
        </p>
      </div>

      <div ref={containerRef} className="flex-1 space-y-2 overflow-y-auto p-2">
        {messages.length === 0 ? (
          <div className="text-center text-sm text-gray-500">
            Démarrez la conversation en posant une question.
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
            >
              <div
                className={
                  'max-w-[75%] whitespace-pre-wrap rounded-md px-2 py-1 text-xs shadow ' +
                  (m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800')
                }
              >
                {m.content}
              </div>
            </div>
          ))
        )}
        {mutation.isPending && (
          <div className="flex justify-start">
            <div className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 shadow">
              Réflexion…
            </div>
          </div>
        )}
        {mutation.isError && (
          <div className="flex justify-start">
            <div className="rounded-md bg-red-50 px-2 py-1 text-xs text-red-700 shadow">
              Erreur lors de la requête.
            </div>
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="flex gap-2 border-t border-gray-200 p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Combien participent au dîner ?"
          className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!canSend}
          className="rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
