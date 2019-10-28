import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes:Routes = [
 {
   path:'tabs',
   component:TabsPage,
   children:[
    {
        path:'home',
        children:[
          {
           path:'',
           loadChildren:()=>
           import('../home/home.module').then(m=>m.HomePageModule)
          }
     ]
    },
    {
        path:'home2',
        children:[
          {
            path:'',
            loadChildren:()=>
            import('../home2/home2.module').then(m=>m.Home2PageModule)
          }
        ]
    },
    {
        path:'home3',
        children:[
          {
            path:'',
            loadChildren:()=>
            import('../home3/home3.module').then(m=>m.Home3PageModule)
          }
        ]
    }
   ]
 },
 {
     path:'',
     redirectTo:'/tabs/home',
     pathMatch:'full'
 }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsPageRoutingModule {}