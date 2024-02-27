import React from "react";
import Chart from "react-apexcharts";
import Chart1header from "./Chart1header";

class Chart1 extends React.Component {
  render() {
    // const data={
    //     datasets: [{
    //         type: 'bar',
    //         label: 'Bar Dataset',
    //         data: [10, 20, 30, 40]
    //     }, {
    //         type: 'line',
    //         label: 'Line Dataset',
    //         data: [50, 50, 50, 50],
    //     }],
    //     labels: ['January', 'February', 'March', 'April']
    // }

    return (
      <div className="chart">
        <div className="line-chart">
        <Chart1header />
        <Chart
          align="center"
          width="800"
          // type="bar"
          height="auto"
          series={[
            {
              name: "GMV($)",
              type: "bar",
              data: [
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
              ],
            },
            {
              name: "GMV($)LY",
              type: "bar",
              data: [
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
                Math.floor(Math.random() * (300 - 100 + 1)) + 100,
              ],
            },
            {
              name: "AOV($)",
              type: "line",
              data: [
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
                Math.floor(Math.random() * (10 - 6 + 1)) + 6,
              ],
            },
            {
              name: "AOV($)LY",
              type: "line",
              data: [
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                Math.floor(Math.random() * (3 - 1 + 1)) + 1,
              ],
            },
          ]}
          options={{
            title: {
              text: "GMV($) AND AOV($) TREND",
              align: "center",
            },
            colors: ["#C33764", "#1D2671", "#FFAA47", "#365F82"],
            markers: {
              size: 5,
            },
            xaxis: {
              categories: [
                "20 Sep",
                "21 Sep",
                "22 Sep",
                "23 Sep",
                "24 Sep",
                "25 Sep",
                "26 Sep",
              ],
            },
            responsive: [
              {
                breakpoint: 957,
                options: {
                  chart: {
                    width: "690px",
                  },
                },
                breakpoint: 857,
                options: {
                  chart: {
                    width: "680px",
                  },
                },
                breakpoint: 697,
                options: {
                  chart: {
                    width: "650px",
                  },
                },
                breakpoint: 660,
                options: {
                  chart: {
                    width: "600px",
                  },
                },
                breakpoint: 600,
                options: {
                  chart: {
                    width: "500px",
                  },
                },
                breakpoint: 500,
                options: {
                  chart: {
                    width: "400px",
                  },
                },
                breakpoint: 400,
                options: {
                  chart: {
                    width: "350px",
                  },
                },
              },
            ],
            yaxis: [
              {
                seriesName: "Column A",
                min: 100,
                max: 300,
                tickAmount: 4,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                },
                title: {
                  text: "",
                },
                labels: {
                  formatter: (val) => {
                    return `${val}K`;
                  },
                },
              },
              {
                seriesName: "Column B",
                show: false,
              },
              {
                opposite: true,
                seriesName: "Line C",
                min: 6,
                max: 10,
                tickAmount: 4,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                },
                title: {
                  text: "Items",
                },
                labels: {
                  formatter: (val) => {
                    return `${val}k`;
                  },
                },
              },
            ],
          }}
        />
      </div>
        {/* <hr
          style={{
            backgroundColor: "##365F82",
            height: "1px",
            opacity: "30%",
            marginBottom: "0px",
          }}
        ></hr>
        <p
          style={{
            padding: "10px 20px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#365F82",
          }}
        >
          Last 7 days
        </p> */}
      </div>
    );
  }
}

export default Chart1;
