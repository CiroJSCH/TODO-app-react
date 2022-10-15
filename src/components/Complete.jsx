import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Complete(props) {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked={props.task.completed} onClick={() => props.toggleComplete(props.task)} />} label="Completed" />
    </FormGroup>
  );
}
