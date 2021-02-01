const fs = require('fs');

exports.createText = async (req, res, next) => {
    try {
        fs.writeFileSync(`./notebooks/${req.body.title}.txt`, req.body.text);
        res.status(201).json({message:"Text kayıt edildi."});
    } catch (err) {
        res.status(401).json(err)
    }
}



exports.getText = async (req, res, next) => {

    try {
        var data = await fs.readdirSync('./notebooks')
        res.status(201).json(data);
    } catch (err) {
        res.status(401).json(err)
    }

}

exports.getFileIn = async (req, res, next) => {

    try {
        const dataTitle = req.params.name.split('.')[0];
        var data = await fs.readFileSync(`./notebooks/${req.params.name}`, 'utf8');
        res.status(201).json({ title: dataTitle, text: data });
    } catch (err) {
        res.status(401).json(err)
    }


}
