import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from './tabs.router.module';//追加
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    TabsPageRoutingModule//追加
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
