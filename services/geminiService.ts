import { Shipment, Rule } from '../types';

export async function applyRulesToShipments(
  shipments: Shipment[],
  rules: Rule[]
): Promise<Shipment[]> {
  // Mock implementation - in production, call actual Gemini API
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Return shipments as-is for now
    return shipments;
  } catch (error) {
    console.error('Error applying rules:', error);
    return shipments;
  }
}

export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    // In production, call actual Gemini API here
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return 'API key not configured. Please set VITE_GEMINI_API_KEY environment variable.';
    }

    // Mock response for now
    return `Response to: ${prompt}`;
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Error generating response';
  }
}
