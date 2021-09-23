import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {Styles, BingoGameSettingProps} from "./";

const BingoGameSetting = ({
  noOfPlayers,
  setNoOfPlayers,
  topic,
  setTopic,
  onSubmit,
}: BingoGameSettingProps) => {
  const handleChange = (e: any) => {
    setNoOfPlayers(parseInt(e.target.value));
  };

  return (
    <Styles.FormContainer elevation={24} >
      <FormControl component="fieldset">
        <FormLabel component="legend">Number of Players</FormLabel>
        <RadioGroup row aria-label="player" name="row-radio-buttons-group">
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="One"
            onChange={handleChange}
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Two"
            onChange={handleChange}
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="Three"
            onChange={handleChange}
          />
        </RadioGroup>
        <br />
        <TextField
          id="outlined-basic"
          label="Topic"
          variant="outlined"
          value={topic}
          placeholder="Topic like facebook, Germany, Pets"
          onChange={(e) => setTopic(e.target.value)}
        />
      </FormControl>
      <br />
      <Button variant="contained" component="div" onClick={onSubmit} disabled={noOfPlayers === 0 || topic.length === 0}>
          Next
        </Button>
    </Styles.FormContainer>
  );
};

export default BingoGameSetting;
