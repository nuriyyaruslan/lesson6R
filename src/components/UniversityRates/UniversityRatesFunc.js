import React from 'react';
import Chart from "react-apexcharts";
import './UniversityRates.scss';

function UniversityRatesFunc() {

    const appexSettings = {
        options: {
            chart: {
              id: "basic-bar",
              background:'pink',
              foreColor:'green'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994]
            },
            title:{
                text:'University Statistic',
                align:'left',
                margin:20,
                style:{
                    fontSize:'20px',
                    color:'orangered'
                }
            },
            colors: ['#EE6C4D'],
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50]
            }
          ],
          
    }

    return (
        <div className="university-chart">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                    options={appexSettings.options}
                    series={appexSettings.series}
                    type="bar"
                    width="500"
                    />
                </div>
            </div>
        </div>
  )
}

export default UniversityRatesFunc;