import { Schema, model, models, type Document } from "mongoose";

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
  },
  { timestamps: true }
);

export const TargetLeadModel =
  models.TargetLead || model<ITargetLead>("TargetLead", TargetLeadSchema);
