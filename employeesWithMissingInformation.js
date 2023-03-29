/* Write your T-SQL query statement below */
`
SELECT
    CONCAT(e.employee_id, s.employee_id) AS employee_id
FROM
    Employees e
FULL OUTER JOIN
    Salaries s
ON
    e.employee_id = s.employee_id
WHERE
    e.employee_id IS NULL OR s.employee_id IS NULL
ORDER BY
    employee_id ASC;
`;
