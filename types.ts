
export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export interface CurrentInteraction {
    topic: string;
    modifiers: { mod: string }[];
}

export interface GeminiBotResponse {
    thought: string;
    move1: string;
    move2?: string;
    move3?: string;
    response: string;
    currentInteraction: CurrentInteraction[];
}
