export interface Timeline {
  id: number;
  name: string;
}


// {
//   "data": {
//   "type": "timeline-message",
//     "id": "1234",
//     "attributes": {
//     "dates": {
//       "created": "2017-07-06T00:00:00Z"
//     },
//     "representations": [
//       {
//         "name": "text",
//         "context": {
//           "msg": "Hey you're losing customers! You should stop losing customers."
//         }
//       },
//       {
//         "name": "business-coach-insight",
//         "context": {
//           "status": "danger",
//           "title": "Hey you're losing customers!",
//           "recommendation": "You should stop losing customers.",
//           "cta": {
//             "label": "Click on this button to stop losing customers.",
//             "url": "https://www.google.ca/search?q=how+to+stop+losing+customers"
//           },
//           "insight": {
//             "identifier": "customer_loss_weekly_001"
//           },
//           "metric": {
//             "label": "customer_count_segments_weekly",
//             "query": {
//               "metricId": "dashboard.kpi.customer_counts",
//               "startTime": "2017-05-17T00:00:00Z",
//               "endTime": "2017-06-23T00:00:00Z",
//               "filters": [
//                 {
//                   "tag": "type",
//                   "value": "total"
//                 },
//                 {
//                   "tag": "segment",
//                   "value": "dormant"
//                 },
//                 {
//                   "tag": "span",
//                   "value": "weekly"
//                 }
//               ],
//               "groupBy": [],
//               "aggregator": "max",
//               "downsample": {
//                 "interval": "1w",
//                 "fillPolicy": "0"
//               }
//             }
//           },
//           "metricUrl": "/dashboard/metrics/dashboard.kpi.customer_counts"
//         }
//       }
//     ]
//   },
//   "relationships": {
//     "author": {
//       "data": {
//         "type": "account",
//           "id": "123123123"
//       }
//     },
//     "channel": {
//       "data": {
//         "type": "timeline-channel",
//           "id": "ts.coach.merchant.123124"
//       }
//     },
//     "timeline": {
//       "data": {
//         "type": "timeline",
//           "id": "coach.merchant.123xyz"
//       }
//     }
//   }
// }
// }
