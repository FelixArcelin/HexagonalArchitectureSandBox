import { Band } from 'src/domain/entities/band';

export interface BandRepository {
  getAllBands(): Band[];
  getBandByName(bandName: string): Band;
  createBand(createbandDto): Promise<void>;
  updateBand(bandToUptate, updatedBand): void;
  deleteBand(bandName): void;
}
