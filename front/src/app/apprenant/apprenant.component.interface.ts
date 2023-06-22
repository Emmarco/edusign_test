export interface InterfaceApprenant {
  id: number;
  presenceState: boolean;
  delay: number;
  signatureTimestamp: string | null;
  signature: string | null;
  comment: string;
  dateCreated: string;
  dateUpdated: string;
  EDITED: boolean;
  FIRSTNAME: string;
  LASTNAME: string;
}