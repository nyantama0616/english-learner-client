import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SxProps } from "@mui/system";

interface CloseButtonProps {
    onClick: () => void;
    sx?: SxProps;
}
export default function CloseButton({ onClick, sx }: CloseButtonProps) {
    return (
        <HighlightOffIcon onClick={onClick} sx={{
            width: "50px",
            height: "50px",
            ":hover": {
                cursor: "pointer",
                transform: "scale(1.2)",
            },
            ...sx
        }} />
    )
}
