import express from 'express';

import auth from './auth';
import user from './user';
import upload from './upload';

const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/upload', upload);

module.exports = router;
