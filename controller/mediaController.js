const Media = require("../models/Media")

const getAll = async (req, res) => {
    try {
        const media = await Media.find();
        res.status(200).json({
            result: "SUCCESS",
            message: "Media found",
            payload: { media }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            result: "ERROR",
            error
        })
    }
}

const createMedia = async (req, res) => {
    try {
        const { name } = req.body;
        const videoPath = "http://localhost:3005/" + req.file.path;
        const payload = {
            name,
            video: videoPath
        }
        const newMedia = new Media(payload);
        await newMedia.save()
        res.status(200).json({
            result: "SUCCESS",
            message: "Video has been successfully uploaded.",
            payload
        })
    } catch (error) {
        res.status(500).json({
            result: "ERROR",
            message: "Some Error has been ocurred."
        })
    }
}

module.exports = { getAll, createMedia }
