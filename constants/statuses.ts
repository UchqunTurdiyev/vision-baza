// constants/statuses.ts

// statuslar ro‘yxati (o'zingizniki bilan moslang)
export const LEAD_STATUSES = [
  "LID",
  "KO'TARMADI",
  "O'YLAB KO'RAMAN",
  "KEYIN TEL QILING",
  "O'QIYMAN",
  "TO'LOV QILDI",
  "KEYINGI OY",
] as const;

// ✅ TIP: massiv elementlaridan union type yasaymiz
export type LeadStatus = (typeof LEAD_STATUSES)[number];

// (ixtiyoriy) avval ishlatilgan bo‘lsa, moslik uchun:
export const PIPELINE = LEAD_STATUSES;

// (ixtiyoriy) tekshiruvchi helper
export function isValidLeadStatus(s: string): s is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(s);
}
