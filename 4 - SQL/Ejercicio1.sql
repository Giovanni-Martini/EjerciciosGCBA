-- 1 - Taxistas que tengan email pero no dominio (patente de vehículo)
SELECT
    *
FROM
    taxista
WHERE
    email IS NOT NULL
    AND email <> ''
    AND ( dominio IS NULL
    OR dominio = '' )