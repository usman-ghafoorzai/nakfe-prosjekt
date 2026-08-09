export type DonationFieldContent = {
  id: string;
  label: string;
  value: string;
};

export type DonationContent = {
  title: string;
  introduction: string;
  fields: DonationFieldContent[];
  closeLabel: string;
};
