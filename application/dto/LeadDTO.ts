import type { Lead } from "@/domain/entities/Lead";
export type LeadDTO = Pick<Lead, "id" | "fullName" | "phone" | "source" | "status" | "note" | "createdAt" | "updatedAt">;