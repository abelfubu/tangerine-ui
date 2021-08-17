import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core'
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tng-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find((tab) => tab.selected)
    if (!selectedTab) {
      this.tabs.first.selected = true
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach((item) => {
      item.selected = false
    })
    tab.selected = true
  }
}
