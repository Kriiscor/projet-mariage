import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const aiApi = axios.create({
  baseURL: `${API_URL}/ai`,
});

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export const sendChatMessage = async (message: string): Promise<ChatResponse> => {
  const res = await aiApi.post<{ success: boolean; data: { reply: string } }>('/chat', { message });
  return { reply: res.data.data.reply };
};

