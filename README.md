

<div id="header" align="center">##Cozy Furniture Store</div>

<div id="header" align="center">

  <img src="https://carasensei.com/images/CozyFurniture.png" width="800" height="400">

</div>

###Full-stack E-commerce app
###by Heather Mielke, Victoria Le, and Cara Phillips
###SEI Project 4, March 2022

###APP URL: https://buyfurniture.herokuapp.com/


###Frontend:
 using React, Node

 https://github.com/carablythe/furniture_frontend


###Backend:
 using django, Python

https://cozy-django.herokuapp.com/

https://github.com/Victoria-Q-Le/Project-4-backend


###TECHNOLOGIES USED:
Multiple full-CRUD and partial-CRUD models, created with django, Python, React (and React-router, Axios) and Node. Components were created for Add, Edit, Navbar and popup window upon Checkout. There was a different model created for the furniture (product) database, the shopping cart items, and the customer reviews.

###SUCCESSES:
For the first time we created an e-commerce site with near full functionality that any business would need, coupled with professional-caliber design. Functionality includes:
1. Furniture browsing (by "all", by category, or search by color or name of product)
2. Selection of products from the full products page or the more detailed show page (adjustment of quantity possible in the latter)
3. The ability to later adjust quantity or delete one's selection from the shopping cart
4. The order total calculated and summarized before checkout
5. Options for the customers to rate and comment on furniture (and edit and delete those posts)
6. Fixing almost all bugs we encountered!

###CHALLENGES:  
1. Heroku deployment was a little time-consuming, making migrations was confusing, and finding the reasons for the 404 messages on our backend site was a long, hard road. We ended up having to make a completely new backend app come the weekend, and after that things ran smoothly.
2. User authentication was attempted for a few days, but we were unsuccessful in getting it functioning.
3. It was also a little difficult to keep up a pace with group members so that no one was waiting on another to complete a task, as many aspects of creating an app are interdependent.
4. Eventually we got it figured out, but we had trouble getting the cart (array) to empty upon clicking the checkout button.  The axios delete request syntax for multiple ids at once was difficult to find.

###UNSOLVED PROBLEMS:  
In addition to user auth, we struggled with the quantity retention upon returning to the shopping cart (if the page was exited) for quantity changes made in the shopping cart.

###STRETCH/FUTURE GOALS:
Payment Processing and full user auth!  Maybe even a feature that lets the customer see how the furniture might look in their own home.
