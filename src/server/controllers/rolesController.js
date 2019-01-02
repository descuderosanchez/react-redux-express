var RolesInstance = require('../models/rolesInstance');

// Display list of all HospitalizadosInstance.
exports.roles_list_get = function(req, res) {
    res.send(
        {
            roles: ["Dashboard", "Parte diario", "Hospitalizados", "Calendario", "Administración"]
        }
    );
};