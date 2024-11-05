import Link from "next/link";
// MUI
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

export default function CheckoutForm() {
  const { state } = useCart();

  const getTotalPrice = () =>
    state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const STATE_LIST = [
    { value: "40", label: "Santiago" },
    { value: "60", label: "Valparaiso" },
  ];

  return (
    <Card sx={{ padding: 3 }}>

      <FlexBox alignItems="center" columnGap={1} mb={2}>
        <Span fontWeight="600">Comentarios Adicionales</Span>

        <Span
          p="6px 10px"
          fontSize={8}
          lineHeight="1"
          borderRadius="3px"
          color="primary.main"
          bgcolor="primary.light"
        >
          Notas
        </Span>
      </FlexBox>

      {/* COMMENTS TEXT FIELD */}
      <TextField variant="outlined" rows={6} fullWidth multiline />


      <Divider sx={{ mb: 2 }} />
      <Divider sx={{ mb: 2 }} />

      <Span fontWeight={600} mb={2} display="block">
        Envio Estimado
      </Span>

      {/* STATE/CITY TEXT FIELD */}
      <TextField
        select
        fullWidth
        size="small"
        label="Ciudad"
        variant="outlined"
        placeholder="Seleccionar Ciudad"
        defaultValue="Region Metropolitana"
      >
        {STATE_LIST.map(({ label, value }) => (
          <MenuItem value={value} key={label}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <Divider sx={{ mb: 2 }} />

      <FlexBetween mb={2}>
        <Span color="grey.600">Costo Envio:</Span>
        <Span fontSize={18} fontWeight={600} lineHeight="1">
          0
        </Span>
      </FlexBetween>
      
      <Divider sx={{ mb: 2 }} />

      <FlexBetween mb={2}>
        <Span color="grey.600">Neto:</Span>
        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {currency(getTotalPrice())}
        </Span>
      </FlexBetween>

      <Divider sx={{ mb: 2 }} />

      <FlexBetween mb={2}>
        <Span color="grey.600">IVA (19%):</Span>
        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {currency(getTotalPrice()*0.19)}
        </Span>
      </FlexBetween>

      <Divider sx={{ mb: 2 }} />

      <FlexBetween mb={2}>
        <Span color="grey.600">Total:</Span>
        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {currency(getTotalPrice() + getTotalPrice()*0.19)}
        </Span>
      </FlexBetween>

      <Divider sx={{ mb: 2 }} />
      
     
      <Button variant="outlined" color="primary" fullWidth sx={{ my: 2 }}>
        Calcular Pedido
      </Button>

      <Button
        fullWidth
        color="primary"
        href="/checkout"
        variant="contained"
        LinkComponent={Link}
      >
        Envio Cotizacion
      </Button>
    </Card>
  );
}
