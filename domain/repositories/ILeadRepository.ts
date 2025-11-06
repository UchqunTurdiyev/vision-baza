import type { Lead } from "@/domain/entities/Lead";
import type { LeadStatus } from "@/constants/statuses";


export interface ILeadRepository {
create(data: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead>;
list(query?: { status?: LeadStatus; search?: string }): Promise<Lead[]>;
updateStatus(id: string, status: LeadStatus): Promise<Lead>;
delete(id: string): Promise<void>;
}