import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import { ExportReport, SummaryReport } from './containers';

const AsyncVolumeAndResponseReport = asyncComponent(() =>
  import('./containers/VolumeAndResponseReport')
);

const AsyncFirstAndCloseResponseReport = asyncComponent(() =>
  import('./containers/FirstAndCloseResponseReport')
);

const AsyncReports = asyncComponent(() => import('./containers/Reports'));

const AsyncInsightPage = asyncComponent(() =>
  import('./components/InsightPage')
);

const responseReport = () => {
  return (
    <AsyncReports type="response" component={AsyncVolumeAndResponseReport} />
  );
};

const responseCloseReport = () => {
  return (
    <AsyncReports type="close" component={AsyncFirstAndCloseResponseReport} />
  );
};

const firstResponse = () => {
  return (
    <AsyncReports type="first" component={AsyncFirstAndCloseResponseReport} />
  );
};

const volumeReport = () => {
  return (
    <AsyncReports type="volume" component={AsyncVolumeAndResponseReport} />
  );
};

const summaryReport = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <SummaryReport queryParams={queryParams} history={history} />;
};

const exportReport = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <ExportReport queryParams={queryParams} history={history} />;
};

const routes = () => {
  return (
    <React.Fragment>
      <Route
        key="/insights/response-report"
        exact={true}
        path="/insights/response-report"
        component={responseReport}
      />

      <Route
        key="/insights/response-close-report"
        exact={true}
        path="/insights/response-close-report"
        component={responseCloseReport}
      />

      <Route
        key="/insights/first-response"
        exact={true}
        path="/insights/first-response"
        component={firstResponse}
      />

      <Route
        key="/insights/volume-report"
        exact={true}
        path="/insights/volume-report"
        component={volumeReport}
      />

      <Route
        key="/insights"
        exact={true}
        path="/insights"
        component={AsyncInsightPage}
      />

      <Route
        key="/insights/summary-report"
        exact={true}
        path="/insights/summary-report"
        component={summaryReport}
      />

      <Route
        key="/insights/export-report"
        exact={true}
        path="/insights/export-report"
        component={exportReport}
      />
    </React.Fragment>
  );
};

export default routes;
