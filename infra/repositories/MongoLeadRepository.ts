import type { ILeadRepository } from "@/domain/repositories/ILeadRepository";
import type { LeadStatus } from "@/constants/statuses";
import { LeadModel } from "@/infra/models/Lead";


export class MongoLeadRepository implements ILeadRepository {
async create(data: any) { const d = await LeadModel.create(data); return this.toDTO(d); }
async list(query?: { status?: LeadStatus; search?: string }) {
const filter: any = {};
if (query?.status) filter.status = query.status;
if (query?.search) filter.$or = [ { fullName: { $regex: query.search, $options: "i" } }, { phone: { $regex: query.search } } ];
const docs = await LeadModel.find(filter).sort({ createdAt: -1 }).limit(200);
return docs.map(this.toDTO);
}
async updateStatus(id: string, status: LeadStatus) {
const d = await LeadModel.findByIdAndUpdate(id, { status }, { new: true });
if (!d) throw new Error("Lead not found");
return this.toDTO(d);
}
async delete(id: string) { await LeadModel.findByIdAndDelete(id); }
private toDTO(d: any) { return { id: d.id, fullName: d.fullName, phone: d.phone, source: d.source, status: d.status, note: d.note, createdAt: d.createdAt, updatedAt: d.updatedAt }; }
}