export interface UsageProvider {
  canSummarize(userId: string | null): Promise<boolean>;
  recordUsage(userId: string | null): Promise<void>;
}

export class InMemoryUsageProvider implements UsageProvider {
  async canSummarize(userId: string | null): Promise<boolean> {
    // Placeholder: allow all for now
    return true;
  }

  async recordUsage(userId: string | null): Promise<void> {
    // Placeholder
  }
}
