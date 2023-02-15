import { Add } from '@mui/icons-material';
import { useTable } from '@pankod/refine-core';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';

import { ProspectCard, CustomButton } from 'components';
const AllProspects = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError }
  } = useTable();

  const allProspects = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box >
      <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={25} fontWeight={700}
        color="#008E87"></Typography>
          <CustomButton 
            title="Add Prospect"
            handleClick={()=> navigate('/prospects/create')}
            backgroundColor="#008E87"
            color="#FFFFFF"
            icon={<Add />}
          />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {allProspects?.map((prospect) => (
              <ProspectCard
                  key={prospect._id}
                  id={prospect._id}
                  title={prospect.title}
                  location={prospect.location}
                  grantAmount={prospect.grantAmount}
                  photo={prospect.photo}
              />
          ))}
      </Box>
      
    </Box>
  )
}

export default AllProspects