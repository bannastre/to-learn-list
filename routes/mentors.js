var express = require('express');
var router = express.Router();
const mentorController = require('../controllers/mentorController');

router.get('/new', mentorController.formMentor);

router.post('/new', mentorController.createMentor);

router.get('/', mentorController.listMentors);

router.get('/invite/:id', mentorController.inviteMentor);

router.get('/invites', mentorController.listInvites);
router.get('/invites/accept/:id', mentorController.acceptInvite);
router.get('/invites/decline/:id', mentorController.declineInvite);

module.exports = router;