import { LeadModel } from "@/models/Lead";
import type { ILeadRepository, ListParams } from "@/domain/repositories/ILeadRepository";
import { LEAD_STATUSES, LeadStatus } from "@/constants/statuses";
import Lead from "@/domain/entities/Lead";

export class MongoLeadRepository implements ILeadRepository {
  list(params?: ListParams): Promise<Lead[]> {
      throw new Error("Method not implemented.");
  }
  updateStatus(id: string, status: LeadStatus): Promise<Lead> {
      throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
      throw new Error("Method not implemented.");
  }
  addComment(id: string, comment: { text: string; author?: string; }): Promise<void> {
      throw new Error("Method not implemented.");
  }
  async create(data: {
    fullName: string;
    phone: string;
    source?: string;
    note?: string;
    status?: (typeof LEAD_STATUSES)[number];  // tip mos
  }) {
    const doc = await LeadModel.create({
      fullName: data.fullName,
      phone: data.phone,
      source: data.source ?? "unknown",
      note: data.note ?? "",
      status: data.status ?? LEAD_STATUSES[0], // ✅ default: "LID"
    });

    return {
      id: String(doc._id),
      fullName: doc.fullName,
      phone: doc.phone,
      source: doc.source,
      note: doc.note,
      status: doc.status,
      createdAt: doc.createdAt ?? null,
      updatedAt: doc.updatedAt ?? null,
      comments: doc.comments ?? [],
    };
  }

  // ... qolgan metodlar o‘zgarishsiz
}
