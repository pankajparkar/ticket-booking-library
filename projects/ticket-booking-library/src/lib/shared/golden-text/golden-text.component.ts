import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'bmc-golden-text',
  templateUrl: './golden-text.component.html',
  styleUrls: ['./golden-text.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoldenTextComponent {

  @Input() text!: string;
  @Input() label!: string;

}
