import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal bootstrap component
 * @param {NgbModal} modalService
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  // modal template
  @ViewChild('content') content!: TemplateRef<any>;
  // title modal
  @Input() title!: string;
  @Input() noBtn: boolean = false;
  @Input() size: 'sm' | 'lg' | 'xl' | 'none' = 'none';
  @Input() idBody: string | null = null;
  @Input() scrollable: boolean = true;
  @Output() onClose = new EventEmitter<void>();
  modalRef!: NgbModalRef;
  ngOnInit(): void {

  }
  /**
   * Open modal
   */
  open() {
    this.modalRef = this.modalService.open(
      this.content,
      {
        size: this.size,
        modalDialogClass: this.scrollable ?
          'modal-dialog-scrollable' :
          ''
      }
    );
  }
  /**
   * Close modal
   */
  close() {
    this.modalRef.close();
    this.onClose.emit();
  }
}
