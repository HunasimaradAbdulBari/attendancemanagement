const express = require('express');
const router = express.Router();
const {
  getNotifications,
  markAsRead
} = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getNotifications);
router.put('/:notificationId/read', authMiddleware, markAsRead);

module.exports = router;