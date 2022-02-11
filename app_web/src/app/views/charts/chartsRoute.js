import React, { lazy } from 'react';
import Loadable from 'app/components/Loadable/Loadable';

const AppEchart = Loadable(lazy(() => import("./echarts/AppEchart")));

const charsRoute = [
    {
        path: '/charts/echarts',
        element: <AppEchart />,
    },
]

export default charsRoute;
