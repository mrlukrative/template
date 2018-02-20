import * as _ from 'lodash';
// import uuid from 'uuid/v4';
import {Headers} from '@angular/http';

const uuids = [
  '8600418b-4f57-4f08-8f5d-9968c1fdb946',
  'ef063f38-e37e-4fef-8cbf-e4c55aa6b89c'
];

export const getJsonResponseData = response => response.json().data;

export const getHeadersWithAuth = () => new Headers({
  'Content-Type': 'application/vnd.api+json',
  Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
});

export const handleGetMessagesResponse = messages =>
  _.chain(messages)
    .forEach(injectMetricIds)
    .value();

export const handleGetMetricsResponse = views =>
  _.chain(views.attributes.views)
    .keyBy('applicationData.id')
    .value();

export const getMetricsPayloadFromMessages = messages => ({
  type: 'dashboard-view',
  attributes: { views: getViewsFromMessages(messages) }
});

const injectMetricIds = message => {
  message.attributes.representations.forEach(representation => {
    if (_.has(representation, 'context.metric')) {
      // message.metricId = uuid();
      message.metricId = uuids.shift();
    }
  });
};

const getViewsFromMessages = messages =>
  _.chain(messages)
    .keys()
    .filter(key => !!messages[key].metricId)
    .map(id => {
      const metrics = getMetricsFromMessage(messages[id]);
      return { ...metrics, applicationData: { id: messages[id].metricId } };
    });

const getMetricsFromMessage = message =>
  _.chain(message.attributes.representations)
    .find({ name: 'business-coach-insight' })
    .get('context.metric')
    .value();
