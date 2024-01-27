import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  @Input() list: string = "";
  
  @Input() dataNames: any[] = [];
  dialogOpen: Boolean = false;
  constructor(private dialog: MatDialog) { 
    
  }

  ngOnInit(): void { }

  addItem() {
  }

  
}
