import React from "react";
import {
  DataGrid,
  GridColDef,

  GridRenderCellParams,
  GridFilterModel,
} from "@mui/x-data-grid";
import {
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../features/reduxHooks";
import apiPersonThunk from "../features/actions/personActionsThunk";

export default function DataTable() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.persons);

  React.useEffect(() => {
    dispatch(apiPersonThunk());
  }, []);

  const columns: GridColDef[] = [
    { field: "character", headerName: "character", width: 30 },
    { field: "character", headerName: "character", width: 330 },
    { field: "quote", headerName: "quote", width: 330 },
    { field: "image", headerName: "image", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      flex: 1,
      renderCell: (params: GridRenderCellParams<any, any>) => (
        <>
          <Tooltip title="Edit">
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [allRows, setAllRows] = React.useState(rows);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const handleDelete = (id: string) => {
    setAllRows((prev) => prev.filter((row) => row.id !== id));
    setShowSnackbar(true);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleFilterChange = (model: GridFilterModel) => {
    setFilterModel(model);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={handleFilterChange}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      <Button variant="contained" onClick={handleAdd}>
        Добавить
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Форма добавления записи</DialogTitle>
        <DialogContent>
          {/* Form for adding records */}
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Age" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleSave}>Сохранить</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Запись успешно удалена"
      />
    </div>
  );
}
