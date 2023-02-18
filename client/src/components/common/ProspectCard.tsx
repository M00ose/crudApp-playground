import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from "@pankod/refine-mui";

import { ProspectCardProps } from "interfaces/prospect";

const ProspectCard = ({
    id,
    title,
    program,
    grantAmount,
    deadline,
    logo,
    stage,
    priority,
}: ProspectCardProps) => {
    return (
        <Card
            component={Link}
            to={`/prospects/show/${id}`}
            sx={{
                maxWidth: "330px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
                },
                cursor: "pointer",
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                width="100%"
                height={100}
                image={logo}
                alt="card image"
                sx={{ 
                  borderRadius: "10px", 
                  'object-fit': "contain"
                }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingX: "5px",
                }}
            >
                <Stack direction="column" gap={1}>
                    <Typography fontSize={16} fontWeight={500} color="#008E87">
                        {title}
                    </Typography>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Place
                            sx={{
                                fontSize: 18,
                                color: "#003441",
                                marginTop: 0.5,
                            }}
                        />
                    </Stack>
                </Stack>
                <Box
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    bgcolor="#008E87"
                    height="fit-content"
                >
                    <Typography fontSize={12} fontWeight={600} color="#FFFFFF">
                        ${grantAmount}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProspectCard;