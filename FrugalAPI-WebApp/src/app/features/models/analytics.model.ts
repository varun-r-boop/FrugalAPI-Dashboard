export interface ApiAnalytics {
    _id: string;
    projectId: string;
    customerEndpoint: string;
    openaiEndpoint: string;
    model: string;
    prompt: string;
    response: any;
    promptTokens: number;
    responseTokens: number;
    totalTokens: number;
    costUSD: number;
    createdAt: Date;
    durationMs: number;
    status: number;
  }
  
  export interface AnalyticsSummary {
    totalApiCalls: number;
    totalTokens: number;
    totalCost: number;
    dailyMetrics: DailyMetric[];
    modelDistribution: ModelDistribution[];
  }
  
  export interface DailyMetric {
    date: Date;
    cost: number;
    tokens: number;
    duration: number;
  }
  
  export interface ModelDistribution {
    model: string;
    count: number;
    percentage: number;
  }

  export interface EndpointAnalytics {
    avgCostUSDPerWeek: Float32Array,
    avgTotalTokensPerWeek: number,
    customerEndpoint: string,
    topPrompt: string
  }