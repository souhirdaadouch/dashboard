import { ActualiteComponent } from '@modules/frontpages/containers/actualite/actualite.component';
import { AthleSanteComponent } from '@modules/frontpages/containers/athle-sante/athle-sante.component';
import { BureaufedComponent } from '@modules/frontpages/containers/bureaufed/bureaufed.component';
import { CalendrierComponent } from '@modules/frontpages/containers/calendrier/calendrier.component';
import { CalendriermastersComponent } from '@modules/frontpages/containers/calendrier_masters/calendrier_masters.component';
import { CategorieComponent } from '@modules/frontpages/containers/categorie/categorie.component';
import { CentreformationComponent } from '@modules/frontpages/containers/centreformation/centreformation.component';
import { ClubComponent } from '@modules/frontpages/containers/club/club.component';
import { CommissionfedComponent } from '@modules/frontpages/containers/commissionfed/commissionfed.component';
import { CourseRouteComponent } from '@modules/frontpages/containers/courseRoute/courseRoute.component';
import { DocumentComponent } from '@modules/frontpages/containers/documentadmi/documentadmi.component';
import { EngagementLicenceComponent } from '@modules/frontpages/containers/engagement-licence/engagement-licence.component';
import { FormationsComponent } from '@modules/frontpages/containers/formations/formations.component';
import { HomeComponent } from '@modules/frontpages/containers/home/home.component';
import { LigueComponent } from '@modules/frontpages/containers/ligue/ligue.component';
import { ListechampionnatComponent } from '@modules/frontpages/containers/liste_championnat/liste_championnat.component';
import { ListecompetitionComponent } from '@modules/frontpages/containers/liste_competition/liste_competition.component';
import { MastersComponent } from '@modules/frontpages/containers/masters/masters.component';
import { PresentationComponent } from '@modules/frontpages/containers/presentation-fta/presentation.component';
import { RecordsComponent } from '@modules/frontpages/containers/records/records.component';
import { ResultatComponent } from '@modules/frontpages/containers/resultat/resultat.component';
import { AthleteComponent } from '@modules/frontpages/containers/athlete/athlete.component';

export const containers = [
    HomeComponent,
    ActualiteComponent,
    AthleSanteComponent,
    EngagementLicenceComponent,
    FormationsComponent,
    PresentationComponent,
    CommissionfedComponent,
    BureaufedComponent,
    LigueComponent,
    ClubComponent,
    CentreformationComponent,
    DocumentComponent,
    CalendrierComponent,
    CalendriermastersComponent,
    CategorieComponent,
    CourseRouteComponent,
    ListechampionnatComponent,
    ListecompetitionComponent,
    MastersComponent,
    RecordsComponent,
    ResultatComponent,
    AthleteComponent,
];

export * from './home/home.component';
export * from './actualite/actualite.component';
export * from './athle-sante/athle-sante.component';
export * from './engagement-licence/engagement-licence.component';
export * from './formations/formations.component';
export * from './presentation-fta/presentation.component';
export * from './commissionfed/commissionfed.component';
export * from './bureaufed/bureaufed.component';
export * from './ligue/ligue.component';
export * from './club/club.component';
export * from './centreformation/centreformation.component';
export * from './documentadmi/documentadmi.component';
export * from './calendrier/calendrier.component';
export * from './resultat/resultat.component';
export * from './records/records.component';
export * from './masters/masters.component';
export * from './liste_championnat/liste_championnat.component';
export * from './liste_competition/liste_competition.component';
export * from './calendrier_masters/calendrier_masters.component';
export * from './categorie/categorie.component';
export * from './courseRoute/courseRoute.component';
export * from './athlete/athlete.component';
