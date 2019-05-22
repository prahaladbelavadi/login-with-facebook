import { RouterModule, Routes } from "@angular/router"
import { NgModule, Component } from "@angular/core";

import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
   path: '', Component: LoginComponent 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})


export class AppRoutingModule { }