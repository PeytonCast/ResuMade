var objectIdFromDate = function (date) {
  return Math.floor(date.getTime() / 1000).toString(16) + "0000000000000000";
};

var dateFromObjectId = function (objectId) {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

//to get date from mongo _id
// or use ObjectId("507c7f79bcf86cd7994f6c0e").getTimestamp()
