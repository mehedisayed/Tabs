import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export interface Tab{
  Title: string;
  Url: SafeResourceUrl;
  Select: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: Tab[];
  selectedIndex = 0;
  constructor(private sanitizer: DomSanitizer, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.tabs = [ { Title: 'Dashboard', Url: this.sanitizer.bypassSecurityTrustResourceUrl('/dashboard'), Select: true}];
  }
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  closeTab(event): void{
    this.tabs[0].Select = true;
    this.tabs.splice(event.index, 1);
    this.tabs = [...this.tabs];
  }
  addTab(title: string, url: string): void{
    const tab = { Title: title, Url: this.sanitizer.bypassSecurityTrustResourceUrl(url), Select: true};
    if (this.tabs.find(t => t.Title === tab.Title) === undefined)
    {
      this.tabs.push(tab);
      this.selectedIndex = this.tabs.length - 1;
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.tabs.length; i++)
    {
      if (this.tabs[i].Title !== tab.Title)
      {
        this.tabs[i].Select = false;
      }
      else
      {
        this.tabs[i].Select = true;
        this.selectedIndex = i;
      }
    }
  }

}
