import { Tooltip, Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface IconButtonProps {
    title?: string;
    onClick?: () => void;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
}
export default function IconButton({ title, className, onClick ,sx, children }: IconButtonProps) {
    return(
        <Tooltip className={className} title={title} sx={sx}>
            <Button onClick={onClick}>
                {children}
            </Button>
        </Tooltip>
            
    )
}
