import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from '@pankod/refine-mui';

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, prospectImage }: FormProps ) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#008E87">
        {type} a Prospect
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form 
          style={{
            marginTop: '20px', 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px'}}
          onSubmit={handleSubmit (onFinishHandler)}
        >
          <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter prospect name</FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title', { required: true })}/>
          </FormControl>

          <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter notes</FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write a high level description of the prospect and next steps."
              color="info"
              style={{ fontFamily: 'Source Sans Pro', width: '100%', background: 'transparent', fontSize: "16px", borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }}
              {...register('note', { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 14,
                  color: "#008E87"
                }}>
                  Select Program
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label' : 'Without label' }}
                defaultValue='None'
                {...register('program', { required: true })}
              >
                <MenuItem value="Energy">Energy</MenuItem>
                <MenuItem value="Impact">Impact</MenuItem>
                <MenuItem value="Market-based">Market-based</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="WASH">WASH</MenuItem>

              </Select>
            </FormControl>
            <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter potential grant amount</FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              variant="outlined"
              {...register('grantAmount', { required: true })}
            />
          </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter Location</FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('location', { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#008E87" fontSize={14} fontWeight={500} my="10px">Prospect Image</Typography>
              
              <Button component="label" sx={{ width: 'fit-content', color: "#878485", textTransform: 'capitalize', fontSize: 14}}>
                Upload *
                <input 
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  // @ts-ignore
                  handleImageChange(e.target.files![0])
                }} />
              </Button>
            </Stack>
                <Typography fontSize={12} color="#008E87" sx={{wordBreak: 'break-all'}}>{prospectImage?.name}</Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#008E87"
            color="#FFFFFF"
          />

        </form>
      </Box>
    </Box>
  )
}

export default Form;