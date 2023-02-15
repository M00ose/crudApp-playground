import { useList } from '@pankod/refine-core';
import { Typography, Box,  Stack } from '@pankod/refine-mui';

import {
  PieChart,
  ProgramAreas,
  TotalRevenue,
  ProspectCard,
  TopFunder
} from 'components';

const Home = () => {
  return (
    <Box>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Active Funders"
          value={30}
          series={[45, 65]}
          colors={["#008E87", "#f0fffe"]}    
        />
        <PieChart 
          title="Funders with Recent Touchpoints"
          value={83}
          series={[75, 25]}
          colors={["#008E87", "#f0fffe"]}    
        />
        <PieChart 
          title="Successful Grants"
          value={12}
          series={[30, 70]}
          colors={["#008E87", "#f0fffe"]}    
        />
        <PieChart 
          title="Funding Target"
          value={425000}
          series={[90, 10]}
          colors={["#008E87", "#f0fffe"]}    
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <ProgramAreas />
      </Stack>
    </Box>
  )
}

export default Home