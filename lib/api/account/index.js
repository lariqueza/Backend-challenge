import express from 'express';

import { getRoles, updateProfile, deleteMember, searchUsers, addMember } from './controller';

const router = express.Router();

router.get('/role', getRoles);
router.put('/profile', updateProfile);
router.delete('/member', deleteMember);
router.post('/member', addMember);
router.get('/search', searchUsers);

export default router;
