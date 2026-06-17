import { Schema, model, models, type Document } from "mongoose";

// Janob, interface nomi ITargetLead bo'lishi shart
export interface ITargetLead extends Document {
  fullName: string;
  phone: string;
  source: string;
  status: string;
  note?: string;
  flagged?: boolean;
  comments?: { text: string; createdAt: Date }[];
  businessType?: string;
  socialPage?: string;
  budget?: string;
  email?: string;
  // Meta (Facebook/Instagram) match identifikatorlari — CAPI uchun
  fbp?: string;              // _fbp cookie (browser id)
  fbc?: string;              // _fbc cookie (click id)
  fbLoginId?: string;        // Facebook login user id  -> CAPI: fb_login_id
  pageId?: string;           // FB sahifa id            -> CAPI: page_id
  pageScopedUserId?: string; // FB/IG DM page-scoped id -> CAPI: page_scoped_user_id (instagram/facebook id)
  igUsername?: string;       // Instagram username (faqat ma'lumot uchun)
  createdAt?: Date;
  updatedAt?: Date;
}

const TargetLeadSchema = new Schema<ITargetLead>(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    source: { type: String, default: "target-landing" },
    status: { type: String, default: "LID" },
    note: { type: String, default: "" },
    flagged: { type: Boolean, default: false },
    comments: [
      {
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    businessType: { type: String, default: "" },
    socialPage: { type: String, default: "" },
    budget: { type: String, default: "" },
    email: { type: String, default: "" },
    fbp: { type: String, default: "" },
    fbc: { type: String, default: "" },
    fbLoginId: { type: String, default: "" },
    pageId: { type: String, default: "" },
    pageScopedUserId: { type: String, default: "" },
    igUsername: { type: String, default: "" },
  },
  { timestamps: true }
);

export const TargetLeadModel =
  models.TargetLead || model<ITargetLead>("TargetLead", TargetLeadSchema);