-- 2 - Clientes que ingresaron a la aplicación en las últimas 24hs
SELECT
    *
FROM
    cliente
WHERE
    lastLogin >= DATEADD (day, -1, GETDATE ())