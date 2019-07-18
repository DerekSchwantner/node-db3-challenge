const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id }) // .where always returns an array
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .orderBy("steps.step_number", "asc");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

// async function update(scheme, id) {
//     try {
//       const checkId = await db("schemes")
//         .where({ id })
//         .first();
//       console.log("checkid:", checkId);
//       if (!checkId) {
//         return null;
//       } else {
//         return db("schemes").update(scheme);
//       }
//     } catch (error) {}
//   }
