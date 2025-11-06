// models/Lead.ts
import { Schema, model, models } from "mongoose";
import { PIPELINE } from "@/constants/statuses";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone:    { type: String, required: true, index: true },
    source:   { type: String, default: "unknown" },
    status:   {
      type: String,
      enum: Array.from(PIPELINE) as string[], // ✅ "LID" ham shu yerda bor
      default: "LID",
      required: true,
    },
    note:     { type: String },
  },
  { timestamps: true }
);

// Hot-reloadda model qayta e’lon qilinmasin
export const LeadModel = models.Lead || model("Lead", LeadSchema);
