-- 3 - Recuento de todos los estados de viajes .
SELECT
    estado,
    COUNT(*)
FROM
    viaje
GROUP BY
    estado