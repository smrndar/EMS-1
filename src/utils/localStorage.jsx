const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete Sales Report",
          "description": "Prepare and submit the sales report for Q3",
          "taskDate": "2024-10-21",
          "category": "Sales",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Attend a meeting with the client to discuss new features",
          "taskDate": "2024-10-22",
          "category": "Meetings",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update CRM",
          "description": "Add new client data into CRM system",
          "taskDate": "2024-10-23",
          "category": "Admin",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Website Redesign",
          "description": "Work on homepage redesign as per client's feedback",
          "taskDate": "2024-10-20",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "description": "Fix the login page bug reported last week",
          "taskDate": "2024-10-19",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "SEO Optimization",
          "description": "Optimize the website for search engine rankings",
          "taskDate": "2024-10-25",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Blog Writing",
          "description": "Write a blog post about the latest product update",
          "taskDate": "2024-10-23",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Email Campaign",
          "description": "Set up an email campaign for the new product launch",
          "taskDate": "2024-10-21",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Product Testing",
          "description": "Test the new features before the product release",
          "taskDate": "2024-10-24",
          "category": "QA",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Mockups",
          "description": "Create mockups for the mobile app redesign",
          "taskDate": "2024-10-22",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Attend the weekly team meeting",
          "taskDate": "2024-10-20",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [{
    "id": 1, 
    "email": "admin@example.com",
    "password": "123"
  }];
  
   export const  setLocalStorage  = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))


   }
   export const  getLocalStorage  = () =>{

   const employees = JSON.parse (localStorage.getItem("employees"))
   const admin = JSON.parse (localStorage.getItem("admin"))
   console.log();
   
   
    return {employees,admin}
   }

