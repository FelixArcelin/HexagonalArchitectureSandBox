import { Injectable } from '@nestjs/common';
import { Label } from 'src/domain/entities/label';
import { LabelRepository } from 'src/infrastructure/ports/label.repository';

@Injectable()
export class FakeLabelRepository implements LabelRepository {
  labels: Label[]

  getAllLabels(): Label[] {
    return this.labels;
  }

  getLabelByName(labelName: string): Label {
    return this.labels.find((label) => label.name == labelName)
  }

  createLabel(createLabelDto: Label): void {
    if (!this.labels.find((label) => label == createLabelDto)) {
      this.labels.push(createLabelDto)
    }
  }

  updateLabel(labelToUptate: Label, updatedLabel: Label): void {
    const newLabels = this.labels.filter((label) => label == labelToUptate)
    newLabels.push(updatedLabel)
    this.labels = newLabels;
  }

  deleteLabel(LabelName: any): void {
    this.labels = this.labels.filter((label) => label.name == LabelName)
  }
}
