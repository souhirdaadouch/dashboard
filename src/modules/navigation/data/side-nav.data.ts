import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
            {
                text: 'MAJ_Pages',
                submenu: [
                    {
                        text: 'Home',
                        link: '/frontpages/home',
                    },
                    {
                        text: 'FTA',
                        submenu: [
                            {
                                text: 'Présentation',
                                link: '/frontpages/presentation',
                            },
                            {
                                text: 'Commission Fédérale',
                                link: '/frontpages/commissionfed',
                            },
                            {
                                text: 'Bureau Fédéral',
                                link: '/frontpages/bureaufed',
                            },
                            {
                                text: 'Ligue',
                                link: '/frontpages/ligue',
                            },
                            {
                                text: 'Centre de Formation',
                                link: '/frontpages/centreformation',
                            },
                            {
                                text: 'Club',
                                link: '/frontpages/club',
                            },
                            {
                                text: 'Documents Administratif',
                                link: '/frontpages/document',
                            },
                        ],
                    },
                    {
                        text: 'competition',
                        submenu: [
                            {
                                text: 'liste competitions',
                                link: 'frontpages/competition/liste_competition',
                            },
                            {
                                text: 'liste_championnat',
                                link: 'frontpages/competition/liste_championnat',
                            },
                            {
                                text: 'calendrier',
                                link: 'frontpages/competition/calendrier',
                            },
                            {
                                text: 'calendriermasters',
                                link: 'frontpages/competition/calendriermasters',
                            },
                            {
                                text: 'categorie',
                                link: 'frontpages/competition/categorie',
                            },
                            {
                                text: 'courseRoute',
                                link: 'frontpages/competition/courseRoute',
                            },
                            {
                                text: 'masters',
                                link: 'frontpages/competition/masters',
                            },
                            {
                                text: 'records',
                                link: 'frontpages/competition/records',
                            },
                            {
                                text: 'resultat',
                                link: 'frontpages/competition/resultat',
                            },
                        ],
                    },
                    {
                        text: 'engagement-licence',
                        link: '/frontpages/engagement-licence',
                    },
                    {
                        text: 'formation',
                        link: '/frontpages/formation',
                    },
                    {
                        text: 'actualite',
                        link: '/frontpages/actualite',
                    },
                    {
                        text: 'athle-sante',
                        link: '/frontpages/athle-sante',
                    },
                    {
                        text: 'Athlete',
                        link: '/frontpages/athlete',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
