import React, { useState } from "react";
import { TextField, Button, Alert, Snackbar } from "@mui/material";

export function Formulario({ aoEnviar }) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleClick();
          setTitulo("");
          setConteudo("");
          aoEnviar({ titulo, conteudo });
        }}
      >
        <TextField
          id="titulo"
          value={titulo}
          label="Título"
          variant="outlined"
          margin="normal"
          onChange={(event) => setTitulo(event.target.value)}
          onBlur={(event) => {
            titulo.length < 3 ? setErro(true) : setErro(false);
          }}
          error={erro}
          helperText={erro === true ? "Insira pelo menos 3 caracteres" : ""}
          fullWidth
        />
        <TextField
          id="conteudo"
          value={conteudo}
          label="Descrição"
          variant="outlined"
          margin="normal"
          multiline
          rows={5}
          onChange={(event) => setConteudo(event.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={erro}
        >
          Salvar
        </Button>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClick}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClick}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          A anotação foi salva!
        </Alert>
      </Snackbar>
    </>
  );
}
