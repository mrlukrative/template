import * as _ from 'lodash';

export const timelineMetricsSelector = timeline => _.chain(timeline.attributes.representations)
  .find({name: 'business-coach-insight'})
  .get('context.metric')
  .value();


// CREATE A TIMELINES SELECTOR
// TODO: 1. receive the entire store (timeline + dashboard)
// TODO: 2. construct an array of timelines, including properties from both timeline and dashboard
// TODO: 3. overview component will "subscribe" to this array of timelines and pass it down to the timeline component

export const timelinesSelector = ({timeline, dashboard}) => {
  if (!timeline.attributes || !dashboard.attributes) return {}

  return {
    timeline: {
      id: timeline.id,
      type: timeline.type,
      dates: timeline.attributes.dates,
      name: timeline.attributes.representations[1].name,
      metric: timeline.attributes.representations[1].context.metric
    },
    dashboard: {
      id: dashboard.id,
      type: dashboard.type,
      ...dashboard.attributes
    }
  }
}
