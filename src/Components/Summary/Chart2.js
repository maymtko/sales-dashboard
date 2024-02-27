import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: "Chart Name",
          align: "center",
        },
        chart: {
          id: "basic-bar",
        },
        colors: ["#C33764", "#1D2671", "#FFAA47", "#365F82"],
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
            min: 20,
            max: 100,
            tickAmount: 4,
            title: {
              text: "",
            },
          },
        ],
      },
      series: [
        {
          name: "Line 1",
          data: [
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
          ],
        },
        {
          name: "Line 2",
          data: [
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
          ],
        },
        {
          name: "Line 3",
          data: [
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
            Math.floor(Math.random() * (100 - 20 + 1)) + 20,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="chart">
        <div className="line-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="800"
            align="center"
            // height="500"
          />
        </div>
        <hr
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
        </p>
      </div>
    );
  }
}

export default Chart2;
