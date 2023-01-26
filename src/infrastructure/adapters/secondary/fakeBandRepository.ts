import { Injectable } from '@nestjs/common';
import { Band } from 'src/domain/entities/band';
import { BandRepository } from '../../ports/band.repository';

@Injectable()
export class FakeBandRepository implements BandRepository {
  private bands: Band[] = [
    {
      countryOrigin: 'France',
      creationDate: 1991,
      discography: [
        { name: 'Vampires of Black Imperial Blood', releaseDate: 1995 },
      ],
      location: 'Brest',
      name: 'Mutiilation',
      status: 'Split-Up',
      themes: ['Satanism', 'Vampirism', 'Depression', 'Filfth', 'Death'],
      label: 'Independant',
    },
  ];

  getBandByName(bandName: string): Band {
    return this.bands.find((band) => band.name == bandName);
  }

  createBand(createbandDto: Band): Promise<void> {
    this.bands.push(createbandDto);
    return;
  }

  getAllBands(): Band[] {
    return this.bands;
  }

  getbandName(getbandName: Band) {
    return this.bands.find((band) => band.name == getbandName.name);
  }

  updateBand(bandToUpdate: Pick<Band, 'name'>, updatedBand: Band): void {
    const bandIndex = this.bands.findIndex(
      (band) => band.name === bandToUpdate.name,
    );
    this.bands[bandIndex] = updatedBand;
  }

  deleteBand(BandToDelete: Pick<Band, 'name'>): void {
    const bands = this.bands.filter((band) => band.name === BandToDelete.name);
    this.bands = bands;
  }
}
