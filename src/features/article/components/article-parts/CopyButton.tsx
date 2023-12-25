import { Tooltip, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BasicStatus from '../../../../general/types/BasicStatus';

interface CopyButtonProps {
    status: BasicStatus;
    onClick?: () => void;
}
export default function CopyButton({ status, onClick }: CopyButtonProps) {
    const title = status === BasicStatus.Success ? "Copied!" : "Copy";

    return (
        <Tooltip title={title}>
            <Button sx={{color: "black"}}>
                <ContentCopyIcon onClick={onClick} />
            </Button>
        </Tooltip>
    )
}
