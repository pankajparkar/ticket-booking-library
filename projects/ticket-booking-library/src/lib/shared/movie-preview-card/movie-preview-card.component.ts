import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from './../../models/movie';

@Component({
  selector: 'bmc-movie-preview-card',
  templateUrl: './movie-preview-card.component.html',
  styleUrls: ['./movie-preview-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePreviewCardComponent {

  @Input() movie!: Movie;

  @HostBinding('class.moviegrid-item')
  moviegridItem = true;

  modalRef: BsModalRef | undefined;
  previewUrl = '';

  constructor(
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
  ) { }

  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.previewUrl = previewUrl;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
