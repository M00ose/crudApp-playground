import { Box, Typography, FormControl, FormHelperText, TextField, Stack, Select, MenuItem, Button} from '@pankod/refine-mui';

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';
import DateTimePicker from './DateTimePicker';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, prospectImage }: FormProps ) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#008E87">
        {type} a Prospect
      </Typography>

      <Box mt={2.5} borderRadius="20px" padding="20px" bgcolor="#fcfcfc">
        <form 
          style={{
            marginTop: '20px', 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px'}}
          onSubmit={handleSubmit (onFinishHandler)}
        >
          <Stack direction="row" gap={4}>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Prospect Name</FormHelperText>
              <TextField 
                fullWidth
                required
                id="standard-basic"
                color="info"
                type="number"
                variant="standard"
                size="small"
                {...register('title', { required: true })}
              />
            </FormControl>

            <FormControl sx={{ minWidth: '150px'}} size="small">
              <FormHelperText
                sx={{
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 14,
                  color: "#008E87"
                }}>
                  Select Stage
              </FormHelperText>
              <Select
                variant="standard"
                color="info"
                inputProps={{ 'aria-label' : 'Without label' }}
                {...register('stage', { required: true})}
              >
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="Cultivating">Cultivating</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Soliciting">Soliciting</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>

              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: '150px'}} size="small">
              <FormHelperText
                sx={{
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 14,
                  color: "#008E87"
                }}>
                  Select Priority
              </FormHelperText>
              <Select
                variant="standard"
                color="info"
                inputProps={{ 'aria-label' : 'Without label' }}
                {...register('priority', { required: true })}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>

          </Stack>
          

          <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter summary</FormHelperText>
            <TextField
              id="standard-textarea"
              multiline
              variant="standard"
              placeholder="Write a high level description of the prospect and next steps."
              color="info"
              style={{ fontFamily: 'Source Sans Pro', width: '100%', background: 'transparent', fontSize: "16px", padding: 10, color: '#919191', borderColor: 'transparent'}}
              {...register('summary')}
            />
          </FormControl>

          <Stack>
            <FormControl>
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
                variant="standard"
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
          </Stack>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter potential grant amount</FormHelperText>
              <TextField 
                fullWidth
                required
                id="standard-basic"
                color="info"
                type="number"
                variant="standard"
                {...register('grantAmount')}
              />
            </FormControl>

            <FormControl sx={{ minWidth: '150px'}}>
              <FormHelperText
                sx={{
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 14,
                  color: "#008E87"
                }}>
                  Select Grant Type
              </FormHelperText>
              <Select
                variant="standard"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label' : 'Without label' }}
                {...register('grantType')}
              >
                <MenuItem value="Unrestricted">Unrestricted</MenuItem>
                <MenuItem value="Program">Program</MenuItem>
                <MenuItem value="Project">Project</MenuItem>

              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: '150px'}}>
              <FormHelperText
                sx={{
                  fontFamily: 'Oswald',
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 14,
                  color: "#008E87"
                }}>
                  Select Funding Cycle
              </FormHelperText>
              <Select
                variant="standard"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label' : 'Without label' }}
                defaultValue='None'
                {...register('fundingCycle')}
              >
                <MenuItem value="One-time">One-time</MenuItem>
                <MenuItem value="Annual">Annual</MenuItem>
                <MenuItem value="Multi-year">Multi-year</MenuItem>

              </Select>
            </FormControl>
          </Stack>

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
                  Select Application Process
              </FormHelperText>
              <Select
                variant="standard"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label' : 'Without label' }}
                {...register('applicationProcess')}
              >
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Call">Call</MenuItem>
                <MenuItem value="Invitation">Invitation</MenuItem>

              </Select>
            </FormControl>

            <FormControl
              inputProps={{ 'aria-label' : 'Without label' }}
              {...register('deadline')}
            >
                <DateTimePicker />
            </FormControl >

          </Stack>

          <FormControl>
            <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter Location</FormHelperText>
            <TextField 
              fullWidth
              required
              id="standard-basic"
              color="info"
              variant="standard"
              {...register('location', { required: true })}
            />
          </FormControl>
          
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter a website url</FormHelperText>
              <TextField 
                fullWidth
                id="standard-basic"
                color="info"
                type="url"
                variant="standard"
                {...register('website')}
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{fontFamily: 'Oswald', fontWeight: 500, margin: '10px 0', fontSize: 14, color: "#008E87" }}>Enter an email address</FormHelperText>
              <TextField 
                fullWidth
                id="standard-basic"
                color="info"
                type="email"
                variant="standard"
                {...register('email')}
              />
            </FormControl>
          </Stack>

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