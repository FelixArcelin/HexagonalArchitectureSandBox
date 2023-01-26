import { Label } from 'src/domain/entities/label';

export interface LabelRepository {
  getAllLabels(): Label[];
  getLabelByName(LabelName: string): Label;
  createLabel(createLabelDto): void;
  updateLabel(LabelToUptate, updatedLabel): void;
  deleteLabel(LabelName): void;
  publishRelease(releaseName): void;
}
