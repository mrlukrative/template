export interface Dashboard {
  id: number;
  views: Array<object>;
}


// {
//   "data": {
//   "type": "dashboard-view",
//     "id": "t_transientid1029381283012",
//     "attributes": {
//     "dates": {
//       "created": "2017-07-07T00:00:00Z"
//     },
//     "views": [
//       {
//         "label": "customer_count_segments_weekly",
//         "query": {
//           "metricId": "dashboard.kpi.customer_counts",
//           "startTime": "2017-05-17T00:00:00Z",
//           "endTime": "2017-06-23T00:00:00Z",
//           "filters": [
//             {
//               "tag": "type",
//               "value": "total"
//             },
//             {
//               "tag": "segment",
//               "value": "dormant"
//             },
//             {
//               "tag": "span",
//               "value": "weekly"
//             }
//           ],
//           "groupBy": [],
//           "aggregator": "max",
//           "downsample": {
//             "interval": "1w",
//             "fillPolicy": "0"
//           }
//         },
//         "intervals": [
//           "2017-05-17T00:00:00Z",
//           "2017-05-23T00:00:00Z",
//           "2017-05-30T00:00:00Z",
//           "2017-06-06T00:00:00Z",
//           "2017-06-13T00:00:00Z",
//           "2017-06-20T00:00:00Z",
//           "2017-06-27T00:00:00Z"
//         ],
//         "series": [
//           {
//             "tags": [],
//             "values": [
//               70,
//               60,
//               50,
//               40,
//               30,
//               20,
//               10
//             ]
//           }
//         ]
//       },
//       {
//         "label": "customer_count_segments_daily",
//         "query": {
//           "metricId": "dashboard.kpi.customer_counts",
//           "startTime": "2017-06-23T00:00:00Z",
//           "endTime": "2017-06-30T00:00:00Z",
//           "filters": [
//             {
//               "tag": "type",
//               "value": "total"
//             },
//             {
//               "tag": "segment",
//               "value": "firstTime"
//             },
//             {
//               "tag": "span",
//               "value": "daily"
//             }
//           ],
//           "groupBy": [],
//           "aggregator": "max",
//           "downsample": {
//             "interval": "1d",
//             "fillPolicy": "0"
//           }
//         },
//         "intervals": [
//           "2017-06-23T00:00:00Z",
//           "2017-06-24T00:00:00Z",
//           "2017-06-25T00:00:00Z",
//           "2017-06-26T00:00:00Z",
//           "2017-06-27T00:00:00Z",
//           "2017-06-28T00:00:00Z",
//           "2017-06-29T00:00:00Z",
//           "2017-06-30T00:00:00Z"
//         ],
//         "series": [
//           {
//             "tags": [],
//             "values": [
//               100,
//               200,
//               300,
//               400,
//               500,
//               600,
//               700,
//               800
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   "relationships": {
//     "owner": {
//       "data": null
//     },
//     "metrics": [
//       {
//         "data": {
//           "type": "dashboard-metric",
//           "id": "dashboard.kpi.customer_counts"
//         }
//       }
//     ]
//   }
// }
// }
