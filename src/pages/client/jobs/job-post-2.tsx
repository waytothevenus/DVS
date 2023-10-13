import { Typography, Grid, Button, Stack, Card, CardContent } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'store';
import JobPostStep2 from 'components/molecules/jobpost/job-post-step-2';

const Job_Post_2 = () => {
  const theme = useTheme();
  const handleBackClick = () => {
    window.history.back();
  };
  const jobs = useSelector((state) => state.jobs);
  return (
    <>
      <Grid container spacing={3} sx={{ padding: '10px' }}>
        <Grid item xs={12}>
          <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Typography variant="body2" sx={{ color: theme.palette.secondary }}>
              Experts/Hired/Post a New Requirement
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Post a New Requirement</Typography>
          <Stack spacing={1} direction={'column'}>
            <Typography variant="body2">Step 2/4</Typography>
            <Typography variant="h4">Preferences</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '95vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent sx={{ width: '100%' }}>
              <JobPostStep2 budgetRanges={jobs.budgetRange} durations={jobs.duration} weeklyCommitments={jobs.industries} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Job_Post_2;
