import Dialog, {DialogProps} from "@mui/material/Dialog";
import {styled} from "@mui/material/styles";

export const UFDialogAtBottom = styled(Dialog)<DialogProps>(({ theme }) => ({
  '& .MuiDialog-container': {
    alignItems: 'flex-end'
  }
}));
