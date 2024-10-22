"use client";

import { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef, GridToolbarContainer, GridRowModes, } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { Formik } from "formik";
import * as yup from "yup";
// GLOBAL CUSTOM COMPONENTS
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
// STYLED COMPONENTS
import { UploadImageBox, StyledClear } from "../styles";

// FORM FIELDS VALIDATION SCHEMA
const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  category: yup
    .array(yup.string())
    .min(1, "Category must have at least 1 items")
    .required("Category is required!"),
  description: yup.string().required("Description is required!"),
  stock: yup.number().required("Stock is required!"),
  price: yup.number().required("Price is required!"),
  sale_price: yup.number().optional(),
  tags: yup.string().required("Tags is required!"),
});

// ================================================================
interface Props {}
// ================================================================

export default function ProductForm(props: Props) {
  const INITIAL_VALUES = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    category: [],
    rango:[],
    sale_price: "",
    description: "",
  };

  const handleFormSubmit = (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  const [files, setFiles] = useState([]);

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (files: File[]) => {
    files.forEach((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) }),
    );
    setFiles(files);
  };

  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = (file: File) => () => {
    setFiles((files) => files.filter((item) => item.name !== file.name));
  };

  const visibleFields = [
    'producto',
    'tipo_grabado',
    'rango_min',
    'rango_max',
    'precio'
  ];

  const rows: GridRowsProp = [

  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Rango Minimo', width: 150 },
    { field: 'col1', headerName: 'Rango Maximo', width: 150 },
    { field: 'col2', headerName: 'Precio', width: 150 },
  ];
  
  const handleClick = () => {
    setRows((oldRows) => [
      ...oldRows,
      { id, name: '', age: '', role: '', isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}



  return (
    <Card className="p-3">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Nombre"
                  color="info"
                  size="medium"
                  placeholder="Nombre"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={Boolean(touched.name && errors.name)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="category"
                  onBlur={handleBlur}
                  placeholder="Categoria"
                  onChange={handleChange}
                  value={values.category}
                  label="Seleccionar Categoria"
                  SelectProps={{ multiple: true }}
                  error={Boolean(touched.category && errors.category)}
                  helperText={(touched.category && errors.category) as string}
                >
                  <MenuItem value="electronics">Deportes</MenuItem>
                  <MenuItem value="fashion">Invierno</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  label="Descripcion"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Descripcion"
                  value={values.description}
                  helperText={touched.description && errors.description}
                  error={Boolean(touched.description && errors.description)}
                />
              </Grid>

              <Grid  item xs={12}>
                    <DataGrid rows={rows} columns={columns} editMode="row"/>
              </Grid>
           
              <Grid item xs={12}>
                <DropZone onChange={(files) => handleChangeDropZone(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => {
                    return (
                      <UploadImageBox key={index}>
                        <Box component="img" src={file.preview} width="100%" />
                        <StyledClear onClick={handleFileDelete(file)} />
                      </UploadImageBox>
                    );
                  })}
                </FlexBox>
              </Grid>



              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Guardar Producto
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
}
