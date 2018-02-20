import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Config} from '../config';
import * as _ from 'lodash';
import {getJsonResponseData} from '../helpers/helpers';


@Injectable()
export class TimelineService {

  constructor(private http: Http) {
  }

  timelineDb() {
    const sales =
      {
        breakdown: [
          {
            id: 0,
            title: 'Ssdkjsdf sdf sdf sdflkhjlkjwe sdfsxfsdf',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 1, // the number will determine the corresponding tabs to display.
            metrixId: 1,
            salesStatus: 0, // the number will determine the corresponding warning to display.
            price: 3454,
            date: 'Tue Jul 04 2017 09:05:40 GMT-0400 (EDT)',
          },
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 2, // the number will determine the corresponding tabs to display.
            salesStatus: 1, // the number will determine the corresponding warning to display.
            price: 4034,
            date: 'Wed Jul 05 2017 09:05:40 GMT-0400 (EDT)',
          },
          {
            id: 2,
            title: ',jl;kweruy  erkjh werkdiu wer wer ewf sdfsdfw',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 3, // the number will determine the corresponding tabs to display.
            metrixId: 2,
            salesStatus: 1, // the number will determine the corresponding warning to display.
            price: 5343,
            date: 'Thu Jul 06 2017 09:05:40 GMT-0400 (EDT)',
          },
          {
            id: 3,
            title: 'Loressdf  sdfs werwe wee wr hnbetgwert.',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 4, // the number will determine the corresponding tabs to display.3
            metrixId: 3,
            salesStatus: 2, // the number will determine the corresponding warning to display.
            price: 8937,
            date: 'Fri Jul 07 2017 09:05:40 GMT-0400 (EDT)',
          },
          {
            id: 4,
            title: 'Lorem ipdfgdfgtur adipiscing elit.',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 5, // the number will determine the corresponding tabs to display.
            metrixId: 4,
            salesStatus: 3, // the number will determine the corresponding warning to display.
            price: 7653,
            date: 'Sat Jul 08 2017 09:05:40 GMT-0400 (EDT)',
          },
          {
            id: 5,
            title: 'Lorem ipsdffdg sdfw sdf dsiscing elit.',
            revenueState: 0, // 0 = loss, 1 = gain
            recommendation: 'Sed maximus ex aliquet, malesuada turpis eget, dignissim turpis. Sed id maximus dui. Aliquam mattis volutpat iaculis. Morbi tincidun',
            chartType: 6, // the number will determine the corresponding tabs to display.
            metrixId: 4,
            salesStatus: 0, // the number will determine the corresponding warning to display.
            price: 2643,
            date: 'Sun Jul 09 2017 09:05:40 GMT-0400 (EDT)',
          }
        ]
      };
    return {sales};
  }

  loadTimelineMessage(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('sessionToken'));
    return this.http.get(
      Config.apiUrl + '/timeline/messages/' + id,
      {
        headers: headers
      }
    )
      .map(getJsonResponseData)




    // .do(_.partial(console.log, 'timelineMsg'))
  }
}


