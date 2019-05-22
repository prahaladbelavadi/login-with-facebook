import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})


export class AppRoutingModule { }