export const PIPELINE = [
  "LID",
  "KO'TARMADI",
  "O'YLAB KO'RAMAN",
  "KEYIN TEL QILING",
  "O'QIYMAN",
  "TO'LOV QILDI",
  "KEYINGI OY",
  "O'QIMAYDI",
] as const;

export const LEAD_STATUSES = PIPELINE; // orqaga moslik
export type PipelineStatus = typeof PIPELINE[number];
