import React from "react";
import { Bar } from "react-chartjs-2";
import Styles from "../../../styles/Charts.module.scss";

const partner1 = {
  eneroP: ["user_id1", "user_id2", "user_id3"],
  febrero: ["user_id1", "user_id2", "user_id3", "user_id4"],
  marzo: ["user_id1", "user_id2", "user_id3", "user_id4", "user_id5"],
  abril: ["user_id1", "user_id2", "user_id3", "user_id4", "user_id5"],
  mayo: ["user_id1", "user_id2", "user_id3"],
};

const array1 = Object.entries(partner1);

const labelsX = array1.map((mes) => mes[0]);

const subsMonth = array1.map((item) => item[1].length);

const BarChart = () => {
  return (
    <div className={`border border-ligth ${Styles.chartContainer}`}>
      <Bar
        data={{
          labels: labelsX,
          datasets: [
            {
              label: "Subcriciones al mes",
              data: subsMonth,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={750}
        width={1500}
      />
    </div>
  );
};

export default BarChart;
