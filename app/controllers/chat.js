module.exports.iniciaChat = (application, req, res) => {
    const dadosForm = req.body;

    console.log(dadosForm);
    res.render('chat');
}