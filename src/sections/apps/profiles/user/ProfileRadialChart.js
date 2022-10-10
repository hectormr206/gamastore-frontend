import { useEffect, useState } from 'react';

// next
import dynamic from 'next/dynamic';

// material-ui
import { useTheme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// chart options
const redialBarChartOptions = {
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '75%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 5
        }
      }
    }
  },
  labels: ['Vimeo']
};

// ==============================|| TOP CARD - RADIAL BAR CHART ||============================== //

const ProfileRadialChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const textPrimary = theme.palette.text.primary;
  const primary = theme.palette.primary.main;
  const grey0 = theme.palette.grey[0];
  const grey500 = theme.palette.grey[500];
  const grey200 = theme.palette.grey[200];

  const [series] = useState([30]);
  const [options, setOptions] = useState(redialBarChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [primary],
      plotOptions: {
        ...prevState.plotOptions,
        radialBar: {
          ...prevState.plotOptions.radialBar,
          track: {
            background: mode === 'dark' ? grey200 : grey0
          },
          dataLabels: {
            ...prevState.plotOptions.radialBar.dataLabels,
            value: {
              fontSize: '1rem',
              fontWeight: 600,
              offsetY: 5,
              color: textPrimary
            }
          }
        }
      }
    }));
  }, [mode, grey200, grey0, grey500, textPrimary, primary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" width={136} height={136} />
    </div>
  );
};

export default ProfileRadialChart;
