// discharge types

export interface BioData {
  name?: string;
  age?: string;
  sex?: string;
  weight?: string;
  MRDNumber?: string;
}

export interface DateTime {
  date?: string;
  time?: string;
}

export interface DischargeSummaryValues {
  title: string;
  content: string;
  isList: boolean;
}

export interface DischargeSummary {
  patientAllergicTo?: string;
  mlc?: 'Yes' | 'No';
  department?: string;
  admission?: string;
  discharge?: string;
  surgery?: string;
  summaryValues?: any;
}

export interface Discharge {
  bioData?: BioData;
  dischargeSummary?: DischargeSummary;
}
