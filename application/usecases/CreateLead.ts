// application/usecases/CreateLead.ts
import type { ILeadRepository } from "@/domain/repositories/ILeadRepository";
import { normalizePhone } from "@/domain/value-objects/Phone";
import { PIPELINE as LEAD_STATUSES } from "@/constants/statuses"; // ✅ shu joyda bo‘lishi kerak
import { LeadDTO } from "../dto/LeadDTO";

export class CreateLead {
    constructor(private repo: ILeadRepository) {}
    async exec(input: { fullName: string; phone: string; source?: string; note?: string; }): Promise<LeadDTO> {
    const phone = normalizePhone(input.phone);
    const status = LEAD_STATUSES[0];
    const lead = await this.repo.create({ fullName: input.fullName, phone, source: input.source ?? "unknown", status, note: input.note });
    return lead;
    }
    }