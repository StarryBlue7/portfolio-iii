# Professional Portfolio Page

This is my professional portfolio website. It displays my portfolio of coding and design work, while also showcasing my skills for CSS/HTML styling, and graphic design sensibilities. There are also links to my CV and various contact methods.

![Deployed page preview](./public/images/portfolio-site.gif)

### Dynamic Scaling

This page scales content and the content proportion of the screen to ideally utilize the space of various screen sizes. Additionally, the navigation bar at the top will reorganize itself into even rows when the viewport width is narrow enough that the row must wrap.

![Page scaling demonstration](./public/images/scaling-demo.gif)

### Dynamic Background

The dynamic background plays video frames as the page is scrolled.

![Video background](./public/images/video-bg.gif)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* IDE to view/edit source code (e.g. Visual Studio Code).
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)

### Installing

1. Clone repository.
1. Navigate to `portfolio-iii` directory in terminal.
1. `npm install` dependencies.
1. Add MySql user name and password to `.envEXAMPLE` file and change file name to `.env`.
1. Initialize database in SQL with `source db/schema.sql`.
1. Add info to `.json` files in `data` folder if desired, add to database with `npm run data`.
1. Run with `npm start` to view on local host.

### Deployment

1. Upload to webhosting service, such as [Heroku](https://www.heroku.com/).
1. Attach database addon, such as [jawsDB](https://www.jawsdb.com/).

---

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Sequelize ORM](https://sequelize.org/)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [GitHub](https://github.com/)

## Deployed Page

* [See Live Site](https://immense-lake-41636.herokuapp.com/)

## Author

Vince Lee
- [Portfolio](https://starryblue7.github.io/portfolio/)
- [Github](https://github.com/StarryBlue7)
- [LinkedIn](https://www.linkedin.com/in/vince-lee/)

## License

License: [MIT License](https://vince-lee.mit-license.org/)

## Acknowledgments

* Video scrolling background adapted from [Ollie Rogers](https://codepen.io/ollieRogers/pen/lfeLc/).
* Database service provided by [jawsDB](https://www.jawsdb.com/).
* Webhosting by [Heroku](https://www.heroku.com/).
* Custom font from [Google Fonts](https://fonts.google.com/).