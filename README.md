# Employee Directory

## Summary 
This software contains an application containing an employee directory. The application is a one page site that displays a table of employees. When the user loads the page, the page loads a message saying what the site is, and how to use it properly. The page also loads, a search bar for the user to be able to search the employee directory. The application has a cool feature that when the user starts to type the name of an employee, the site starts to filter the employees that match the characters that have been entered into the search field. As the user keeps on entering more and more characters, the list of employees that match those characters gets smaller as the user completes the name of the employee. The list of employees is displayed in a table that contains a picture colum, a name colum, phone number colum, email column, and DOB column. This application is great for employers or companies that have many employees, this makes it easy to get search for a specific employee. 

![site]

## Code Snippet 


```javascript
const handleChange = (event) => {
        //get user input
        const userInput = event.target.value.toLowerCase();

        const filteredList = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(userInput) > -1);

        setFiltered(filteredList);
    }
```