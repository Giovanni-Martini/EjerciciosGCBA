-- 4 - Viajes en los que el taxista con email X , llevó al pasajero con email Y.
SELECT
    v.*
FROM
    viaje v
    JOIN taxista t ON v.idTaxista = t.id
    JOIN cliente c ON v.idCliente = c.id
WHERE
    t.email = 'X'
    AND c.email = 'Y'