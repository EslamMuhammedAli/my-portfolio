export type Language = 'ar' | 'en' | 'fr' | 'es' | 'de' | 'tr';

export function getLanguageFromCountry(countryCode: string): Language {
  // دول عربية
  if (['EG', 'SA', 'AE', 'KW', 'QA', 'BH', 'OM', 'JO', 'LB', 'SY', 'IQ', 'YE', 'LY', 'TN', 'DZ', 'MA', 'SD', 'PS'].includes(countryCode)) return 'ar';
  
  // دول فرنكوفونية
  if (['FR', 'BE', 'SN', 'CI', 'CM'].includes(countryCode)) return 'fr';
  
  // إسبانية
  if (['ES', 'MX', 'AR', 'CO', 'PE', 'CL', 'VE'].includes(countryCode)) return 'es';
  
  // ألمانية
  if (['DE', 'AT', 'CH'].includes(countryCode)) return 'de';
  
  // تركيا
  if (['TR'].includes(countryCode)) return 'tr';
  
  // الافتراضي
  return 'en';
}