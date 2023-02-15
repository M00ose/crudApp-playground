import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    note: string,
    programArea: string,
    location: string,
    grantAmount: number | undefined,
}

export interface ProspectCardProps {
  id?: BaseKey | undefined;
  title: string;
  location: string;
  grantAmount: string;
  photo: string;
}
