import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const daftarJabatan = [
  { value: "SPV", label: "Supervisor" },
  { value: "Manager", label: "Manager" },
  { value: "Admin", label: "Administrator" },
  { value: "Agen", label: "Agen" },
];

function CreateUserBox() {
  const [submitted, setSubmitted] = useState(false);
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = () => {
    setSubmitted(true);
    if (nama.trim() === "" || jabatan === "") {
      setHasil(null);
      return;
    }
    setHasil({ nama, jabatan });
  };

  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    }}
    >
      <Box
        sx={{
          border: "1px solid #000",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 300,
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "serif", fontWeight: "bold" }}
        >
          Welcome to Jayjay Lesson
        </Typography>

        <TextField
          variant="standard"
          label="Nama User"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          error={submitted && nama.trim() === ""}
          helperText={
            submitted && nama.trim() === "" ? "Nama user wajib diisi" : ""
          }
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          select
          sx={{ minWidth: 200 }}
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
          label="Pilih Jabatan"
          error={submitted && jabatan === ""}
          helperText={
            submitted && jabatan === "" ? "Jabatan user wajib dipilih" : ""
          }
        >
          {daftarJabatan.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" onClick={handleSubmit}>
          Buat User Baru
        </Button>

        {hasil && (
          <Box sx={{ fontFamily: "serif", fontWeight: "bold", mb: 2 }}>
            <Typography>User Baru Sudah Berhasil Dibuat!</Typography>
            <Typography>Nama User: {hasil.nama}</Typography>
            <Typography>
              Jabatan:{" "}
              {daftarJabatan.find((j) => j.value === hasil.jabatan)?.label}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CreateUserBox;
