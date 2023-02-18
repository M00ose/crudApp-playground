import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    summary: string,
    program: string,
    grantAmount: number | undefined,
    grantType: string,
    fundingCycle: string,
    applicationProcess: string,
    deadline: Date,
    location: string,
    website: string,
    email: string,
    logo: string,
    stage: string,
    priority: string,
}

export interface ProspectCardProps {
  id?: BaseKey | undefined;
  title: string,
  program: string,
  grantAmount: number | undefined,
  deadline: Date,
  logo: string,
  stage: string,
  priority: string,
}
