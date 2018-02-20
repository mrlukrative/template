import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DashboardService {


  constructor(private http: Http) {
  }

  barSparklineDb() {
    const spark =
{
        barSparkline: [
          {
            'week': 1,
            'copper2012': 1000
          },
          {
            'week': 2,
            'copper2012': 8470
          },
          {
            'week': 3,
            'copper2012': 8591
          },
          {
            'week': 4,
            'copper2012': 8459
          }
        ]
      };
    return {spark};
  }

  getPopulationData(): Population[] {
    return populationData;
  }

  getWeeklyTrendData(): WeeklyTrendInfo[] {
    return sideBySideChartData;
  }

  getLastWeek(): LastWeekInfo[] {
    return lastBarChartData;
  }

  getFullStackBarData(): CustomerInfo[] {
    return fullStackChartData;
  }

  getLineChartData(): CustomerSpendInfo[] {
    return lineChartData;
  }

  getLineChartBuyingData(): CustomerBuyingInfo[] {
    return lineChartBuyingData;
  }
}


export class Population {
  arg: number;
  val: number;
}

const populationData: Population[] = [{
  arg: 1950,
  val: 2525778669
}, {
  arg: 1960,
  val: 3026002942
}, {
  arg: 1970,
  val: 3691172616
}, {
  arg: 1980,
  val: 4449048798
}, {
  arg: 1990,
  val: 5320816667
}, {
  arg: 2000,
  val: 6127700428
}, {
  arg: 2010,
  val: 6916183482
}];


// Four bar chart data
export class WeeklyTrendInfo {
  date: string;
  firstTime: number;
  repeat: number;
  atRisk: number;
  dormant: number;
}

const sideBySideChartData: WeeklyTrendInfo[] = [{
  date: 'Oct',
  firstTime: 150.95,
  repeat: 35.85,
  atRisk: 102.56,
  dormant: 2.85,
}, {
  date: 'Nov',
  firstTime: 158.94,
  repeat: 17.66,
  atRisk: 78.13,
  dormant: 66.94,
}, {
  date: 'Dec',
  firstTime: 82.51,
  repeat: 221.87,
  atRisk: 187.84,
  dormant: 143.94,
}, {
  date: 'Jan',
  firstTime: 125.3,
  repeat: 144.39,
  atRisk: 178.94,
  dormant: 240.94
}, {
  date: 'Feb',
  firstTime: 210.08,
  repeat: 43,
  atRisk: 56,
  dormant: 89.94
}, {
  date: 'Mar',
  firstTime: 248.03,
  repeat: 57.94,
  atRisk: 128.94,
  dormant: 136.94
}, {
  date: 'Apr',
  firstTime: 123.86,
  repeat: 142.94,
  atRisk: 110.94,
  dormant: 180.94
}];

export class LastWeekInfo {
  date: string;
  firstTime: number;
  RepeatCustomer: number;
}

const lastBarChartData: LastWeekInfo[] = [{
  date: '2017-08-20T00:00:00Z',
  firstTime: 23,
  RepeatCustomer: 200.85
}, {
  date: '2017-08-20T00:00:00Z',
  firstTime: 230.94,
  RepeatCustomer: 223.66
}, {
  date: '2017-08-20T00:00:00Z',
  firstTime: 82.51,
  RepeatCustomer: 221.87
}, {
  date: '2017-08-20T00:00:00Z',
  firstTime: 125.3,
  RepeatCustomer: 144.39
}, {
  date: '2017-08-20T00:00:00Z',
  firstTime: 210.08,
  RepeatCustomer: 43
}]


let fullStackChartData: CustomerInfo[]  = [{
  date: 'Mon',
  firstTime: 59.8,
  repeat: 937.6,
}, {
  date: 'Tue',
  firstTime: 74.2,
  repeat: 308.6
}, {
  date: 'Wed',
  firstTime: 40,
  repeat: 128.5
}, {
  date: 'Thu',
  firstTime: 22.6,
  repeat: 241.5
}, {
  date: 'Fri',
  firstTime: 19,
  repeat: 119.3
}, {
  date: 'Sat',
  firstTime: 6.1,
  repeat: 123.6
}, {
  date: 'Sun',
  firstTime: 6.1,
  repeat: 123.6
}];

export class CustomerInfo {
  date: string;
  firstTime: number;
  repeat: number;
}


let lineChartData: CustomerSpendInfo[]  = [{
  date: 'Mon',
  you: 59.8,
  competitors: 937.6,
  yearOverYear: 150
}, {
  date: 'Tue',
  you: 74.2,
  competitors: 308.6,
  yearOverYear: 22
}, {
  date: 'Wed',
  you: 40,
  competitors: 128.5,
  yearOverYear: 45
}, {
  date: 'Thu',
  you: 22.6,
  competitors: 241.5,
  yearOverYear: 86
}, {
  date: 'Fri',
  you: 19,
  competitors: 119.3,
  yearOverYear: 66
}, {
  date: 'Sat',
  you: 6.1,
  competitors: 123.6,
  yearOverYear: 98
}, {
  date: 'Sun',
  you: 6.1,
  competitors: 123.6,
  yearOverYear: 45
}];

export class CustomerSpendInfo {
  date: string;
  you: number;
  competitors: number;
  yearOverYear: number;
}


let lineChartBuyingData: CustomerBuyingInfo[]  = [{
  date: 'Mon',
  you: 59.8,
  yearOverYear: 150
}, {
  date: 'Tue',
  you: 74.2,
  yearOverYear: 22
}, {
  date: 'Wed',
  you: 40,
  yearOverYear: 45
}, {
  date: 'Thu',
  you: 22.6,
  yearOverYear: 86
}, {
  date: 'Fri',
  you: 19,
  yearOverYear: 66
}, {
  date: 'Sat',
  you: 6.1,
  yearOverYear: 98
}, {
  date: 'Sun',
  you: 9.5,
  yearOverYear: 45
}];

export class CustomerBuyingInfo {
  date: string;
  you: number;
  yearOverYear: number;
}


