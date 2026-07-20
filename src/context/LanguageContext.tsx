import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string, defaultValue: string) => string;
  language: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string, defaultValue: string): string => {
    // Simple i18n implementation
    const translations: { [key: string]: { [lang: string]: string } } = {
      welcome_back: { en: 'Welcome back', es: 'Bienvenido de vuelta' },
      all_shipments_title: { en: 'All Shipments', es: 'Todos los Envíos' },
      shipment_tracking_title: { en: 'Shipment Tracking', es: 'Seguimiento de Envío' },
      maersk_ai: { en: 'AI Assistant', es: 'Asistente de IA' },
      rule_engine: { en: 'Rule Engine', es: 'Motor de Reglas' },
      dashboard_desc: { en: 'Your logistics overview for today as a', es: 'Tu visión general de logística para hoy como' },
      agent: { en: 'Agent', es: 'Agente' },
      customer: { en: 'Customer', es: 'Cliente' },
      shipments_desc: { en: 'Manage and monitor your ongoing bookings.', es: 'Gestiona y monitorea tus reservas actuales.' },
      tracking_desc: { en: 'Detailed status for', es: 'Estado detallado para' },
      assistant_desc: { en: 'AI-powered support for your supply chain.', es: 'Soporte impulsado por IA para tu cadena de suministro.' },
      rules_desc: { en: 'Design and deploy automated logistics rules.', es: 'Diseña e implementa reglas de logística automatizadas.' },
      active_profile: { en: 'Active Profile', es: 'Perfil Activo' },
    };

    const key_translations = translations[key];
    if (key_translations) {
      return key_translations['en'] || defaultValue;
    }
    return defaultValue;
  };

  return (
    <LanguageContext.Provider value={{ t, language: 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
