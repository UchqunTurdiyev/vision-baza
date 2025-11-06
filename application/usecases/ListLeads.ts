import type { ILeadRepository } from "@/domain/repositories/ILeadRepository";
import type { LeadStatus } from "@/constants/statuses";


export class ListLeads {
constructor(private repo: ILeadRepository) {}
async exec(filter?: { status?: LeadStatus; search?: string }) {
return this.repo.list(filter);
}
}