import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker(menuItem){
  const menuDiv = document.createElement('div')
  menuDiv.classList.add('menu')
  const uList = document.createElement('ul')
  const list = document.createElement('li')
  const list2 = document.createElement('li')
  const list3 = document.createElement('li')
  const list4 = document.createElement('li')
  const list5 = document.createElement('li')
  const list6 = document.createElement('li')
  
  function listItem (item){
    for(let i = 0; i < menuItems.length; i++){
      let list = item.menuItems[i];
      list = uList.querySelectorAll('li')
      console.log(list)
    }
  }

  menuDiv.appendChild(uList)
  uList.appendChild(list)
  uList.appendChild(list2)
  uList.appendChild(list3)
  uList.appendChild(list4)
  uList.appendChild(list5)
  uList.appendChild(list6)


const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', () => {
  menuDiv.classList.toggle('menu--open')
})
  return menuDiv
}
console.log(menuMaker())
const header = document.querySelector('.header')
menuItems.forEach((item) => {
  const newArr = menuMaker(item)
  header.appendChild(newArr)

})


// let arrayLoop = menuDiv.querySelectorAll('u')
// const realArray = Array.from(arrayLoop)
// menuItems.forEach((item) => {
//   realArray.textContent = menuItems
// })
// console.log(realArray)
 

