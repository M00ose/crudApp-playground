import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Start } from '@mui/icons-material';
import { CustomButton } from 'components';

const Prospects = () => {

  const navigate = useNavigate();

  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const prospects = data?.data ?? {};
  
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Oh no! Something went wrong!</div>

  const handleDeleteProspect = () => {
    const response = window.confirm(
        "Are you sure you want to delete this prospect?",
    );
    if (response) {
        mutate(
            {
                resource: "prospects",
                id: id as string,
            },
            {
                onSuccess: () => {
                    navigate("/prospects");
                },
            },
        );
    }
};

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#FFFFFF"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#008E87" fontFamily="Oswald">{prospects.title}</Typography>

      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}>
        <Box flex={1} maxWidth={600}>
          <img src={prospects.photo} alt={prospects.title} height={100} style={{ objectFit: "cover", borderRadius: '10px'}} className="prospects-img"/>

          <Box mt="15px">
            <Stack 
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems="center"
            >
              <Typography fontSize={16} fontWeight={500} color="#11142d" fontFamily="Source Sans Pro">{prospects.note}</Typography>
              <Box
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    bgcolor="#008E87"
                    height="fit-content"
                >
                    <Typography fontSize={12} fontWeight={600} color="#FFFFFF">
                        {prospects.programArea}
                    </Typography>
                </Box>
                <Box
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    bgcolor="#008E87"
                    height="fit-content"
                >
                    <Typography fontSize={12} fontWeight={600} color="#FFFFFF">
                        ${prospects.grantAmount}
                    </Typography>
                </Box>
            </Stack>

            <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                <Place sx={{ color: '#808191' }}/>
                <Typography fontSize={14} fontWeight={500} color="#808191" textTransform="uppercase" fontFamily="Source Sans Pro">{prospects.location}</Typography>
            </Stack>
          </Box>
        </Box>

      </Box>
      
      <Box mt={5} display='flex' >
        <Stack direction="row" gap={1}>
          <CustomButton
            title="Edit"
            backgroundColor="#AACB73"
            color="#fcfcfc"
            icon={<Edit />}
            handleClick={() => navigate(`/prospects/edit/${prospects._id}`)}
          />
          <CustomButton
            title="Delete"
            backgroundColor="#FF6464"
            color="#fcfcfc"
            icon={<Delete />}
            handleClick={() => handleDeleteProspect() }
          />
        </Stack>
        
      </Box>

      

    </Box>
  )
}

export default Prospects