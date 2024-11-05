import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// ==============================================================
interface Props {
  total: string;
  handleNavigate: (path: string) => () => void;
}
// ==============================================================

export default function BottomActions({ total, handleNavigate }: Props) {
  return (
    <Box p={2.5}>

      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{ height: 40 }}
        href="/cart"
        onClick={handleNavigate("/cart")}
      >
        Ver Carro ({total})
      </Button>
    </Box>
  );
}
