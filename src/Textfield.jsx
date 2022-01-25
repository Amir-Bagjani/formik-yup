import { TextField } from "@mui/material";
import { useField, ErrorMessage } from "formik";

export default function Textfield(props) {
  const [field, meta] = useField(props);
//   console.log(props);
  return (
    <div>
      <TextField
        fullWidth
        {...props}
        {...field}
        error={Boolean(meta.touched) && Boolean(meta.error)}
        size="small"
        sx={{ marginTop: `20px` }}
      />
      <ErrorMessage
        name={field.name}
        component="p"
        style={{ margin: `7px 0 0 0`, color: `red`, font: `0.9rem Roboto` }}
      />
    </div>
  );
}
