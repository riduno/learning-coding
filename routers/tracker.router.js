const tracker = require('../controllers/tracker.controller');

const routes = (app) => {
  app.get('/', tracker.findAll);
  app.get('/:note?', tracker.find);
  app.get('/tracker/:id?', tracker.editform);
  app.post('/tracker', tracker.create);
  app.put('/tracker/:id', tracker.edit);
  app.delete('/tracker/:id', tracker.delete);
}
module.exports = routes;