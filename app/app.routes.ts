import {RouterModule, Routes} from "@angular/router";
import {AdvocacyComponent} from "./components/advocacy-component";
import {ContactComponent} from "./components/contact-component";
import {CodingComponent} from "./components/coding-component";
import {ResumeComponent} from "./components/resume-component";
import {SplashComponent} from "./components/splash-component";
import {TeachingComponent} from "./components/teaching-component";


export const allAppComponents = [AdvocacyComponent, ContactComponent, CodingComponent, SplashComponent, ResumeComponent, TeachingComponent];

export const routes: Routes = [
	{path: "advocacy", component: AdvocacyComponent},
	{path: "coding", component: CodingComponent},
	{path: "contact", component: ContactComponent},
	{path: "resume", component: ResumeComponent},
	{path: "teaching", component: TeachingComponent},
	{path: "", component: SplashComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
