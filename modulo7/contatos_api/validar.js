


function validar (req, res, next) {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("ID inválido");
    }