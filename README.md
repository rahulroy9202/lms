Need to create a NodeJS Application in ExpressJS.

You need to make a leave management solution that allows an employee to request for leaves and a manager to accept or reject the leaves.

You need to take care of:

1. Make provision to select a range of leaves (From and Till dates) - use a datepicker
2. Make sure that the number of days of leave is calculated after negating weekends from the date range.
3. Make sure that the selectable date range is not more than 15 days.
4. Make sure that any public holidays are also negated from it.
5. Make a login page which will act as a login for both the manager and the employee
6. The employee should be able to apply for leave and view the status of his applications
7. The manager should be able to see all employee applications with actions to accept and reject leaves with a reason for rejection

Please be mindful of the following:

1. Keep the code as structured as possible. Separate all logical models into their own files
2. Make a neat UI. While you are not expected to deliver a great design, you are expected to deliver a neat layout.
3. Use object oriented Javascript wherever possible (Use Prototypes in model logic if possible)
4. We leave the choice of front end frameworks to you.
5. For the purpose of storing data, use either MySQL or SQLite