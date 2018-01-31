const logger = require('logops');
const fs = require('fs.promised');

 function ok(res, body) {
    logger.debug(body);
    res.send(body);
 }

 function badRequest(res, msg) {
     logger.error(msg);
     res.status(400).send({error: msg});
 }

 function serverError(res, msg, err) {
     err && logger.error(err);
     res.status(500).send({error: msg});
 }

 function moveFile(oldPath, newPath, res, callback) {
     var readStream = fs.createReadStream(oldPath);
     var writeStream = fs.createWriteStream(newPath);

     const onError = e => serverError(res, "Error during creating foto file", e);

     readStream.on('error', onError);
     writeStream.on('error', onError);
     readStream.on('close', () => {
         fs.unlink(oldPath).catch(e => serverError(res, "Error during deletion temp file", e));
         callback();
     });

     readStream.pipe(writeStream);
 }


 exports.badRequest = badRequest;
 exports.serverError = serverError;
 exports.ok = ok;

 exports.moveFile = moveFile;