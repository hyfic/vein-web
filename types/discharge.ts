// discharge types

export interface DischargeHeader {
  image?: string;
  text?: string;
}

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
}

export interface DischargeSummary {
  patientAllergicTo?: string;
  mlc?: 'Yes' | 'No';
  department?: string;
  admission?: DateTime;
  discharge?: DateTime;
  surgery?: DateTime;
  summaryValues?: any;
}

export interface Discharge {
  header?: DischargeHeader;
  bioData?: BioData;
  dischargeSummary?: DischargeSummary;
}
