import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';


const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FFFFFF"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#008E87">Total Revenue</Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap" color="#003441">
        <Typography fontSize={28} fontWeight={700}>$1,500,000</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{
            fontSize: 25, color: "#008E87"
          }}/>
          <Stack>
            <Typography fontSize={15} color="#008E87">0.8%</Typography>
            <Typography fontSize={12} color="#003441">Than Last Month</Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart 
      series={TotalRevenueSeries}
      type="bar"
      height={310}
      options={TotalRevenueOptions}
      />

    </Box>
  )
}

export default TotalRevenue