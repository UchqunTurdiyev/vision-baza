import { Schema, model, models } from "mongoose";

const LeadSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone:    { type: String, required: true, index: true },
    source:   { type: String, default: "unknown" },
    status:   { type: String, default: "LID" }, // muhim
    note:     { type: String },
  },
  { timestamps: true }
);

export const LeadModel = models.Lead || model("Lead", LeadSchema);
