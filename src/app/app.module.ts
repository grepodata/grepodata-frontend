import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FlexLayoutModule } from '@angular/flex-layout';

import { RecaptchaModule } from 'ng-recaptcha';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Routes } from '@angular/router';

import {
    AppComponent,
    WorldNamePipe,
    DiffFilter,
    DiffFilterNonZero,
    NumberFilter,
    Datex,
    ValuesPipe,
    IndexDate,
} from './app.component';
import { HeaderComponent, ContactDialog } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import {
    ScoreboardComponent,
    BBScoreboardDialog,
    OverviewDialog,
    PlayerOverviewDialog,
    AllianceOverviewDialog,
} from './scoreboard/scoreboard.component';
import { PlayerComponent, TownDialog } from './player/player.component';
import { AllianceComponent } from './alliance/alliance.component';
import { AdvertorialComponent } from './advertorial/advertorial.component';
import { RankingComponent } from './ranking/ranking.component';
import {
    BBDialog,
    HideNoLossPipe,
    BBLossPipe,
    UnitIconPipe,
} from './indexer/utils';
import { FooterComponent, DisclaimerDialog } from './footer/footer.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IndexTownComponent } from './indexer/town/town.component';
import { IndexPlayerComponent } from './indexer/player/player.component';
import { IndexAllianceComponent } from './indexer/alliance/alliance.component';
import { IndexSearchComponent } from './indexer/search/search.component';
import { ActionComponent } from './indexer/action/action.component';
import { ConquestComponent } from './conquest/conquest.component';
import { GoogleAnalyticsEventsService } from './services/google-analytics-events.service';
import { CompareComponent } from './compare/compare.component';
import { CompareSnackbar } from './compare/compare.service';
import { MessageComponent } from './message/message.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { AllianceChangeComponent } from './alliance-change/alliance-change.component';

import { Globals } from './globals';
import { PrivacyComponent } from './privacy/privacy.component';
import { IndexVersionComponent } from './index-version/index-version.component';
import { DiscordComponent } from './discord/discord.component';
import { FaqComponent } from './faq/faq.component';
import { DonatedComponent } from './donated/donated.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ConquestDialog } from './conquest/conquest.service';
import { UnitModule } from './advertorial/unit/unit.module';
import { TableComponent } from './indexer/table/table.component';
import { AnalyticsComponent } from './indexer/analytics/analytics.component';
import { SiegeComponent } from './indexer/siege/siege.component';
import { ConquestReportDialog, SiegeListDialog } from './indexer/siege/siege.service';
import { IntelComponent } from './auth/profile/components/intel/intel.component';
import { IndexesComponent } from './auth/profile/components/indexes/indexes.component';
import { LinkedAccountsComponent } from './auth/profile/components/linked-accounts/linked-accounts.component';
import { SettingsComponent } from './auth/profile/components/settings/settings.component';
import { DeleteAccountComponent } from './auth/profile/components/delete-account/delete-account.component';
import { ChangePasswordComponent } from './auth/profile/components/change-password/change-password.component';
import { UserscriptComponent } from './auth/profile/components/userscript/userscript.component';
import { AlertComponent } from './layout/alert/alert.component';
import { PaperComponent } from './layout/paper/paper.component';
import { BadgeComponent } from './layout/badge/badge.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { SharedModule } from './shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import 'zone.js/dist/zone';
import { Blog2020Component } from './blog/blog2020/blog2020.component';
import {MailListDialog} from './alliance/alliance.service';
import {BasicDialog} from './shared/dialogs/basic/basic.component';
import {NewIndexDialog} from './shared/dialogs/new-index/new-index.component';
import {IndexSettingsDialog} from './shared/dialogs/index-settings/index-settings.component';
import {IndexMembersDialog} from './shared/dialogs/index-members/index-members.component';
import {ShareIndexDialog} from './shared/dialogs/share-index/share-index.component';
import { ShareComponent } from './indexer/settings/share/share.component';
import { LandingPageComponent } from './indexer/landing-page/landing-page.component';
import { OverviewComponent } from './indexer/overview/overview.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'link/:uid', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/:activetab', component: ProfileComponent },
    { path: 'profile/:activetab/:key', component: ProfileComponent },
    { path: 'intel/:activetab/:world/:id', component: ProfileComponent },
    { path: 'intel/:activetab/:key/:world/:id', component: ProfileComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'points/:world/:date', component: ScoreboardComponent },
    { path: 'points/:world', component: ScoreboardComponent },
    { path: 'm/:world', component: ScoreboardComponent },
    { path: 'points', component: ScoreboardComponent },
    // { path: 'world/:world', component: WorldComponent },
    { path: 'ranking/:type/:world/:sort/:offset/:highlight', component: RankingComponent },
    { path: 'ranking/:type/:world/:sort/:offset', component: RankingComponent },
    { path: 'ranking/:type/:world/:sort', component: RankingComponent },
    { path: 'ranking/:type/:world', component: RankingComponent },
    { path: 'ranking/:world', component: RankingComponent },
    { path: 'ranking', component: RankingComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'message', component: MessageComponent },
    { path: 'donated', component: DonatedComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'changelog', component: ChangelogComponent },
    { path: 'compare/:type/:world', component: CompareComponent },
    { path: 'analytics', component: AnalyticsComponent },
    // TODO: catch these old routes and implement import V1 logic
    { path: 'indexer/player/:key/:world/:id', redirectTo: 'profile/player/:world/:id' }, // TODO: reroute to CatchV2
    { path: 'indexer/alliance/:key/:world/:id', redirectTo: 'profile/alliance/:world/:id' }, // TODO: reroute to CatchV2
    { path: 'indexer/town/:key/:world/:id', redirectTo: 'profile/town/:world/:id' }, // TODO: reroute to CatchV2
    { path: 'indexer/action/:token', component: ActionComponent },  // Deprecated
    { path: 'indexer/:key', redirectTo: 'profile/overview/:key' }, // TODO: reroute to CatchV2
    // { path: 'indexer', redirectTo: 'profile/overview' },
    { path: 'indexer', component: LandingPageComponent },
    { path: 'siege/:id/:key', component: SiegeComponent },
    { path: 'siege/:uid', component: SiegeComponent },
    { path: 'player/:world/:id', component: PlayerComponent },
    { path: 'player', component: PlayerComponent },
    { path: 'alliance/:world/:id', component: AllianceComponent },
    { path: 'alliance', component: AllianceComponent },
    { path: 'conquest/:type/:world/:id', component: ConquestComponent },
    { path: 'changes/:type/:world/:id', component: AllianceChangeComponent },
    { path: 'blog/heatmap-and-indexer-changes-2020', component: Blog2020Component },
    { path: 'conquest', component: ConquestComponent },
    { path: 'discord', component: DiscordComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'test', component: ContentComponent },
    { path: '', component: ContentComponent },
    { path: '**', component: ContentComponent },
];

export function jwtTokenGetter(): any {
    return localStorage.getItem('access_token');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        SearchComponent,
        ScoreboardComponent,
        BBScoreboardDialog,
        OverviewDialog,
        PlayerOverviewDialog,
        ConquestDialog,
        AllianceOverviewDialog,
        PlayerComponent,
        AllianceComponent,
        AdvertorialComponent,
        BasicDialog,
        TownDialog,
        DisclaimerDialog,
        ContactDialog,
        BBDialog,
        NewIndexDialog,
        IndexSettingsDialog,
        IndexMembersDialog,
        ShareIndexDialog,
        ConquestReportDialog,
        SiegeListDialog,
        MailListDialog,
        WorldNamePipe,
        DiffFilterNonZero,
        DiffFilter,
        NumberFilter,
        Datex,
        IndexDate,
        ValuesPipe,
        HideNoLossPipe,
        BBLossPipe,
        UnitIconPipe,
        RankingComponent,
        FooterComponent,
        IndexTownComponent,
        IndexPlayerComponent,
        IndexAllianceComponent,
        IndexSearchComponent,
        ActionComponent,
        ConquestComponent,
        CompareComponent,
        CompareSnackbar,
        MessageComponent,
        ChangelogComponent,
        AllianceChangeComponent,
        PrivacyComponent,
        IndexVersionComponent,
        DiscordComponent,
        FaqComponent,
        DonatedComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        ForgotComponent,
        TableComponent,
        AnalyticsComponent,
        IntelComponent,
        SiegeComponent,
        IndexesComponent,
        SettingsComponent,
        LinkedAccountsComponent,
        DeleteAccountComponent,
        ChangePasswordComponent,
        UserscriptComponent,
        AlertComponent,
        BadgeComponent,
        PaperComponent,
        SidebarComponent,
        Blog2020Component,
        ShareComponent,
        LandingPageComponent,
        OverviewComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MatChipsModule,
        MatPaginatorModule,
        FlexLayoutModule,
        MatTabsModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        MatCardModule,
        MatListModule,
        MatDatepickerModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        RecaptchaModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        HttpClientJsonpModule,
        UnitModule,
        ShareButtonsModule,
        SharedModule,
        MatMenuModule,
        MatSidenavModule,
    ],
    providers: [GoogleAnalyticsEventsService, Globals],
    bootstrap: [AppComponent],
    entryComponents: [
        BasicDialog,
        TownDialog,
        DisclaimerDialog,
        ContactDialog,
        NewIndexDialog,
        IndexSettingsDialog,
        IndexMembersDialog,
        ShareIndexDialog,
        BBDialog,
        ConquestReportDialog,
        BBScoreboardDialog,
        OverviewDialog,
        ConquestDialog,
        SiegeListDialog,
        MailListDialog,
        PlayerOverviewDialog,
        AllianceOverviewDialog,
        CompareSnackbar,
    ],
})
export class AppModule {}
