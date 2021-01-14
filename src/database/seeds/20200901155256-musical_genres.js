const now = new Date();
const uuid = require("uuid").v4;

module.exports = [
  { id: uuid(), name: "Open Format", created_at: now, updated_at: now },
  { id: uuid(), name: "House", created_at: now, updated_at: now },
  { id: uuid(), name: "Deep House", created_at: now, updated_at: now },
  { id: uuid(), name: "Electro", created_at: now, updated_at: now },
  { id: uuid(), name: "Funk", created_at: now, updated_at: now },
  { id: uuid(), name: "Hip Hop", created_at: now, updated_at: now },
  { id: uuid(), name: "Rap", created_at: now, updated_at: now },
];
