import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes'
import { UiModule } from '@cost-control/ui'
import { HomeComponent } from './home/home.component'

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [
		BrowserModule,
		UiModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
