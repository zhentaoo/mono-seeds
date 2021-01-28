let wcLog = async function(ctx, next) {
  console.log('start wcLog');
  let startTime = Date.now();
  await next();
  let endTime = Date.now();
  console.log('wcLog: request:' + startTime, ' reponse:' + endTime);
};

module.exports =  wcLog;
