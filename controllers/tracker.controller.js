const Tracker = require('../models/expense-tracker.model');

const findAll = async (req, res) => {
  try {
    const trackers = await Tracker.find({});
    res.render('index', { trackers: trackers, search: '' });
  } 
  catch (err) {
    res.status(500).json({
      message: 'Error: ' + err
    });
  }
}

const editform = async (req, res) => {
  try {
    const id = req.params.id;
    const tracker = await Tracker.findById(id);
    res.render('edit', { tracker: tracker });
  } 
  catch (err) {
    res.status(500).json({
      message: 'Error: ' + err
    });
  }
}

const find = async (req, res) => {
  try {
    const note = req.params.note;
    const trackers = await Tracker.where({ note: { $regex: '.*' + note + '.*' } });
    res.render('index', { trackers: trackers, search: note });
  } catch (error) {
    res.status(505).json({
      message: 'Error: ' + error
    })
  }
}

const create = async (req, res) => {
  try {
    const newTracker = new Tracker({
      note: req.body.note,
      type: req.body.type,
      category: req.body.category,
      total: req.body.total
    });
    const result = await newTracker.save();
    res.status(200).redirect('/');
  } catch (error) {
    res.status(500).json({
      message: 'Error: ' + error
    })
  }
}

const put = async (req, res) => {
  try {
    const result = await Tracker.findByIdAndUpdate(req.params.id, { $set : req.body });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Error: ' + error
    })
  }
}

const del = async (req, res) => {
  try {
    const result = await Tracker.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: 'Error: ' + error
    })
  }
}


module.exports = { findAll: findAll, editform: editform, find: find, create: create, edit: put, delete: del };