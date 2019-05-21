import Highcharts from "highcharts"
import HighchartsSeriesLabel from "highcharts/modules/series-label"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsExportData from "highcharts/modules/export-data"

HighchartsSeriesLabel(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

function putChart(dest){
    Highcharts.chart(dest, {
        title: {
            text: "Test Chart"
        },
        subtitle: {
            text:"subtitle"
        },

        yAxis: {
            title: {
                text: "y axis"
            }
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
                pointStart: 0
            }
        },
        series: [
            {
                name: "numbers 1",
                data: [5, 8, 2, 3, 10]
            }, {
                name: "numbers 2",
                data: [2, 3, 4, 5, 6]
            }, {
                name: "numbers 3",
                data: [4, 4, 4, 4]
            }
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: "horizontal",
                            align: "center",
                            verticalAlign: "bottom"
                        }
                    }
                }
            ]
        }
    });
}

export default putChart;