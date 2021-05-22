# Employee Directory

## Summary 
This software contains an application containing an employee directory. The application is a one page site that displays a table of employees. When the user loads the page, the page loads a message saying what the site is, and how to use it properly. The page also loads, a search bar for the user to be able to search the employee directory. The application has a cool feature that when the user starts to type the name of an employee, the site starts to filter the employees that match the characters that have been entered into the search field. As the user keeps on entering more and more characters, the list of employees that match those characters gets smaller as the user completes the name of the employee. The list of employees is displayed in a table that contains a picture colum, a name colum, phone number colum, email column, and DOB column. This application is great for employers or companies that have many employees, this makes it easy to get search for a specific employee. 

![site](./assets/site.gif)

## Technologies Used: 

* HTML - Used to build the website
* CSS - Used to style the website
* Bootstrap 4.6 - Used as the CSS framework 
* React - Used on the client side
* Git - Used to upload to to github
* GitHub - Used to store the repository
## Code Snippet: 
This code snippet represents the coolest part of this application. What this code does is that when the user enters a character into the search field, it filters the name of the employees and only displays the employees that match the input characters.

```javascript
const handleChange = (event) => {
        //get user input
        const userInput = event.target.value.toLowerCase();

        const filteredList = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(userInput) > -1);

        setFiltered(filteredList);
    }
```
## Repository Link
https://github.com/javimarashall/Employee-Directory

## Deploy Link
https://javimarashall.github.io/Employee-Directory/
## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)
