import { Status } from '../value-objects/band-status';
import { Label, PartialLabel } from './label';
import { Lineup } from './member';

export type Band = {
  name: string;
  creationDate: number;
  currentLineup?: Lineup;
  discography: PartialRelease[];
  countryOrigin: string;
  location: string;
  status: Status;
  themes: string[];
  label: Label | 'Independant';
};

export type Release = Album | Split | Demo | Compilation;

export type PartialRelease = Partial<Release>;

export type Album = {
  name: string;
  releaseDate: number;
  label: PartialLabel;
};

export type Split = {
  bands: Band[];
  name: string;
  releaseDate: number;
  label: Label;
};

export type Demo = Album;

export type Compilation = Album;
