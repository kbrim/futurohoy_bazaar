import { useCallback } from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// DROPZONE
import { useDropzone } from "react-dropzone";
// LOCAL CUSTOM COMPONENT
import { H5, Paragraph, Small } from "./Typography";

// ========================================================
interface Props {
  info?: string;
  onChange: (files: File[]) => void;
}
// ========================================================

export default function DropZone({ onChange, info }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => onChange(acceptedFiles),
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 10,
    multiple: true,
    accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
  });

  return (
    <Box
      py={6}
      px={{ md: 10, xs: 4 }}
      display="flex"
      minHeight="200px"
      textAlign="center"
      alignItems="center"
      borderRadius="10px"
      border="1.5px dashed"
      flexDirection="column"
      borderColor="grey.300"
      justifyContent="center"
      bgcolor={isDragActive ? "grey.200" : "grey.100"}
      sx={{
        transition: "all 250ms ease-in-out",
        outline: "none",
        cursor: "pointer",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <H5 color="grey.600">Drop file here or click to upload</H5>

      <Divider
        sx={{
          my: 3,
          "::before, ::after": { borderColor: "grey.300", width: 70 },
        }}
      >
        <Small color="text.disabled" px={1}>
          OR
        </Small>
      </Divider>

      <Button
        type="button"
        variant="outlined"
        color="info"
        sx={{ px: 4, mb: 4 }}
      >
        Select files
      </Button>

      <Paragraph color="grey.600" fontSize={13}>
        {info || "Drop files here or click to browse through your machine."}
      </Paragraph>
    </Box>
  );
}
