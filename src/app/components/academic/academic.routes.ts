import { Routes } from "@angular/router";
import { Studentlist } from "./student/studentlist/studentlist";
import { AddStudent } from "./student/add-student/add-student";
import { ViewStudent } from "./student/view-student/view-student";

export const ACADEMIC_ROUTES: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },

    {
        path: 'students',
        children: [
            {
                path: 'list', component: Studentlist
            },
            { path: 'add', component: AddStudent },
             { path: ':id', component: ViewStudent }
        ]
    },
]