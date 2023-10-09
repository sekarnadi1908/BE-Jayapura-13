const GambarDatabase = require('../model/gambar');
const Game = require('../model/game');

async function gambar(req, res){
    try{
        const gambar = await GambarDatabase.findOne();
        res.json(gambar);
    } catch (err){
        res.status(500).json({error: err.message});
    }
}

async function games(req, res){
    try {
        const games = await Game.create(req.body);
        res.json({ success: true, games });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}


module.exports = {
    gambar,
    games
}