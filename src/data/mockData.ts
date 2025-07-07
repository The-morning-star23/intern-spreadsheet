export type JobData = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

export const mockData: JobData[] = [
  {
    id: 1,
    jobRequest: "Design Landing Page",
    submitted: "01-07-2024",
    status: "In Progress",
    submitter: "Jane Doe",
    url: "https://example.com/landing",
    assigned: "John",
    priority: "High",
    dueDate: "10-07-2024",
    estValue: "Rs 30,000",
  },
  {
    id: 2,
    jobRequest: "Update Pricing Table",
    submitted: "03-07-2024",
    status: "Need to start",
    submitter: "Bob Smith",
    url: "https://example.com/pricing",
    assigned: "Alice",
    priority: "High",
    dueDate: "15-07-2024",
    estValue: "Rs 43,000",
  },
  {
    id: 3,
    jobRequest: "Prepare sales report",
    submitted: "03-01-2025",
    status: "Blocked",
    submitter: "Sumit Patel",
    url: "https://example.com/pricing",
    assigned: "Amit Rai",
    priority: "Low",
    dueDate: "10-01-2025",
    estValue: "RS 1,00,000",
  },
  {
    id: 4,
    jobRequest: "Prepare financal report for Q4",
    submitted: "20-01-2025",
    status: "In progress",
    submitter: "Alex Rider",
    url: "https://example.com/financial",
    assigned: "Christian",
    priority: "Medium",
    dueDate: "26-01-2025",
    estValue: "RS 60,00,000",
  },
  {
    id: 5,
    jobRequest: "Design new features for website",
    submitted: "10-02-2025",
    status: "complete",
    submitter: "Lyra Green",
    url: "https://example.com/features",
    assigned: "Tom Smith",
    priority: "Low",
    dueDate: "17-01-2025",
    estValue: "RS 48,50,000",
  },
];
